export const state = () => ({
    environment: "eur"
})

export const mutations = {
    selectEnvironment(state, env) {
        state.environment = env;
    }
}
