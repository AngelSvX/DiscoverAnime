import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { IAnimeData } from "../api/types";
import { useAnimeApi } from "../api/animeService";


export const useAnimeStore = defineStore('anime', () => {
    // Estado
    const animes = ref<IAnimeData[]>([])
    // const currentAnime = ref<IAnimeData | null>(null)
    const selectedAnimeId = ref<number | null>(null)

    // Computed
    const selectedAnime = computed(() => 
        animes.value.find(u => u.mal_id === selectedAnimeId.value) ?? null
    )

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

    // TODO: Pendiente crear el select by id


    return {
        // Estados
        animes,
        selectedAnimeId,
        // Computed
        selectedAnime,
        animeCount,
        // Actions
        loadAnimes
    }

})


