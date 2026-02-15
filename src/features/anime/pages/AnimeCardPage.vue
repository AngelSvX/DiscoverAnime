<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-zinc-950 transition-colors duration-300"
  >
    <header class="max-w-7xl mx-auto px-6 pt-10 pb-6">
      <button
        class="flex items-center gap-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition"
        @click="backToList"
      >
        ← Back to list
      </button>
    </header>

    <main class="pb-20">
      <AnimeCard
        v-if="animeStore.currentAnime"
        :anime="animeStore.currentAnime"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAnimeStore } from "../model/animeStore";
import AnimeCard from "../ui/AnimeCard.vue";

interface Props {
  id: string;
}

const props = defineProps<Props>();

const animeStore = useAnimeStore();

const router = useRouter();

const backToList = () => {
  router.push({
    name: "home",
  });
};

onMounted(async () => {
  await animeStore.loadAnimeById(props.id);
});
</script>
