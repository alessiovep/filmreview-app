import { defineStore } from 'pinia'
import axios from 'axios'

export const useReviewStore = defineStore('reviewStore', {
    state: () => ({
        reviews: [] as any[]
    }),
    actions: {
        async fetchReviews(filmId: number) {
            const { data } = await axios.get(`http://localhost:3001/reviews?filmId=${filmId}&_expand=user`)
            this.reviews = data
        },
        async addReview(review: any) {
            const { data } = await axios.post('http://localhost:3001/reviews', review)
            this.reviews.push(data)
        }
    }
})
