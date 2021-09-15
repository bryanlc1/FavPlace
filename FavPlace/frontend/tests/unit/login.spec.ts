import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mocked-state';
import Login from '../../src/views/Login.vue';
const mockRouter={push:jest.fn()}
describe('Given login component',()=>{
    describe('When is rendered', () => {
        test('Then should render a div with the class "login"', () => {
            const wrapper = mount(Login,  {
                global: {
                  plugins: [router],
                  mocks: {
                      $router:mockRouter,
                    $store: {
                      state,
                      actions: {
                        loadUser: jest.fn(),
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                  },
                },
            })
            expect(wrapper.html()).toContain('<div class="login">')
        })

        test('should render a login form', () => {
            const loadUser = jest.fn()
          
            const wrapper = mount(Login,  {
                global: {
                  plugins: [router],
                  mocks: {
                    $router:mockRouter,
                    $store: {
                      state,
                      actions: {
                        loadUser,
                      },
                      methods: {
                        login: jest.fn().mockResolvedValue({
                          email: "@",
                          password: "1234"
                        })
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                    data() {
                      return{
                        email: "",
                        password: "",
                      }
                    }
                  },
                },
            })
          
            const loginForm = wrapper.get('[data-test="loginForm"]');
            loginForm.trigger('submit')
            loadUser()
            expect(loadUser).toHaveBeenCalled();
          })
        
    })
})