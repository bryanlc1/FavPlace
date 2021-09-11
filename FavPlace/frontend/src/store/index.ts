import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    user:{},
    userId:'',
    publicProfile:{},
    places:[],
    token:'',
    refreshToken:'',
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
      state.userId=payload.user._id
      state.token=payload.token;
      state.refreshToken=payload.refreshToken;
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
    },
    deleteDataFromLocalStorage(state) {
      localStorage.setItem("userData", JSON.stringify(""));
      const logedOutUser = {token: "", refreshToken: ""};
      state.user=[]
      state.userId=''
      state.filterCategory=''
      state.filterCity=''
      state.islogged=false;
      state.token=logedOutUser.token
      state.refreshToken=logedOutUser.refreshToken
  },
  updatePlaces(state,payload){
    state.user=payload
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
      localStorage.setItem("userData", JSON.stringify({email: data.user.email, password: data.user.password}));
      commit('updateUser', data)
    },


     registerUser({dispatch},payload){
        axios.post('http://localhost:5005/auth/register',payload)
      dispatch('loadUser',{email: payload.email, password: payload.password})
    },

    fetchUserFromLocalStorage({dispatch}) {
      const localStorageUser = JSON.parse(localStorage.getItem("userData") || "")
      dispatch("loadUser", {email: localStorageUser.email, password: localStorageUser.password});
    },
    async fetchPublic({commit},id){
      const {data}=await axios.get(`http://localhost:5005/users/public/${id}`)
      commit('loadPublic',data)
    },
    
  async addPlace({state,dispatch},{dataPlace,userId}){
    
    const {data}=await axios.post("http://localhost:5005/places/create",{...dataPlace, user:userId},{
      headers: { Authorization: `Bearer ${state.token}`} 
    })
      dispatch('addPlaceInUser',data)
      console.log('indexdataa',data)
    },

  async addPlaceInUser({state,commit},payload){
       const {data}= await axios.patch(`http://localhost:5005/users/${state.userId}`,{places:payload._id},{
          headers: { Authorization: `Bearer ${state.token}`} 
        })
      commit('updatePlaces',data)
    }

  },
  modules: {
  },
});
