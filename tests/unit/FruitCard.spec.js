import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import Button from '@/components/Button/Button'
import CardList from '@/components/FruitCard/CardList/CardList'
import FruitCard from '@/components/FruitCard/FruitCard'
import Photo from '@/components/Photo/Photo'

Vue.use(Vuetify)

const fruitName = 'cherry'
const $route = { path: `/fruits/${fruitName}` }
const $router = new VueRouter()

describe('FruitCard.vue', () => {
  let vuetify
  let wrapper
  beforeEach(() => {
    const localVue = createLocalVue()
    vuetify = new Vuetify()
    localVue.use(vuetify)

    wrapper = mount(FruitCard, {
      localVue,
      vuetify,
      stubs: ['router-link'],
      mocks: { $route, $router },
      propsData: {
        to: $route.path,
        title: fruitName,
        text: 'More info',
        items: [
          {
            price: '300.00 $'
          }
        ],
        iconName: 'mdi-trash-can-outline',
        cardCols: {
          imageCol: {
            cols: '4',
            colSm: '0'
          },
          infoCol: {
            cols: '8',
            colSm: '0',
            fruitInfo: {
              cols: '9'
            },
            iconDelete: '1'
          }
        }
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('Renders a vue instance', () => {
    expect(wrapper.findComponent(FruitCard).vm).toBeTruthy()
  })

  it('Renders child components as Vue instances', () => {
    expect(wrapper.findComponent(Photo)).toBeTruthy()
    expect(wrapper.findComponent(Button)).toBeTruthy()
    expect(wrapper.findComponent(CardList)).toBeTruthy()
  })

  it('Should render correct contents', async () => {
    const image = wrapper.find('.v-image')
    await wrapper.vm.$nextTick()
    expect(image.exists()).toBeTruthy()
    expect(wrapper.classes()).toContain('v-card--medium')
    expect(wrapper.classes()).toContain('v-sheet--outlined')
  })

  it('Should render a placeholder if a source is not provided', async () => {
    wrapper.setProps({ src: 'https://www.iaea.org/newscenter/news/argentinas-newly-recognized-fruit-fly-free-areas-expedite-fresh-fruit-exports-to-china' })
    await wrapper.vm.$nextTick()

    expect(wrapper.find('div.v-image__image.v-image__image--cover')
      .attributes().style)
      .toBe("background-image: url(https://www.iaea.org/newscenter/news/argentinas-newly-recognized-fruit-fly-free-areas-expedite-fresh-fruit-exports-to-china); background-position: center center;")
  
    // Remove source to check placeholder is rendered
    wrapper.setProps({ src: '' })
    await wrapper.vm.$nextTick()
    
    expect(wrapper.find('div .v-image__placeholder').exists()).toBe(true)
  })

  it('Should go to a route on click event', async () => {
    expect(wrapper.vm.$route.path).toBe($route.path)
    wrapper.vm.$emit('click', $route.path)
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().click[0]).toEqual(['/fruits/cherry'])
    expect(wrapper.vm.$route.path).toEqual('/fruits/cherry')
  })
})
