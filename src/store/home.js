const PADDINGREQUEST_MUTATION = 'paddingrequestmutation';
const home = {
  state: {
    paddingRequest: []
  },
  actions: {
    paddingRequest(store, payload) {
      store.commit('paddingrequestmutation', payload)
    },
  },
  mutations: {
    [PADDINGREQUEST_MUTATION](state, payload) {
      state.paddingRequest.push(payload)
    },
  },
};
export default home;
