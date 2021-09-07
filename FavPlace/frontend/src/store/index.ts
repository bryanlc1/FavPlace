import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    user:[],
    places:[],
    token:'',
    islogged:false,
    filterCity:'',
    filterCategory:''
  },

  getters:{
    
      filterPlaces(state){
        if(state.filterCity.length>0 && state.filterCategory.length >0 ){
          
          const currentPLaces= state.places.filter(({city})=>city===state.filterCity)

          const newPLaces = currentPLaces.filter(({category})=>{
            const searchPlace = [category];
            return searchPlace.toString().toLowerCase().includes(state.filterCategory)
          }) 
           return newPLaces
        }

        if(state.filterCity.length>0 && state.filterCategory.length ===0){
          return state.places.filter(({city })=>city===state.filterCity)
        }

        
        if(state.filterCity.length===0 && state.filterCategory.length >0){
          return state.places.filter(({category })=>category===state.filterCategory)
        }
       
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
    }

  },
  modules: {
  },
});
