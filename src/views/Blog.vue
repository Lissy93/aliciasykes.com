<template>
    <iframe 
        class="iframes-r-evil"
        src="https://as93.net">
    </iframe>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    head: {
        title: {
            inner: 'Blog',
        },
    },
})
export default class Blog extends Vue {}

</script>


<style lang="scss" scoped>
    .iframes-r-evil {
        width: 100%;
        height: 99%;
        position: absolute;
        border: 0;
        outline: none;
    }
</style>
