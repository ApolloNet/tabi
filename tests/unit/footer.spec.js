import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  const searchFor = jest.fn()
  const wrapper = shallowMount(Footer)
  wrapper.setData({
    countries: {
      papua: { id: 1, name: 'papua' },
      kenya: { id: 2, name: 'kenya' },
    },
  })
  wrapper.setMethods({
    searchFor: searchFor,
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains footer links', () => {
    expect(wrapper.findAll('.footer-link').exists()).toBe(true)
  })

  it('calls searchFor method on .footer-link click', () => {
    wrapper.findAll('.footer-link a').at(0).trigger('click')
    expect(searchFor).toBeCalled()
  })
})
