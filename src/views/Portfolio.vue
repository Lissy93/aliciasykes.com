<template>
  <div class="portfolio-page">
    <h2>Portfolio</h2>

    <h3 class="date-subheading">Featured Projects</h3>
    <div class="project-container">
        <CaptionedFigure 
            v-for="project in require('../data/project-tile-content.json').first" 
            v-bind:key="project.title"
            :title="project.title"
            :imgSrc="project.imgSrc"
            :href="project.href"
        >
            {{ project.description }}
        </CaptionedFigure>
    </div>


    <h3 class="date-subheading">Open Source Projects</h3>
    <div class="project-container">
        <CaptionedFigure 
            v-for="project in require('../data/project-tile-content.json').second" 
            v-bind:key="project.title"
            :title="project.title"
            :imgSrc="project.imgSrc"
            :href="project.href"
        >
            {{ project.description }}
        </CaptionedFigure>
    </div>


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CaptionedFigure from '@/components/CaptionedFigure.vue';


@Component({
    components: {
        CaptionedFigure,
    },
    head: {
        title: {
            inner: 'Portfolio',
        },
    },
})
export default class Portfolio extends Vue {}
</script>

<style lang="scss" scoped>

.portfolio-page {
    margin: 1em auto;
    padding: 0 1em;
    max-width: 1200px;
}

.project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin: 1.5em;
}

h2 {
    font-size: 3em;
}

h3.date-subheading {
    background: #2c3e50;
    color: #FFF;
    display: inline;
    padding: 0.5em 1.2em;
    cursor: default;
    border-radius: 2px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
}


</style>

