import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addTestObj: {
      title: "",
      type: "",
      coverPicUrl: "",
      description: "",
      context: "",
      // id: "",
      // publishTime: '',
      // sortValue: 0,
    },
    addQuestionObj: {
      previousTitle: "",
      coverPicUrl: "",
      contextPicUrl: "",
      description: "",
      subjectType: "",
    }
  },
  mutations: {
    setAddTest(state, data) {
      state.addTestObj = Object.assign({}, state.addTestObj, data)
    },
    clearAddTest(state) {
      state.addTestObj = Object.assign({}, {
        title: "",
        type: "",
        coverPicUrl: "",
        description: "",
        context: "",
      })
    },
    setAddQuestion(state, data) {
      state.addQuestionObj = Object.assign({}, state.addQuestionObj, data)
    },
    clearAddQuestion(state) {
      state.addQuestionObj = Object.assign({}, {
        previousTitle: "",
        coverPicUrl: "",
        contextPicUrl: "",
        description: "",
        subjectType: "",
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
