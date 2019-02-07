<template>
  <div class="md-viewer">
    <vue-markdown class="md-content"><slot></slot></vue-markdown>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueMarkdown from 'vue-markdown';
@Component({
    components: {
        VueMarkdown,
    },
})
export default class MdViewer extends Vue {
  @Prop() private pathToMdFile!: string;
}
</script>

<style lang="scss">
  .md-content{
    h1, h2, h3, h4, h5 {
      text-align: left;
      margin: 0;
    }
    p, a, ul, li, span {
      text-align: left;
      font-size: 1rem;
    }
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    h4, h5{
      font-size: 1rem;
      font-weight: bold;
    }
  }
</style>