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
            var q = findQuestion(confData, catq.questionIds[i]);
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

function initializeData(data) {
    initializeStructure(data, "answers", "answerById");
    initializeStructure(data, "selections", "selectionById");
    initializeStructure(data, "questions", "questionById");
    initializeStructure(data, "multiSelections", "multiSelectionById");
    initializeStructure(data, "accessoryCategories", "accessoryCategoryById");
    initializeStructure(data, "accessoryLists", "accessoryListById");

    return data;
}

export default {
    initializeData,

    findAnswer,
    findQuestion,
    findAccessoryCategory,
    findSelection,
    findMultiSelection,
    findAccessoryList,

    getPrice,
    formatPrice,

    saveSelection,

    applySelection,
    applyMultiSelection,
    applyAccessoryList
}