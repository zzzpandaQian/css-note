import * as types from './mutations-types';

const mutations = {
  [types.SET_STATUS](state, payload) {
    for(let params in payload){
      state.status[params] = payload[params];
    }
  }
};

export default mutations;
