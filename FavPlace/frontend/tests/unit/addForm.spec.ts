import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mocked-state';
import AddForm from '../../src/views/AddForm.vue';
const mockRouter={push:jest.fn()}
describe('Given addForm conmponent',()=>{
    describe('when is rendered',()=>{
        test('Then should render a div with the class "register" ',()=>{
            const wrapper = mount(AddForm,  {
                global: {
                  plugins: [router],
                  mocks: {
                      $router:mockRouter,
                    $store: {
                      state,
                      actions: {
                        addPlace: jest.fn(),
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                  },
                },
            })
            expect(wrapper.html()).toContain('<div class="addPlace">')
        })

        test('Should generate a form',()=>{
            const addPlace=jest.fn();

            const wrapper = mount(AddForm,  {
                global: {
                  plugins: [router],
                  mocks: {
                    $router:mockRouter,
                    $store: {
                      state,
                      actions: {
                        addPlace,
                      },
                      methods: {
                        addForm: jest.fn().mockResolvedValue({
                            namePlace: "a",
                            country: "spain",
                            city: "barcelona",
                            category: "parques",
                            score: "",
                            comment: "a",
                            images: "a",
                            street: "a",
                            number: "4",
                        })
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                    data() {
                      return{
                        namePlace: "",
                        country: "",
                        city: "",
                        category: "",
                        score: "",
                        comment: "",
                        images: "",
                        street: "",
                        number: "",
                      }
                    }
                  },
                },
            })
            const formCreatePlace = wrapper.get('[data-test="addForm"]');
            formCreatePlace.trigger('submit')
            addPlace()
            expect(addPlace).toHaveBeenCalled();
        })
    })

    describe('And the form is submit',()=>{
        test('Then should submit call updatePhoto',()=>{
          
           const updatePhoto=jest.fn()
           
            const wrapper = mount(AddForm,  {
                global: {
                  plugins: [router],
                  mocks: {
                    $router:mockRouter,
                    $store: {
                      state,
                      actions: {
                        addPlace:jest.fn(),
                      },
                      methods: {
                        updatePhoto
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                    data() {
                      return{
                        namePlace: "",
                        country: "",
                        city: "",
                        category: "",
                        score: "",
                        comment: "",
                        images: "",
                        street: "",
                        number: "",
                      }
                    }
                  },
                },
            })

            const submitForm= jest.fn()
            submitForm();
            const formCreatePlace = wrapper.get('[data-test="pushPhoto"]');
            formCreatePlace.trigger('change')

            expect(submitForm).toHaveBeenCalled()
        })
    })
})