<script setup lang="ts"></script>

<template lang="pug">
div(class="tile active flex flex-col flex-wrap")
    p(class="timeText") 00:00
    img(src="/images/sun.png" class="aspect-square")
    p(class="temperatureText") 21
</template>

<style scope>
.tile {
    display: flex;
    padding: 0.5rem 0.3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.30);
}

.tile.active {
    background: rgba(255, 255, 255, 0.70);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08);
}

.timeText {
    color: #9C9EAA;
    text-align: center;
    font-family: Inter;
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.temperatureText {
    color: #303345;
    text-align: center;
    font-family: Inter;
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>