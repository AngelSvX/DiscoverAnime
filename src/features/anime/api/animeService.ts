import {computed, ref} from 'vue'
import type { IAnimeResponse, IOnlyAnimeData} from './types'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL

export const useAnimeApi = () => {
    const isLoading = ref<boolean>(false)
    const error = ref<string | null>(null)

    const fetchAnimeList = async () => {
        isLoading.value = true
        error.value = null

        try {
            const response = await axios.get<IAnimeResponse>(`${API_BASE}/anime`)
            return response.data.data

        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Unknown error'
            throw err
        } finally {
            isLoading.value = false
        }

    }

    const fetchAnimeById = async (id: string) => {
        isLoading.value = true
        error.value = null

        try {
            const response = await axios.get<IOnlyAnimeData>(`${API_BASE}/anime/${id}`)
            return response.data.data
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Unknown error'
            throw err
        } finally {
            isLoading.value = false
        }
    }

    return {
        isLoading: computed(() => isLoading.value),
        error: computed(() => error.value),
        fetchAnimeList,
        fetchAnimeById
    }

}