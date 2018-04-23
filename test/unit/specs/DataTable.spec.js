import { mount } from 'avoriaz'
import Vue from 'vue'
import Vuetify from 'vuetify'
import DataTable from '@/components/DataTable'
import { store } from '../../../src/store/store.js'

Vue.use(Vuetify)

function _clickNewButton(wrapper){
  wrapper.find('button#new')[0].trigger('click')  
}

function _clickEditButton(wrapper){
  wrapper.find('button')[1].trigger('click')
}

function _clickZeikomiCheck(wrapper){
  const flag = wrapper.find('.input-group--selection-controls__ripple')[0]
  flag.trigger('click')
}

function _inputName(wrapper, name){
  const inputShopName = wrapper.find('input#shopName')[0]
  inputShopName.trigger('focus')
  inputShopName.element.value = name
  inputShopName.trigger('input')
}

function _clickSave(wrapper){
  wrapper.find('button#save')[0].trigger('click')
}

describe('Shop.vue', () => {
  it('adds a new shop', async () => {
    // build component
    const wrapper = mount(DataTable, {store})
    expect(wrapper.vm.dialog).toBe(false)
    _clickNewButton(wrapper)
    expect(wrapper.vm.dialog).toBe(true)
    _clickZeikomiCheck(wrapper)
    _inputName(wrapper, 'AEON')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.formValid).toBe(true)
    _clickSave(wrapper)
    await wrapper.vm.$nextTick()
    expect(store.state.items[0].name).toBe('AEON')
    expect(wrapper.html()).toContain('AEON')

    // build component
    const wrapper2 = mount(DataTable, {store})
    console.log(store.state.items[0].name)
    console.log(wrapper2.html())
    expect(wrapper2.vm.dialog).toBe(false)
    _clickEditButton(wrapper2)
    expect(wrapper2.vm.dialog).toBe(true)
    _clickZeikomiCheck(wrapper2)
    _inputName(wrapper2, 'SAYYOU')
    await wrapper2.vm.$nextTick()
    expect(wrapper2.vm.formValid).toBe(true)
    _clickSave(wrapper2)
    await wrapper2.vm.$nextTick()
    expect(store.state.items[0].name).toBe('SAYYOU')
    expect(store.state.items[0].taxIncluded).toBe(false)
    expect(wrapper2.html()).toContain('SAYYOU')
  })
})
