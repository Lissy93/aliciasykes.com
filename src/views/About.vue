<template>
  <div class="about-page">
    <grid>
      <row :reverse="false">
        <column :xs="12" :sm="8">
          <h2>Bio</h2>
          <Card class="card-content">
            <p>
              Hey! I'm Alicia, a software engineer based in London, UK. 
              <br><br>
              I first got into computers in the early days of the internet, while at school. 
              I was immediately curious to learn more about them, and to figure out how they 
              worked- this very quickly lead to developing simple games and applications. 
              <br><br>
              I still have the same passion and enthusiasm for coding now, fueled by the ever 
              growing potential of computing in the future. I'm always keen to test out the 
              latest new languages and technologies, and have a genuine love for learning new 
              skills, and finding better, more efficient ways of doing things. 
              <br><br>
              I appreciate the importance of writing well-tested, clean and efficient code, 
              in-order to develop a high quality final solution.
            </p>
          </Card>
        </column>
        
        <column :xs="12" :sm="4">
          <h2 style="visibility: hidden">Picture</h2>
          <Card class="card-content">
            <img class="profile-picture" src="/img/profile-pictures/profile1.jpg" alt="Profile Picture | Alicia Sykes">
          </Card>
        </column>
      </row>

      <row :reverse="false">
        <column :xs="12" :sm="4" :md="5">
          <h2>Skills</h2>
          <Card class="card-content">
            Lorem Ipsum
          </Card>
        </column>

        <column :xs="12" :sm="4" :md="2">
          <h2>Links</h2>
          <Card class="card-content">
            Lorem Ipsum
          </Card>
        </column>

        <column :xs="12" :sm="4" :md="5">
          <h2>Social</h2>
          <Card class="card-content">
            Lorem Ipsum
          </Card>
        </column>

      </row>

      <row>
        <column :xs="12">
          <h2>Experience</h2>
          <Card class="card-content">
            Lorem Ipsum
          </Card>
        </column>
      </row>

    </grid>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Card from '@/components/Card.vue';

import VueGrid from '@liqueflies/vue-flex-grid';

Vue.use(VueGrid)


@Component({
  components: {
    Card,
    VueGrid,
  },
})
export default class About extends Vue {}

</script>


<style lang="scss" scoped>

.about-page {
  background: #eaeaea;
}

h2 {
  text-align: left;
  font-size: 2em;
}

p {
  text-align: left;
  font-size: 1.2em;
}

.profile-picture {
  width: 100%;
}

.card-content {
  padding: 1em;
}

</style>
