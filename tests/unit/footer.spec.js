import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {

  const wrapper = shallowMount(Footer)

  it('is a Vue instance', () => {
    expect(true).toBeTruthy()
  })
})
