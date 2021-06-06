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
    },
    picLunObj: {
      slideshowTitle: "",
      slideshowPicUrl: "",
      description: "",
      slideshowPicLink: "",
    },
    scoreObj: {
      evaluationTitle: '',
      suggest: '',
      totalScore: '',
      evaluationType: '',
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
    },
    setAddPic(state, data) {
      state.picLunObj = Object.assign({}, state.picLunObj, data)
    },
    clearAddPic(state) {
      state.picLunObj = Object.assign({}, {
        previousTitle: "",
        coverPicUrl: "",
        contextPicUrl: "",
        description: "",
        subjectType: "",
      })
    },
    setScoreObj(state, data) {
      state.scoreObj = Object.assign({}, state.scoreObj, data)
    },
    clearScoreObj(state) {
      state.picLunObj = Object.assign({}, {
        evaluationTitle: '',
        suggest: '',
        totalScore: '',
        evaluationType: '',
      })
    },
  },
  actions: {
  },
  modules: {
  }
})
