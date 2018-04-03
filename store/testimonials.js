export const state = () => ({
  testimonialPicks: []
})

export const actions = {
  initialize({ state, commit }, testimonials) {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(testimonials)

    commit("setTestimonialPicks", testimonials.slice(0,3))
  }
}

export const mutations = {
  setTestimonialPicks(state, value) {
    state.testimonialPicks = value;
  }
}
