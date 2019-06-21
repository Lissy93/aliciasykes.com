<template>
    <a :href="href" :alt="`${title} | Icon`" :title="title" target="_blank">
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
    border: 1px solid #bdbcbc;
    border-radius: 2px;

    img {
        width: 260px;
        margin-bottom: -6px;
    }
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


figure:before { bottom: 10px; left: 10px; }
figure figcaption { left: 0; bottom: -30%;}
figure:hover figcaption { bottom: 0; }

figcaption{
    width: 100%;
    h4 {
        font-size: 1.2em;
    }
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
