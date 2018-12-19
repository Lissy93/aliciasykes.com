<template>
    <a :href="href" :alt="`${title} | Icon`" :title="title">
        <figure>
            <img :src="imgSrc" :alt="`${title} | Image`" :title="title">
            <figcaption>
                <h4>{{ title }}</h4>
                <slot></slot>
            </figcaption>
        </figure>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    props: {
        imgSrc: String,
        title: String,
        href: String,
    },
})
export default class CaptionedFigure extends Vue {

}
</script>

<style lang="scss" scoped>

figure {
  display: block;
  position: relative;
  float: left;
  overflow: hidden;
  margin: 0 20px 20px 0;
}
figcaption {
  position: absolute;
  background: black;
  background: rgba(0,0,0,0.75);
  color: white;
  padding: 10px 20px;
  opacity: 0;
  -webkit-transition: all 0.6s ease;
  -moz-transition:    all 0.6s ease;
  -o-transition:      all 0.6s ease;
}
figure:hover figcaption {
  opacity: 1;
}



figure:before {
  content: "?";
  position: absolute;
  font-weight: 800;
  background: black;
  background: rgba(255,255,255,0.75);
  text-shadow: 0 0 5px white;
  color: black;
  width: 24px;
  height: 24px;
  -webkit-border-radius: 12px;
  -moz-border-radius:    12px;
  border-radius:         12px;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  -moz-transition: all 0.6s ease;
  opacity: 0.75;
}
figure:hover:before {
  opacity: 0;
}

figure:before { bottom: 10px; left: 10px; }
figure figcaption { left: 0; bottom: -30%;}
figure:hover figcaption { bottom: 0; }

figcaption{
    width: 100%;
}

@media (hover: none) {
    figure figcaption {
        opacity: 1;
    }
    figure figcaption {
        bottom: 0;
    }
}

</style>
