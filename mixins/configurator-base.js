import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

import Selection from "~/components/ConfiguratorSelection.vue";
import MultiSelection from "~/components/ConfiguratorMultiSelection.vue";
import AccList from "~/components/ConfiguratorAccessoryList.vue";
import Summary from "~/components/ConfiguratorSummary.vue";

export default function (customer, configurator) {
    return {
        components: {
            Selection,
            MultiSelection,
            AccList,
            Summary
        },
        computed: {
            ...mapState(customer, ["environment"]),
            ...mapState(configurator, ["state"]),
            ...mapGetters(configurator, [
                "isStarted",
                "isBackStepAvailable",
                "currentState",
                "getPrice",
                "formatPrice",
                "isAnswerSelected",
                "findAnswer",
                "findAccessoryCategory",
                "findQuestion"
            ]),

            envVariant() {
                return function (env) {
                    return this.environment === env
                        ? "secondary"
                        : "primary";
                }.bind(this);
            },
            getComponentName() {
                switch (this.currentState) {
                    case "single-sel":
                        return "Selection";
                    case "multi-sel":
                        return "MultiSelection";
                    case "acc-list":
                        return "AccList";
                    case "summary":
                        return "Summary";
                    default:
                        return undefined;
                }
            },
            getComponentData() {
                var c = this.state;
                switch (this.currentState) {
                    case "single-sel":
                        return c.curSelection;
                    case "multi-sel":
                        return c.multiSelection;
                    case "acc-list":
                        return c.accessoryList;
                    default:
                        return undefined;
                }
            }
        },
        methods: {
            ...mapActions(configurator, [
                "selectAnswer",
                "selectAccessoryList",
                "popAnswerOrMultiselect",
                "popAny"
            ]),
            ...mapMutations(customer, ["selectEnvironment"]),
            ...mapMutations(configurator, [
                "reset",
                "selectSummary",
                "popAnswer"
            ]),

            reloadPage() {
                window.location.reload();
            }
        }
    };
};
