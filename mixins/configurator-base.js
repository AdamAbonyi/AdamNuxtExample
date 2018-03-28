import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default function (customer, configurator) {
    return {
        data() {
            return {
                // This is here to decorate the mixin target as the configurator base
                configurator_base__: true
            };
        },
        computed: {
            ...mapState(customer, ["environment"]),
            ...mapState(configurator, ["state"]),
            ...mapState(configurator, { supportedEnvs: s => s.data.supportedEnvs }),
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
            ])
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
