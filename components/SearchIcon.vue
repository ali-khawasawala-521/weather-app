
import { mergeProps } from 'vue';
<script setup lang="ts">
interface Props {
    color: string;
}

const props = withDefaults(defineProps<Props>(), {
    color: 'black',
});
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
            d="M14.7956 14.5835L16.4926 16.2805M12.6035 12.8157C10.0651 15.3541 5.94957 15.3541 3.41116 12.8157C0.872753 10.2773 0.872753 6.16171 3.41116 3.6233C5.94957 1.0849 10.0651 1.0849 12.6035 3.6233C15.142 6.16171 15.142 10.2773 12.6035 12.8157Z"
            :stroke="props.color" stroke-width="1.6" stroke-linecap="round" />
    </svg>
</template>
