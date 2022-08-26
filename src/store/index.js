import {createStore} from 'vuex'

export default createStore({
  state: {
    eventData: {
      //それぞれのデータ項目についてはREADMEを参照
      event_title: '',
      event_summary: '',
      event_description: '',
      event_place_text: '',
      event_place_id: '',
      event_genre_id: 0,
      icon_filename: '',
      org_name: '',
      org_description: '',
      sns_twitter: '',
      sns_facebook: '',
      sns_instagram: '',
      sns_website: '',
    }
  },
  getters: {},
  mutations: {
    update(state, newData) {
      state.eventData = newData
    }
  },
  actions: {},
  modules: {}
})
