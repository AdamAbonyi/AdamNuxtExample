import VueScrollTo from "vue-scrollto";

let params = {
  lastHash: undefined,
  inProgress: false,
}

export default function scrollTo(hash, options) {
  if (hash === params.lastHash && params.inProgress) return;
  var start = (el) => { params.inProgress = true}
  var done = (el) => { params.inProgress = false}
  var cancel = (el) => { params.inProgress = false}

  VueScrollTo.scrollTo(hash, {
    offset: -100,
    duration: 500,
    cancelable: true,
    onStart: start,
    onDone: done,
    onCancel: cancel,
    ...options
  });
}
