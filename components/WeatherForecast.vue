
import { ForecastTile } from '#build/components';
<script setup lang="ts">
</script>
<template lang="pug">
div(class="flex gap-4 overflow-hidden")
    ForecastTile(v-for="i in 24" :key="i")
</template>