import { mount } from 'avoriaz'
import Vue from 'vue'
import Vuetify from 'vuetify'
import DataTable from '@/components/DataTable'
import { store } from '../../../src/store/store.js'

Vue.use(Vuetify)

describe('Shop.vue', () => {
  it('adds a new shop', async () => {
    // build component
    const wrapper = mount(DataTable, {store})
    const inputShopName = wrapper.find('input#shopName')[0]
    inputShopName.trigger('focus')
    inputShopName.element.value = 'AEON'
    inputShopName.trigger('input')
    await wrapper.vm.$nextTick()
    wrapper.find('button#save')[0].trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('AEON')
  })
  it('uses same store', () => {
    // build component
    const wrapper2 = mount(DataTable, {store})
    expect(wrapper2.html()).toContain('AEON')
  })
})
