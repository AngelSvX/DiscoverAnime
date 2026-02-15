<template>
  <div
    class="group relative rounded-2xl overflow-hidden bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
  >
    <div class="relative">
      <img
        :src="anime.images.jpg.large_image_url"
        :alt="anime.title"
        class="w-full h-64 object-cover"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
      ></div>

      <div
        class="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
      >
        ⭐ {{ anime.score }}
      </div>

      <div
        class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300"
      >
        <p class="text-white text-xs line-clamp-3">
          {{ anime.synopsis }}
        </p>
      </div>
    </div>

    <div class="p-4 space-y-2">
      <h3
        class="font-semibold text-sm text-gray-900 dark:text-white line-clamp-1"
      >
        {{ anime.title }}
      </h3>

      <div
        class="flex justify-between text-xs text-gray-500 dark:text-zinc-400"
      >
        <span>{{ anime.type }}</span>
        <span>{{ anime.episodes ?? "?" }} eps</span>
      </div>

      <div class="flex flex-wrap gap-2 pt-1">
        <span
          v-for="genre in anime.genres.slice(0, 2)"
          :key="genre.mal_id"
          class="px-2 py-0.5 text-[10px] rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-400"
        >
          {{ genre.name }}
        </span>
      </div>
        <button
          class="text-white text-sm font-bold text-center w-full my-4 py-1 bg-indigo-700 rounded-md"
          @click="goToAnime"
        >
          Watch
        </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { IAnimeData } from "../api/types";

interface Props {
  anime: IAnimeData;
}

const props = defineProps<Props>();
const router = useRouter()

const goToAnime = () => {
  router.push({
    name: 'anime-details',
    params: {id: props.anime.mal_id}
  })
}

</script>
