import { mount } from '@vue/test-utils'
import router from '@/router'
import Home from '../../src/views/Home.vue'
import state from '../mocked-state'

describe('Given a home component',()=>{
    describe('When is rendered',()=>{
        test('Then should render a section with the class is "search"',()=>{
            const wrapper = mount(Home,{
                global:{
                    plugins:[router],
                    mocks:{
                        $store:{
                            state:{
                                ...state,
                                filterCity:'',
                                filterCategory:''
                            },
                            commit:jest.fn(),
                            dispatch:jest.fn
                        }
                    }
                }
            })
            expect(wrapper.html()).toContain('<section class="search">')
        })
    })
})