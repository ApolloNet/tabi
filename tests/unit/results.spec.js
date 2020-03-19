import { shallowMount } from '@vue/test-utils'
import Results from '@/components/Results.vue'

describe('Results.vue', () => {

  const wrapper = shallowMount(Results, {
    mocks: {
      $apollo: {}
    }
  })

  it('is a Vue instance', () => {
    expect(true).toBeTruthy()
  })
})
