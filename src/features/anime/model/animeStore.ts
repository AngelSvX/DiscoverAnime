import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useAnimeApi } from "../api/animeService";
import type { IAnimeData } from "../api/types";


export const useAnimeStore = defineStore('anime', () => {
    // Estado
    const animes = ref<IAnimeData[]>([])
    const favoriteAnimes = ref<IAnimeData[]>([])
    const currentAnime = ref<IAnimeData | null>(null)
    const animesFilters = ref<IAnimeData[]>([])

    const loading = ref<boolean>(false)
    const isError = ref<string | null>(null)

    const animeCount = computed(() =>
        animes.value.length
    )

    const { fetchAnimeById, fetchAnimeList, fetchFavoriteAnime, fetchFilterAnime } = useAnimeApi()

    // Actions

    // Async Actions
    const loadAnimes = async () => {
        loading.value = true
        isError.value = null

        try {
            animes.value = await fetchAnimeList()
        } catch (err) {
            isError.value = err instanceof Error ? err.message : 'Unknown error'
        } finally {
            loading.value = false
        }

    }

    const loadAnimeById = async (id: string) => {
        loading.value = true
        isError.value = null

        try {
            currentAnime.value = await fetchAnimeById(id)
        } catch (err) {
            isError.value = err instanceof Error ? err.message : 'Unknown error'
        } finally {
            loading.value = false
        }

    }

    const loadFavoriteAnime = async () => {
        loading.value = true
        isError.value = null

        try {
            favoriteAnimes.value = await fetchFavoriteAnime()
        } catch (err) {
            isError.value = err instanceof Error ? err.message : 'Unknown error'
        } finally {
            loading.value = false
        }
    }

    const loadFilterAnimes = async (anime: string) => {
        loading.value = true
        isError.value = null

        try {
            animesFilters.value = await fetchFilterAnime(anime)
        } catch (err) {
            isError.value = err instanceof Error ? err.message : 'Unknown error'
        } finally {
            loading.value = false
        }

    }

    return {
        // Estados
        animes,
        currentAnime,
        loading,
        isError,
        favoriteAnimes,
        animesFilters,
        // Computed
        animeCount,
        // Actions
        loadAnimes,
        loadAnimeById,
        loadFavoriteAnime,
        loadFilterAnimes
    }

})


