function findConfiguratorBase(_) {
    var base = _;
    while (!!base && !base.configurator_base__) {
        base = base.$parent;
    }
    return base;
}

export default {
    data() {
        return {
            base: findConfiguratorBase(this)
        };
    }
}