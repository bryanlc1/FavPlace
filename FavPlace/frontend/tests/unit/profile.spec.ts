import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mocked-state';
import Profile from '../../src/views/Profile.vue'
const mockRouter={push:jest.fn()}

describe('Given  profile component',()=>{
    describe('When is rendered',()=>{
        test('hen should render a div with the class "profile"',()=>{
            const wrapper = mount(Profile,  {
                global: {
                  plugins: [router],
                  mocks: {
                      $router:mockRouter,
                    $store: {
                      state,
                      actions: {
                        deletePlace: jest.fn(),
                        deletePlaceInUser: jest.fn(),
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                  },
                },
            })
            expect(wrapper.html()).toContain('<div class="profile">')
        })
    })
} )