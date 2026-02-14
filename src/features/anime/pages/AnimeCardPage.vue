<template>

</template>

<script setup lang="ts">
import type { IAnimeData, Pagination } from '../api/types';

    interface Props {
        pagination: Pagination
        animes: IAnimeData[]
    }

    const props = defineProps<Props>();

</script>