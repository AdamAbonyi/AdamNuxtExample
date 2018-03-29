import VueScrollTo from "vue-scrollto";

if (!!process.browser && !!window) {
    window.scrollState = {
        lastHash: undefined,
        inProgress: false,
    };

    window.customScrollTo = function (hash, options) {
        if (hash === window.scrollState.lastHash || window.scrollState.inProgress) return;

        var start = (el) => {
          window.scrollState.inProgress = true;
          window.scrollState.lastHash = hash;
        }
        var done = (el) => { window.scrollState.inProgress = false; }
        var cancel = (el) => { window.scrollState.inProgress = false; }

        VueScrollTo.scrollTo(hash, {
            offset: -100,
            duration: 500,
            cancelable: true,
            onStart: start,
            onDone: done,
            onCancel: cancel,
            ...options
        });
    };
}
