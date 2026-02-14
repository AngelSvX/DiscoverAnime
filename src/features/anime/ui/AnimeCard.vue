<template>
  <div class="min-h-screen bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <section class="relative">
      <img
        :src="anime.images.jpg.large_image_url"
        class="w-full h-[500px] object-cover opacity-40"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/70 to-transparent"></div>

      <div class="absolute bottom-10 left-10 max-w-4xl">
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
          {{ anime.title }}
        </h1>

        <p class="mt-3 text-lg text-zinc-300">
          {{ anime.title_japanese }}
        </p>

        <div class="flex flex-wrap items-center gap-4 mt-6 text-sm">
          <span class="px-3 py-1 bg-indigo-600 rounded-full font-medium">
            ⭐ {{ anime.score }}
          </span>

          <span class="px-3 py-1 bg-zinc-800 rounded-full">
            Rank #{{ anime.rank }}
          </span>

          <span class="px-3 py-1 bg-zinc-800 rounded-full">
            {{ anime.status }}
          </span>

          <span class="px-3 py-1 bg-zinc-800 rounded-full">
            {{ anime.episodes ?? "?" }} Episodes
          </span>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

      <div class="space-y-10">

        <div>
          <h2 class="text-2xl font-bold mb-4">Synopsis</h2>
          <p class="text-zinc-400 leading-relaxed">
            {{ anime.synopsis }}
          </p>
        </div>

        <div v-if="anime.background">
          <h2 class="text-2xl font-bold mb-4">Background</h2>
          <p class="text-zinc-400 leading-relaxed">
            {{ anime.background }}
          </p>
        </div>

      </div>

      <div class="lg:col-span-2 space-y-10">

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">

          <div class="bg-zinc-900 rounded-2xl p-6 shadow-lg">
            <p class="text-zinc-400 text-sm">Type</p>
            <p class="font-semibold mt-1">{{ anime.type }}</p>
          </div>

          <div class="bg-zinc-900 rounded-2xl p-6 shadow-lg">
            <p class="text-zinc-400 text-sm">Source</p>
            <p class="font-semibold mt-1">{{ anime.source }}</p>
          </div>

          <div class="bg-zinc-900 rounded-2xl p-6 shadow-lg">
            <p class="text-zinc-400 text-sm">Season</p>
            <p class="font-semibold mt-1">
              {{ anime.season ?? "-" }} {{ anime.year ?? "" }}
            </p>
          </div>

          <div class="bg-zinc-900 rounded-2xl p-6 shadow-lg">
            <p class="text-zinc-400 text-sm">Aired</p>
            <p class="font-semibold mt-1">{{ anime.aired.string }}</p>
          </div>

          <div class="bg-zinc-900 rounded-2xl p-6 shadow-lg">
            <p class="text-zinc-400 text-sm">Duration</p>
            <p class="font-semibold mt-1">{{ anime.duration }}</p>
          </div>

          <div class="bg-zinc-900 rounded-2xl p-6 shadow-lg">
            <p class="text-zinc-400 text-sm">Rating</p>
            <p class="font-semibold mt-1">{{ anime.rating }}</p>
          </div>

        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4">Genres</h2>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="genre in anime.genres"
              :key="genre.mal_id"
              class="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-sm hover:bg-indigo-500/30 transition"
            >
              {{ genre.name }}
            </span>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4">Studios</h2>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="studio in anime.studios"
              :key="studio.mal_id"
              class="px-4 py-2 bg-zinc-800 rounded-full text-sm"
            >
              {{ studio.name }}
            </span>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4">Producers</h2>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="producer in anime.producers"
              :key="producer.mal_id"
              class="px-4 py-2 bg-zinc-800 rounded-full text-sm"
            >
              {{ producer.name }}
            </span>
          </div>
        </div>

        <div v-if="anime.trailer?.embed_url">
          <h2 class="text-2xl font-bold mb-6">Trailer</h2>
          <div class="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              :src="anime.trailer.embed_url"
              class="w-full h-full"
              allowfullscreen
            ></iframe>
          </div>
        </div>

      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
    import type { IAnimeData } from '../api/types';

    interface Props {
        anime: IAnimeData
    }

    const props = defineProps<Props>();
</script>