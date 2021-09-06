import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    user:{
      name: '',
      lastName: '',
      email: '',
      password: '',
      image: '',
      places: []
    },
    token:'',
    islogged:false
  },
  mutations: {
    updateUser(state,payload){
      state.user.name=payload.user.name
      state.user.lastName=payload.user.lastName
      state.user.email=payload.user.email
      state.user.password=payload.user.password
      state.user.image=payload.user.image
      state.user.places=payload.user.places
      state.token=payload.token;
      state.islogged=true
    }
  },
  actions: {
    async loadUser({commit},payload){
      const {data}= await axios.post('http://localhost:5005/auth/login',payload)
      console.log(data);
      commit('updateUser', data)
    },

    async registerUser({dispatch},payload){
       await axios.post('http://localhost:5005/auth/register',payload)
      dispatch('loadUser',payload)
    }

  },
  modules: {
  },
});
