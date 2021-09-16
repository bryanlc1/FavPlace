import { mount } from '@vue/test-utils'
import router from '@/router'
import Home from '../../src/views/Home.vue'
import state from '../mocked-state'

describe('Given a home component',()=>{
    describe('When is rendered',()=>{
        test('Then should render a div with the class "home"',()=>{
           const filterPlaces=jest.fn()
            const wrapper = mount(Home,{
                global:{
                    plugins:[router],
                    mocks:{
                        $store:{
                            state:{
                                ...state,
                                filterCity:'a',
                                filterCategory:'parques'
                            },
                            getters:{
                                filterPlaces
                            },
                            actions:{
                                fetchPlaces:jest.fn()
                            },
                            commit:jest.fn(),
                            dispatch:jest.fn
                        },
                        data() {
                            return{
                             city:'',
                             category:''
                            }
                          }
                    }
                }
            })
            expect(wrapper.html()).toContain('<div class="home">')
        })
    })
})