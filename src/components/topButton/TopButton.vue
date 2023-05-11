<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            showButton: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.showButton = window.scrollY > 50;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
});
</script>


<template>
    <div>
        <button v-if="showButton" @click="scrollToTop" class="scroll_top"><font-awesome-icon class="scroll_top_up_icon" icon="fa-solid fa-arrow-up"/></button>
    </div>
</template>

<style lang="scss">
@use "/src/styles/mixins.scss" as mixins;
@include mixins.topButtonStyle;
</style>