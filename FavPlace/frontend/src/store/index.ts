import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    user:[],
    publicProfile:{},
    places:[],
    token:'',
    islogged:false,
    filterCity:'',
    filterCategory:'',
  },

  getters:{
    
     filterPlaces(state){
        if(state.filterCity.length && state.filterCategory.length){
          
          return state.places.filter(({city,category}:any)=>{
            return city.toLowerCase().includes(state.filterCity) && category.toLowerCase() === state.filterCategory.toLowerCase();
          })       
        }

        if(state.filterCity.length && !state.filterCategory.length ){
          return state.places.filter(({city}: any)=> city.includes(state.filterCity))
        }

        
        if(!state.filterCity.length && state.filterCategory.length ){
          return state.places.filter(({category })=>category===state.filterCategory)
        }
       
        return state.places;
      }
  },

  mutations: {
    updateUser(state,payload){
      state.user=payload.user
      state.token=payload.token;
      state.islogged=true
    },
    loadPlaces(state,payload){
      state.places=payload;
    },

    fetchCity(state,payload){
      state.filterCity=payload;
    },

    fetchCategory(state,payload){
      state.filterCategory=payload
    },
    loadPublic(state,payload){
      state.publicProfile=payload
    }



  },
  actions: {
    async fetchPlaces({commit}){
      const {data}=await axios.get('http://localhost:5005/places')
      console.log(data);
      commit('loadPlaces',data);
    },
    async loadUser({commit},payload){
      const {data}= await axios.post('http://localhost:5005/auth/login',payload)
      console.log(data);
      commit('updateUser', data)
    },

    async registerUser({dispatch},payload){
       await axios.post('http://localhost:5005/auth/register',payload)
      dispatch('loadUser',payload)
    },
    async fetchPublic({commit},id){
      const {data}=await axios.get(`http://localhost:5005/users/public/${id}`)
      console.log('hola',data)
      commit('loadPublic',data)
    }

  },
  modules: {
  },
});
