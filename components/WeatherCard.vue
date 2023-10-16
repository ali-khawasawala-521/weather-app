
import { mergeProps } from 'vue';
<script setup lang="ts">
interface Card {
    image: string;
    title: string;
    value: string;
}

const props = defineProps<Card>()
</script>
<template lang="pug">
div(class="flex justify-between card")
    div(class="flex gap-4 justify-center items-center")
        div(class="w-10 h-10 bg-white rounded-xl")
            img(:src="props.image" class="w-10 h-10 p-1")
        p(class="m-0") {{  props.title }}
    p {{ props.value }}

</template>

<style scoped>
.card {
    /* Layout */
    padding: 0.5rem 0.6875rem;
    align-items: center;
    align-self: stretch;

    /* Style */
    border-radius: 0.625rem;
    border: 0.5px solid rgba(255, 255, 255, 0.50);
    background: rgba(255, 255, 255, 0.36);
}
</style>