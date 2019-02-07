<template>
    <div class="legal-wrapper">
        <h2>Legal</h2>

        <h3>Registered Information</h3>
        <article></article>

        <h3>Cookie Policy</h3>
        <article></article>

        <h3>Privacy Policy</h3>
        <article>
            <MdViewer class="md">{{ require('../data/legal-privacy-policy.md') }}</MdViewer>
        </article>

        <h3>Terms and Cnditions</h3>
        <article>
            <MdViewer class="md">{{ require('../data/legal-terms.md') }}</MdViewer>
        </article>
        
        <h3>License, for source code</h3>
        <article>
            <MdViewer class="md">{{ require('../data/legal-license.md') }}</MdViewer>
        </article>

        <br>
    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MdViewer from '@/components/MdViewer.vue';

@Component({
    components: {
        MdViewer,
    },
    head: {
        title: {
            inner: 'Legal',
        },
    },
})
export default class Legal extends Vue {}

</script>


<style lang="scss" scoped>
   .legal-wrapper {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2em;
   }

   h2 {
       font-size: 3em;
   }
   h3 {
       font-size: 2em;
   }
   article {
       padding: 0.5em 1em;
       height: 20em;
       background-color: #FFF;
       overflow: auto;
       box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
       border-radius: 2px;
   }
</style>
