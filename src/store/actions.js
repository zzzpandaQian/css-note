import * as types from './mutations-types';

const actions = {
  setStatus ({commit}, params) {
    commit(types.SET_STATUS, params)
  }
}

export default actions;
