<script setup lang="ts"></script>
<template lang="pug">
div(class="flex flex-col gap-4 justify-center")
    WeatherCard(image="/images/umbrella.png" title="Rainfall" value="3cm")
    WeatherCard(image="/images/wind.png" title="Wind" value="19km/h")
    WeatherCard(image="/images/drop.png" title="Humidity" value="64%")
</template>