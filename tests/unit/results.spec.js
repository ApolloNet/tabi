import { mount } from '@vue/test-utils'
import Results from '@/components/Results.vue'

describe('Results.vue', () => {
  const cities = [
    {
      id: 'Q34600',
      name: 'Kyoto',
      population: 1466264,
      country: {
        id: 'Q17',
        name: 'Japan',
        languages: [
          {
            id: 'Q5287',
            name: 'Japanese',
          },
        ],
        currencies: [
          {
            id: 'Q8146',
            name: 'Japanese yen',
            unitSymbols: ['¥'],
          },
        ],
      },
      continent: {
        id: 'Q48',
        name: 'Asia',
      },
      location: {
        lat: 35.011667,
        long: 135.768056,
      },
    },
  ]

  const wrapper = mount(Results, {
    mocks: {
      $apollo: {},
    },
    propsData: {
      country: 'Japan',
      city: 'Kyoto',
    },
    data() {
      return {
        cities: cities,
      }
    },
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('displays the results', () => {
    expect(wrapper.findAll('.result-title').at(0).text()).toBe('Kyoto')
  })

  it('shows the map on button click', () => {
    wrapper.findAll('.result-map-button').at(0).trigger('click')
    expect(wrapper.vm.$data.lat).toBe(35.011667)
  })
})
