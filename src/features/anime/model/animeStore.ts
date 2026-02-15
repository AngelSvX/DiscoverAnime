import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { IAnimeData } from "../api/types";
import { useAnimeApi } from "../api/animeService";


export const useAnimeStore = defineStore('anime', () => {
    // Estado
    const animes = ref<IAnimeData[]>([])
    const currentAnime = ref<IAnimeData | null>(null)

    const animeCount = computed(() => 
        animes.value.length
    )

    // Actions

    const loadAnimes = async () => {
        const { fetchAnimeList } = useAnimeApi()
        try {
            animes.value = await fetchAnimeList()
        } catch (err) {
            console.error('Error loading animes: ', err)
        }
    }

    const loadAnimeById = async (id: string) => {
        const { fetchAnimeById } = useAnimeApi()
        try {
            currentAnime.value = await fetchAnimeById(id)
        } catch (err) {
            console.error('Error loading anime data: ', err)
        }

    }

    return {
        // Estados
        animes,
        currentAnime,
        // Computed
        animeCount,
        // Actions
        loadAnimes,
        loadAnimeById
    }

})


