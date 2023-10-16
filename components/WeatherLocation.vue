<script setup lang="ts"></script>
<template lang="pug">
div(class="flex flex-col gap-2")
    p(class="locationText") Surat,
    p(class="locationText") India
    P(class="dateText") Mon, Oct 16
</template>

<style scoped>
.locationText {
    color: #313341;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.dateText {
    color: #9A938C;
    font-family: Inter;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>