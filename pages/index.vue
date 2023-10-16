<script setup lang="ts"></script>
<template lang="pug">
div(class="max-w-[350px] p-4 flex flex-col justify-between gap-4 app-container")
    WeatherHeader
    WeatherLocation
    WeatherInfo
    WeatherCards
    div(class="divider")
    WeatherForecast
</template>

<style>
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: linear-gradient(120deg, #FEE3BC 23.22%, #F39876 99.52%);
    background-color: #F39876;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
</style>

<style scoped>
.app-container {
    border-radius: 1.125rem;
    border: 6px solid #FFF;
    background: rgba(255, 255, 255, 0.29);
    box-shadow: 30px 30px 40px -10px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(5px);
}

.divider {
    display: flex;
    height: 0.03125rem;
    padding-left: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    background: #EEE;
    filter: blur(0.5px)
}
</style>