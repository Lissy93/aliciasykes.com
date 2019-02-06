<template>
    <div class="status-page">
        <h2>Status Page</h2>
        <h3>Status Page Coming Soon</h3>
        <p>
            The status page will provide an overview of which of
            my apps and services are up and running a normal service.
        </p>
    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    head: {
        title: {
            inner: 'Status Page',
        },
    },
})
export default class StatusPage extends Vue {}

</script>


<style lang="scss" scoped>

.status-page {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1em;

    h2 {
        font-size: 3em;
    }
}
   
</style>
