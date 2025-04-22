import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AddReview from '@/components/AddReview.vue'
import { createTestingPinia } from '@pinia/testing'
import { useReviewStore } from '@/stores/reviewStore'
import { useUserStore } from '@/stores/userStore'
import { nextTick } from 'vue'

vi.mock('vue-router', () => ({
    useRoute: () => ({ params: { id: 1 } })
}))

describe('AddReview.vue', () => {
    let wrapper: any
    let reviewStore: any
    let userStore: any

    beforeEach(() => {
        wrapper = mount(AddReview, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                        stubActions: false,
                    }),
                ],
            },
        })

        reviewStore = useReviewStore()
        userStore = useUserStore()
        userStore.user = { id: 42, name: 'Cypress' }
    })

    it('toggles the form when "Add Review" button is clicked', async () => {
        expect(wrapper.find('form').exists()).toBe(false)
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('form').exists()).toBe(true)
    })

    it('shows error for invalid rating or comment', async () => {
        await wrapper.find('button').trigger('click')
        await wrapper.find('[data-cy="comment"]').setValue('Hi')
        await wrapper.find('[data-cy="rating"]').setValue(6)
        await wrapper.find('[data-cy="submit"]').trigger('submit')
        await nextTick()
        expect(wrapper.text()).toContain('Rating must be between 1 and 5.')
    })

    it('submits a valid review and resets form', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({ ok: true })
        ) as any

        reviewStore.addReview = vi.fn()
        reviewStore.fetchReviews = vi.fn()

        await wrapper.find('button').trigger('click')
        await wrapper.find('[data-cy="comment"]').setValue('Amazing movie!')
        await wrapper.find('[data-cy="rating"]').setValue(5)
        await wrapper.find('[data-cy="submit"]').trigger('submit')
        await nextTick()

        expect(reviewStore.addReview).toHaveBeenCalled()
        expect(reviewStore.fetchReviews).toHaveBeenCalledWith(1)
        expect(wrapper.vm.comment).toBe('')
        expect(wrapper.vm.rating).toBe(5)
    })
})
