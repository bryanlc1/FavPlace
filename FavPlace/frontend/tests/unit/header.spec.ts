import {mount} from '@vue/test-utils'
import router from '@/router'
import Header from '../../src/components/header.vue'
import state from '../mocked-state'
describe('Gievn a header component ',()=>{
    describe('When is rendered ',()=>{
        test('Then shul render nav class="header"',()=>{
            const wrapper=mount(Header,{
                global:{
                    plugins:[router],
                    mocks:{
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
            console.log(wrapper.html())

            expect(wrapper.attributes().class).toBe('header')
        })
    })
})