import { mount } from 'avoriaz'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Hello from '@/components/Hello'
import { store } from '../../../src/store/store.js'

Vue.use(Vuetify)

describe('Hello.vue', () => {
  it('should input name', async () => {
      const wrapper = mount(Hello, {store})
      console.log(wrapper.html())
      const name = wrapper.find('input#name')[0]
      name.trigger('focus')
      name.element.value = 'TARO'
      name.trigger('input')
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.name).toEqual('TARO')
      const button = wrapper.find('button#btn')[0]
      button.trigger('click')      
      await wrapper.vm.$nextTick()
      expect(store.state.name).toEqual('TARO')
    })
    it('should display store content', () => {
      const wrapper = mount(Hello, {store})
      expect(wrapper.text()).toContain('TARO')
      console.log(wrapper.html())
    })
})
