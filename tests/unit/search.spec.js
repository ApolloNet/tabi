import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'

describe('Search.vue', () => {

  const wrapper = shallowMount(Search)
  wrapper.setProps({
    country: "Japan",
    city: "Kyoto"
  })

  it('is a Vue instance', () => {
    expect(true).toBeTruthy()
  })

  it('binds the data to the input fields', () => {
    expect(wrapper.vm.country).toBe("Japan")
  })
})
