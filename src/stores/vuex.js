import { createStore } from 'vuex'

const cardOptions = {
    namespaced: true,
    actions: {},
    mutations: {
        CARDACTIVE(state) {
            state.cardActive = "active";
        },
        CARDINACTIVE(state) {
            state.cardActive = "";
        },
        SWIPERACTIVE(state) {
            state.swiperActive = "active";
        },
        SWIPERINACTIVE(state) {
            state.swiperActive = "";
        }
    },
    state: () => ({
        cardActive: "",
        swiperActive: ""
    }),
    getters: {}
}

const store = createStore({
    modules: {
        cardAbout: cardOptions
    }
})

export default store