import { mount } from "@vue/test-utils"
import router from '../../src/router';
import state from '../mocked-state';
import Register from '../../src/views/Register.vue'

const mockRouter={push:jest.fn()}
describe('Given register component',()=>{
    describe('When is rendered',()=>{
        test('Then should render a div with the class "register"',()=>{
            const wrapper=mount(Register,{
                global: {
                    plugins: [router],
                    mocks: {
                     $router:mockRouter,
                      $store: {
                        state,
                        actions: {
                         registerUser: jest.fn(),
                        },
                        dispatch: jest.fn(),
                        commit: jest.fn(),
                      },
                    },
                  },
            })

            expect(wrapper.html()).toContain('<div class="register">')
        })

        test('should render a login form', () => {
            const registerUser = jest.fn()
          
            const wrapper = mount(Register,  {
                global: {
                  plugins: [router],
                  mocks: {
                    $router:mockRouter,
                    $store: {
                      state,
                      actions: {
                        registerUser,
                      },
                      methods: {
                        register: jest.fn().mockResolvedValue({
                          name:'bryan',
                          lastName:'b',
                            email: "@",
                          password: "1234",
                          error:false

                        })
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                    data() {
                      return{
                        name:'bryan',
                        lastName:'b',
                          email: "@",
                        password: "1234",
                      }
                    }
                  },
                },
            })
          
            const loginForm = wrapper.get('[data-test="register"]');
            loginForm.trigger('submit')
            registerUser()
            expect(registerUser).toHaveBeenCalled();
          })

    })
})