import axios from 'axios'
import type { IAnimeResponse, IOnlyAnimeData } from './types'

const API_BASE = import.meta.env.VITE_API_URL

export const useAnimeApi = () => {

    const fetchAnimeList = async () => {
        const response = await axios.get<IAnimeResponse>(`${API_BASE}/anime`)
        return response.data.data
    }

    const fetchAnimeById = async (id: string) => {
        const response = await axios.get<IOnlyAnimeData>(`${API_BASE}/anime/${id}`)
        return response.data.data
    }

    const fetchFavoriteAnime = async () => {
        const response = await axios.get<IAnimeResponse>(`${API_BASE}/top/anime`)
        return response.data.data
    }

    return {
        fetchAnimeList,
        fetchAnimeById,
        fetchFavoriteAnime
    }

}