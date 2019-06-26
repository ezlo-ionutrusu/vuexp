const setAuthStatus = ({ commit }, payload) => {
  commit('SET_USER_AUTH', payload);
};

const actions = { setAuthStatus };

export default { actions };
