<script setup lang="ts"></script>
<template lang="pug">
div(class="flex")
    WeatherIcon(class="flex-1")
    div(class="flex-1 flex flex-col gap-4 justify-center items-center")
        p(class="m-0 temperatureText") 19
        p(class="m-0 weatherText") Rainy
</template>

<style scoped>
.temperatureText {
    color: #303345;
    font-family: Inter;
    font-size: 2.6875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.weatherText {
    color: #303345;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>

<!--°C -->