function findConfiguratorBase(_) {
    var base = _;
    while (!!base && !base.getComponentName) {
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