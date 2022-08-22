import {createStore} from 'vuex'

export default createStore({
  state: {
    eventData: {
      //それぞれのデータ項目についてはREADMEを参照
      event_title: '',
      event_summary: '',
      event_description: '',
      event_place: '',
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
  getters: {
    entities: (state) => state.entities
  },
  mutations: {
    update(state, entities) {
      state.entities = entities;
    }
  },
  actions: {},
  modules: {}
})
