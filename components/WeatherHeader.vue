<script setup lang="ts">
import { ref } from "vue"

</script>

<template lang="pug">
div(class="flex")
    div(class="flex gap-4 p-2 rounded-full icon-container")
        SearchIcon(color="#333" class="searchIcon w-6 h-6 cursor-pointer")
        input(type="text" placeholder="Search location..." class="searchInput")

</template>

<style scope>
.icon-container {
    border: 0.5px solid transparent;
    transition: all 0.2s ease-in-out;
    width: 20%;
}

.icon-container:hover,
.icon-container:focus {
    border: 0.5px solid rgba(255, 255, 255, 0.50);
    background: rgba(255, 255, 255, 0.36);
    width: 100%
}

.searchInput {
    width: 0;
    border: 0;
    outline: none;
    font-family: Inter;
    font-weight: 500;
    color: #333;
    transition: all 0.8;
    background: transparent;
}

.searchInput::placeholder {
    color: #666;
}

.icon-container:hover .searchInput {
    width: 100%
}
</style>