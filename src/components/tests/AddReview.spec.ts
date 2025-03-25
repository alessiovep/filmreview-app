import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import AddReview from '../AddReview.vue'
import { createTestingPinia } from '@pinia/testing'

const mountWithPinia = () => {
    return mount(AddReview, {
        global: {
            plugins: [createTestingPinia({ createSpy: vi.fn })]
        }
    })
}

describe('AddReview.vue', () => {
    it('renders the add review button', () => {
        const wrapper = mountWithPinia()
        expect(wrapper.text()).toContain('Add Review')
    })

    it('shows the form when button is clicked', async () => {
        const wrapper = mountWithPinia()
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('form').exists()).toBe(true)
    })

    it('shows error for short comment', async () => {
        const wrapper = mountWithPinia()
        await wrapper.find('button').trigger('click')
        await wrapper.find('textarea').setValue('bad')
        await wrapper.find('form').trigger('submit.prevent')
        expect(wrapper.text()).toContain('Comment must be at least 5 characters')
    })

    it('shows error for invalid rating', async () => {
        const wrapper = mountWithPinia()
        await wrapper.find('button').trigger('click')
        await wrapper.find('input[type=number]').setValue(6)
        await wrapper.find('form').trigger('submit.prevent')
        expect(wrapper.text()).toContain('Rating must be between 1 and 5.')
    })
})
