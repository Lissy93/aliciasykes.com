<template>
  <div class="portfolio">
    <h1>Portfolio</h1>


    <CaptionedFigure 
        v-for="project in projects" 
        v-bind:key="project.title"
        :title="project.title"
        :imgSrc="project.imgSrc"
        :href="project.href"
    >
        {{ project.description }}
    </CaptionedFigure>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CaptionedFigure from '@/components/CaptionedFigure.vue';


@Component({
    components: {
        CaptionedFigure,
    },
    data: () => {
        return  {
            projects: [
                {
                    title: 'Test Project',
                    imgSrc: 'https://picsum.photos/g/350/200',
                    href: 'https://google.com',
                    description: 'Lorem Ipsum',
                },
            ],
        };
    },
})
export default class Portfolio extends Vue {}
</script>

<style lang="scss">


</style>

