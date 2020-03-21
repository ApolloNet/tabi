import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Footer from '@/components/Footer.vue'
import Search from '@/components/Search.vue'

describe('App.vue', () => {

  const expectedSearchObject = {country: 'France', city: 'Paris'}
  const wrapper = shallowMount(App)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('receives the search-for event from the Footer component', () => {
    wrapper.find(Footer).vm.$emit('search-for', expectedSearchObject)
    expect(wrapper.vm.$data.searchObject).toBe(expectedSearchObject)
  })

  it('receives the search-for event from the Search component', () => {
    wrapper.find(Search).vm.$emit('search-for', expectedSearchObject)
    expect(wrapper.vm.$data.searchObject).toBe(expectedSearchObject)
  })
})
