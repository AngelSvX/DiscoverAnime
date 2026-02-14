<template>
  <div class="min-h-screen bg-gray-100 dark:bg-zinc-950 transition-colors duration-300">

    <header class="max-w-7xl mx-auto px-6 pt-16 pb-10">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Discover Anime
      </h1>

      <p class="mt-3 text-gray-600 dark:text-zinc-400 max-w-2xl">
        Browse trending and top-rated series in one modern streaming-style interface.
      </p>
    </header>

    <main class="max-w-7xl mx-auto px-6 pb-20">
      <div
        class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <MiniAnimeCard
          v-for="anime in animeStore.animes"
          :key="anime.mal_id"
          :anime="anime"
        />
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAnimeStore } from '../model/animeStore';
import MiniAnimeCard from '../ui/MiniAnimeCard.vue';

const animeStore = useAnimeStore()

onMounted( async () => {
  await animeStore.loadAnimes()
})

</script>
