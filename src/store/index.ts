import { createStore } from 'vuex'
export default createStore({
    state: {
        sliders: [
            {
                name: 'Mr 1'
            },
            {
                name: 'Mr 2'
            },
            {
                name: 'Mr 3'
            },
        ],
    },

    mutations: {
        appendCard(state, value) {
            state.sliders.push(value);
        },

        removeCard(state, index) {
            state.sliders.splice(index, 1);
        },

    },
    actions: {
    },
    modules: {}
})