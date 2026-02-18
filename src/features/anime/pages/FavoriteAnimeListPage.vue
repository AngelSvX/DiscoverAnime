<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-zinc-950 transition-colors duration-300"
  >
    <header class="max-w-7xl mx-auto px-6 pt-5 pb-6">
      <h1
        class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        Top Animes around the world.
      </h1>

      <p class="mt-3 text-gray-600 dark:text-zinc-400 max-w-2xl">
        Browse trending and top-rated series in one modern streaming-style
        interface.
      </p>
    </header>

    <div class="max-w-7xl mx-auto px-6 pb-7 grid grid-cols-4">
      <SearchInput @search-anime="searchAnime" />
    </div>

    <main class="max-w-7xl mx-auto px-6 pb-20">
      <div v-if="animeStore.loading" class="text-white text-4xl font-bold">
        Cargando...
      </div>

      <div
        v-if="animeStore.isError"
        class="bg-red-500/20 border border-red-500 text-red-200 p-4 rounded-xl mb-6"
      >
        {{ animeStore.isError }}
      </div>

      <div
        class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <MiniAnimeCard
          v-for="anime in displayedAnimes"
          :key="anime.mal_id"
          :anime="anime"
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import SearchInput from "../../../shared/ui/components/SearchInput.vue";
import { useAnimeStore } from "../model/animeStore";
import MiniAnimeCard from "../ui/MiniAnimeCard.vue";

let timeout: number | undefined = undefined;
const searchText = ref<string>("");

const searchAnime = (anime: string) => {
  searchText.value = anime;
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    await animeStore.loadFilterAnimes(anime);
  }, 1500);
};

const displayedAnimes = computed(() => {
  if (searchText.value.trim().length > 0) {
    if (animeStore.loading) {
      animeStore.animesFilters = [];
    }
    return animeStore.animesFilters;
  }
  return animeStore.favoriteAnimes;
});

const animeStore = useAnimeStore();

onMounted(async () => {
  await animeStore.loadFavoriteAnime();
});
</script>
