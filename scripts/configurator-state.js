function getPrice(environment, price) {
    return ((price || {})[environment] || 0);
}

function isDefaultAnswer(environment, answer) {
    if (!answer.defaultFor) return false;
    if (answer.defaultFor === "all") return true;

    var envs = answer.defaultFor.split(",");
    for (var i = 0; i < envs.length; i++) {
        var env = envs[i].trim();
        if (!env) continue;

        if (env === environment) return true;
    }

    return false;
}

function getDefaultAnswer(confData, environment, question) {
    var defaultAnswer;
    for (var i = 0; i < question.answerIds.length; i++) {
        var answer = findAnswer(confData, question.answerIds[i]);
        if (!answer) continue;

        defaultAnswer = answer;
        if (isDefaultAnswer(environment, answer)) break;
    }

    return defaultAnswer || {};
}

function preFillMultiselectionChoices(conf, confData, environment) {
    conf.multiSelectionChoices = {};
    for (var i = 0; i < conf.multiSelection.questionIds.length; i++) {
        var q = findQuestion(confData, conf.multiSelection.questionIds[i]);
        if (!q) continue;

        conf.multiSelectionChoices[q.id] = getDefaultAnswer(confData, environment, q).id;
    }
}

function preFillAccessoryListChoices(conf, confData, environment) {
    conf.accessoryListChoices = {};
    for (var i = 0; i < conf.accessoryList.categorizedQuestions.length; i++) {
        var catq = conf.accessoryList.categorizedQuestions[i];
        for (var j = 0; j < catq.questionIds.length; j++) {
            var q = findQuestion(confData, catq.questionIds[j]);
            if (!q) continue;

            conf.accessoryListChoices[q.id] = getDefaultAnswer(confData, environment, q).id;
        }
    }
}

function formatPrice(environment, price) {
    return (getPrice(environment, price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + environment.toUpperCase());
}

function findAnswer(confData, answerId) {
    return confData.answerById[answerId];
}

function findSelection(confData, selId) {
    return confData.selectionById[selId];
}

function findQuestion(confData, qId) {
    return confData.questionById[qId];
}

function findMultiSelection(confData, multiSelId) {
    return confData.multiSelectionById[multiSelId];
}

function findAccessoryCategory(confData, accCatId) {
    return confData.accessoryCategoryById[accCatId];
}

function findAccessoryList(confData, accListId) {
    return confData.accessoryListById[accListId];
}

function applySelection(conf, confData, selId) {
    selId = (selId || confData.rootSelectionId);

    conf.completed = false;
    conf.curSelection = (!!selId.id ? selId : findSelection(confData, selId));
    conf.multiSelection = null;
    conf.multiSelectionChoices = {};
    conf.accessoryList = null;
    conf.accessoryListChoices = {};
}

function applyMultiSelection(conf, confData, environment, multiSelId) {
    var msel = (!!multiSelId.id ? multiSelId : findMultiSelection(confData, multiSelId));

    conf.completed = false;
    conf.curSelection = null;

    if (conf.multiSelection !== msel) {
        conf.multiSelection = msel;
        preFillMultiselectionChoices(conf, confData, environment);
    }

    conf.accessoryList = null;
    conf.accessoryListChoices = {};
}

function applyAccessoryList(conf, confData, environment, accListId) {
    var accl = (!!accListId.id ? accListId : findAccessoryList(confData, accListId));

    conf.completed = false;
    conf.curSelection = null;

    if (conf.accessoryList !== accl) {
        conf.accessoryList = accl;
        preFillAccessoryListChoices(conf, confData, environment);
    }
}

function applySummary(state) {
    state.completed = true;
}

function saveSelection(conf, answer) {
    if (!!conf.curSelection) conf.selStack.push({ selection: conf.curSelection, answer: answer });
}

function initializeStructure(confData, arrName, hashName) {
    confData[arrName] = confData[arrName] || [];
    confData[hashName] = {};

    var arr = confData[arrName];
    var hash = confData[hashName];

    for (var i = 0; i < arr.length; i++) {
        hash[arr[i].id] = arr[i];
    }
}

function arrayToHash(arr) {
    var hash = {};
    for (var i = 0; i < arr.length; i++) {
        hash[arr[i]] = true;
    }
    return hash;
}

function popAnswerInternal(state) {
    var c = state.state, cd = state.data;

    var selEx = c.selStack.pop();
    if (!selEx) return;

    applySelection(c, cd, selEx.selection);
}

function initializeData(data, { answerClasses, questionClasses, accessoryCategoryClasses }) {
    initializeStructure(data, "answers", "answerById");
    initializeStructure(data, "selections", "selectionById");
    initializeStructure(data, "questions", "questionById");
    initializeStructure(data, "multiSelections", "multiSelectionById");
    initializeStructure(data, "accessoryCategories", "accessoryCategoryById");
    initializeStructure(data, "accessoryLists", "accessoryListById");

    answerClasses = answerClasses || {};
    questionClasses = questionClasses || {};
    accessoryCategoryClasses = accessoryCategoryClasses || {};

    var supportedEnvs = {};
    for (var i = 0; i < data.answers.length; i++) {
        var a = data.answers[i];
        var c = answerClasses[a.id] || {};

        a.classes = {
            title: arrayToHash(c.title || []),
            subTitle: arrayToHash(c.subTitle || []),
            text: arrayToHash(c.text || []),
            detail: {
                mainText: arrayToHash((c.detail || {}).mainText || []),
                secondaryText: arrayToHash((c.detail || {}).secondaryText || [])
            }
        }

        if (!!a.price) {
            supportedEnvs = { ...supportedEnvs, ...a.price };
        }
    }

    data.supportedEnvs = Object.keys(supportedEnvs);

    for (var i = 0; i < data.questions.length; i++) {
        var q = data.questions[i];
        var c = questionClasses[q.id] || {};

        q.classes = {
            title: arrayToHash(c.title || []),
            text: arrayToHash(c.text || [])
        }
    }

    for (var i = 0; i < data.accessoryCategories.length; i++) {
        var ac = data.accessoryCategories[i];
        var c = accessoryCategoryClasses[ac.id] || {};

        ac.classes = {
            title: arrayToHash(c.title || []),
            shortTitle: arrayToHash(c.shortTitle || []),
            text: arrayToHash(c.text || [])
        }
    }

    return data;
}

export default function () {
    return {
        state: () => ({
            data: null,
            state: {
                completed: false,
                curSelection: null,
                selStack: [],
                multiSelection: null,
                multiSelectionChoices: {},
                accessoryList: null,
                accessoryListChoices: {}
            }
        }),

        getters: {
            isStarted(state) {
                const conf = state.state;
                return (!!conf.curSelection || !!conf.multiSelection || !!conf.accessoryList)
            },
            currentState(state, getters) {
                const conf = state.state;
                if (!getters.isStarted) return "not-started";
                else if (conf.completed) return "summary";
                else if (!!conf.accessoryList) return "acc-list";
                else if (!!conf.multiSelection) return "multi-sel";
                else return "single-sel";
            },
            isBackStepAvailable(state) {
                return !!(state.state.selStack || []).length;
            },
            findAnswer(state) {
                return aId => findAnswer(state.data, aId);
            },
            findQuestion(state) {
                return qId => findQuestion(state.data, qId);
            },
            findAccessoryCategory(state) {
                return acId => findAccessoryCategory(state.data, acId);
            },
            getPrice(state, getters, rootState) {
                return price => getPrice(rootState.customer.environment, price);
            },
            formatPrice(state, getters, rootState) {
                return price => formatPrice(rootState.customer.environment, price);
            },
            isAnswerSelected(state) {
                return ({ answerId, questionId }) => {
                    if (!answerId) return false;

                    if (!!state.state.accessoryList) {
                        return (state.state.accessoryListChoices[questionId] === answerId);
                    } else if (!!state.state.multiSelection) {
                        return (state.state.multiSelectionChoices[questionId] === answerId);
                    }

                    return false;
                }
            }
        },

        actions: {
            selectAnswer({ rootState, commit }, { answerId, questionId }) {
                commit("selectAnswer", { answerId, questionId, env: rootState.customer.environment })
            },
            selectAccessoryList({ rootState, commit }, accListId) {
                commit("selectAccessoryList", { accListId, env: rootState.customer.environment })
            },
            popAnswerOrMultiselect({ rootState, commit }) {
                commit("popAnswerOrMultiselect", { env: rootState.customer.environment })
            },
            popAny({ rootState, commit }) {
                commit("popAny", { env: rootState.customer.environment })
            }
        },

        mutations: {
            initialize(state, { configuratorData, classes: {
                answerClasses,
                questionClasses,
                accessoryCategoryClasses
            } }) {
                state.data = initializeData(configuratorData, {
                    answerClasses,
                    questionClasses,
                    accessoryCategoryClasses
                });
            },
            reset(state) {
                state.state.selStack = [];
                applySelection(state.state, state.data);
            },
            selectAnswer(state, { answerId, questionId, env }) {
                var c = state.state, cd = state.data;
                if (!!c.accessoryList) {
                    if (!c.accessoryListChoices[questionId] || (c.accessoryListChoices[questionId] === answerId)) return;
                    c.accessoryListChoices = { ...c.accessoryListChoices, [questionId]: answerId }
                    return;
                } else if (!!c.multiSelection) {
                    if (!c.multiSelectionChoices[questionId] || (c.multiSelectionChoices[questionId] === answerId)) return;
                    c.multiSelectionChoices = { ...c.multiSelectionChoices, [questionId]: answerId }
                    return;
                }

                if (!c.curSelection || (c.curSelection.id !== questionId)) return;

                var answer = findAnswer(cd, answerId);
                if (!answer) return;

                var targetId;
                for (var i = 0; i < c.curSelection.answers.length; i++) {
                    if (c.curSelection.answers[i].id === answer.id) {
                        targetId = c.curSelection.answers[i].targetId;
                        break;
                    }
                }

                if (targetId === "summary") {
                    saveSelection(c, answer);
                    applySummary(c);
                }
                else if (!!targetId) {
                    var sel = findSelection(cd, targetId);
                    if (!!sel) {
                        saveSelection(c, answer);
                        applySelection(c, cd, sel);
                        return;
                    }

                    var msel = findMultiSelection(cd, targetId);
                    if (!!msel) {
                        saveSelection(c, answer);
                        applyMultiSelection(c, cd, env, msel);
                        return;
                    }

                    var accl = findAccessoryList(cd, targetId);
                    if (!!accl) {
                        saveSelection(c, answer);
                        applyAccessoryList(c, cd, env, accl);
                        return;
                    }
                }
            },
            selectAccessoryList(state, { accListId, env }) {
                var c = state.state, cd = state.data;
                if (accListId === "summary") {
                    applySummary(c);
                    return;
                }

                var accl = findAccessoryList(cd, accListId);
                if (!accl) return;

                applyAccessoryList(c, cd, env, accl);
            },
            selectSummary(state) {
                applySummary(state.state);
            },
            popAnswer(state) {
                popAnswerInternal(state);
            },
            popAnswerOrMultiselect(state, { env }) {
                var c = state.state, cd = state.data;

                if (!!c.multiSelection) {
                    applyMultiSelection(c, cd, env, c.multiSelection);
                } else {
                    popAnswerInternal(state);
                }
            },
            popAny(state, { env }) {
                var c = state.state, cd = state.data;

                if (!!c.accessoryList) {
                    applyAccessoryList(c, cd, env, c.accessoryList);
                } else if (!!c.multiSelection) {
                    applyMultiSelection(c, cd, env, c.multiSelection);
                } else {
                    popAnswerInternal(state);
                }
            }
        }
    };
}
