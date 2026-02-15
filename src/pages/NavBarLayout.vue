<template>
  <nav
    class="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 border-b border-gray-200/60 dark:border-zinc-800/60"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-8">
          <div
            class="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            AniVue
          </div>

          <div class="hidden md:flex items-center gap-6 text-sm font-medium">
            <a
              href="#"
              class="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition"
              @click="goToAnimes"
            >
              Animes
            </a>

            <a
              href="#"
              class="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition"
              @click="goToFavoriteAnimes"
            >
              Favorites Animes
            </a>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button
            class="p-2 rounded-xl bg-gray-200/70 dark:bg-zinc-800/70 hover:bg-gray-300 dark:hover:bg-zinc-700 transition"
          >
            🌙
          </button>

          <button
            class="md:hidden px-3 py-2 rounded-xl bg-gray-200/70 dark:bg-zinc-800/70 text-white"
            @click="open = !open"
          >
            ☰
          </button>
        </div>
      </div>
    </div>

    <div
      v-show="open"
      class="md:hidden border-t border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl"
    >
      <div class="px-6 py-4 space-y-3 text-sm font-medium">
        <a
          href="#"
          class="block text-gray-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
        >
          Animes
        </a>

        <a
          href="#"
          class="block text-gray-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
        >
          Favorites Animes
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const open = ref(false);

const router = useRouter()

const goToAnimes = () => {
  router.push({
    name: 'home',
  })
}

const goToFavoriteAnimes = () => {
  router.push({
    name: 'favorite-animes'
  })
}

</script>
