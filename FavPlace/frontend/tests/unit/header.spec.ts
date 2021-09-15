import {mount} from '@vue/test-utils'
import router from '@/router'
import Header from '../../src/components/header.vue'
import state from '../mocked-state'

const mockRouter ={push:jest.fn()}
describe('Gievn a header component ',()=>{
    describe('When is rendered ',()=>{
        test('Then shul render nav class="header"',()=>{
            const wrapper=mount(Header,{
                global:{
                    mocks:{
                        $router: mockRouter,
                        $store:{
                            state:{
                                ...state,
                                islogged:true,
                            },
                            commit:jest.fn(),
                            dispatch:jest.fn()
                        }

                    }
                }
            })
            expect(wrapper.attributes().class).toBe('header')
        })
    })
})