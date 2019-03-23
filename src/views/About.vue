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
          <Card class="card-content profile-picture-container">
            <img class="profile-picture" src="/img/profile-pictures/profile1.jpg" alt="Profile Picture | Alicia Sykes">
          </Card>
        </column>
      </row>

      <row :reverse="false">
        <column :xs="12" :sm="4" :md="5">
          <h2>Skills</h2>
          <Card class="card-content cloud-container">
            <vue-word-cloud
              :words="skillWordsList"
              :color="([, weight]) => weight > 8 ? '#c80000' : weight > 4 ? '#e53935' : '#fc6d6f'"
              font-family="Raleway"
            />
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
          <Card class="card-content social-container">
            <a 
              v-for="socialLink in socialLinks" 
              v-bind:key="socialLink.title" 
              :href="socialLink.url" 
              :title="socialLink.title"
              class="social-icon-container"
              >
                <img :src="`/img/social-icons/${socialLink.icon}.png`" class="social-icon">
            </a>
          </Card>
        </column>

      </row>

      <row>
        <column :xs="12">
          <h2>Experience</h2>
          <Card class="card-content experience-container">
            
            <h3>Software Engineer at University of Oxford</h3>
            <p>
                Using Java to write a module for
                <a href='http://www.wwarn.org/'>WWARN</a>
                as part of a small agile team.
                Involved mass amounts of data, millions of patient and vaccination
                records, so algorithms had to be efficient.
                Also gained experience using Tomcat, Jenkins, SQL and XML, Maven, JUnit, Hibernate
            </p>

            <h3>Internship at Accenture UK</h3>
            <p>
                Interned at Accenture UK as a software engineer, initially for 12 months,
                I then returned as a permant employee.
                Received comprehensive training, and then worked across several large government 
                departments, before moving onto the Accenture UKI Innovation Programme, 
                 as a lead dev, coding innovative prototype apps on 4 - 6 week cycles.
                <br>
                After that I then worked for several large retailers, developing native apps and 
                full-stack web applications. All of which were in cross-functional agile teams.
            </p>

            <h3>Web Admin at UTC Swindon</h3>
            <p>
                Managed a WordPress based site for a the
                <a href='http://www.utcswindon.co.uk/'>University Technical College, Swindon</a>
                This included consulting with senior members of the University College and then
                independently developing the features they desired
            </p>

            <h3>President of University Computing Society</h3>
            <p>
                Organised technical and social events for students
                interested in computing. This started as a very small society,
                and by the end of the year had several hundred members with many
                regular events.
            </p>

            <h3>Teaching Computer Science</h3>
            <p>
              While at University I volunteered in secondary schools,
                running after school programming clubs, for 11- 16 year-olds.
                After this I worked towards the
                <a href='http://uas.ac.uk/'>Undergraduate Ambassador Scheme</a>
                where I was given the opportunity to shadow, assist and learn
                from computing teachers, and in the end take some full lessons.
                I also did 1-to-1 tutoring for A Level pupils, and have helped those
                struggling with computing and programming achieve good grades.
                I developed a number of online coding resources for beginners,
                thar are available free
                <a href='http://web-dev.school/computer-science-resources.php'>here</a>.
            </p>

            <h3>Freelance Web and App Development</h3>
            <p>
                Over the past couple of years I have developed a number
                of websites and mobile applications for small businesses and
                individuals. This has been a good chance to work across many
                industries, and to put into practice the skills I learn in my own time.
            </p>

            <h3>Hackathons</h3>
            <p>
                I am a big fan of weekend hackathons (these are typically 36/ 24 hour coding competitions, 
                with the chance to try out new tech).
                I really enjoy the challenge of creating something new and innovative to solve a problem,
                and it's a great opportunity to learn more and work with interesting people.
                I have won a few prizes recently as well, among of which are:
            </p>

            <ul>
                <li>Won 1st place overall at <a hrer="https://bit.ly/2Tt31Zw">StartHack, Switzerland 2019</a>. Created <a href="https://github.com/Lissy93/pax">Pax</a></li>
                <li>
                  Hack Junction Helsinki 2018, Inteligen Buildings Award, sponsored by KONE
                </li>
                <li>
                    StartHack Switzerland 2018, BlockChain Award, sponsored by SwissCom
                </li>
                <li>
                  <span>Main winner of <a href='http://starthack.ch/'>StartHack, Switzerland 2016</a></span>
                </li>
                <li>
                  <span>2nd place at NBC Universal Comcast hackathon London.<br>
                  (Created an <a href='lissy93.blogspot.co.uk/2015/06/suggestmovies-friction-free-social.html'>intelligent Twitter movie recomendation engine</a>)</span>
                </li>
                <li>
                  <span>2nd place at AngelHack 2015 and overall HP Winner<br>
                  (Created <a href='http://smart-depart.herokuapp.com/'>SmartDepart</a>, an alarm that wakes you up appropriately earlier if there are delays on your morning commute.)</span>
                </li>
                <li>
                  <span>2nd place at AngelHack 2014 (created <a href='http://goo.gl/sdXLpC'>Anti-Theft Charge</a>)</span></li>
                <li>
                  <span>2nd place (and Intelligent Headset main prize) at
                  <a href='http://www.eventbrite.com/e/devlab-live-2014-1-day-conference-2-day-hackathon-tickets-10909188677'>DevLab Live</a>,
                  London 2014 (created City Explorer, in a team)</span>
                </li>
                <li>
                  <span>Member of the winning team at London HealthHack 2015</span>
                </li>
            </ul>
            <p>More recently I have been attending hackathons as a mentor</p>

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
import VueWordCloud from 'vuewordcloud';

Vue.use(VueGrid);

@Component({
  components: {
    Card,
    VueGrid,
    [VueWordCloud.name]: VueWordCloud,
  },
  head: {
    title: {
      inner: 'About',
    },
  },
  data: () => {
    return {
      skillWordsList: [
        ['D3.js', 8], ['Node.js', 9], ['JavaScript', 10], ['Unit Testing', 7], ['React JS', 8],
        ['Angular', 8], ['Vue', 9], ['ES6', 10], ['React Native', 9], ['Native Script', 7],
        ['Kotlin', 8], ['Objective C', 5], ['Java', 8], ['Swift', 7], ['Cordova', 5],
        ['Dart', 7], ['TypeScript', 9], ['Blockchain', 7], ['Neral Networks', 6], ['AI', 8],
        ['NLU', 8], ['Chatbots', 6], ['Apache', 7], ['Linux', 7], ['DevOps', 6],
        ['SQL', 6], ['Mongo', 8], ['Docker', 7], ['AWS', 7], ['Digital Ocean', 8],
        ['NGINX', 7], ['UX', 4], ['Project Management', 5], ['Agile', 6], ['UI', 4],
        ['SCRUM', 6], ['Scaled-Agile', 4], ['Kanban', 4], ['QA', 4],
        ['C++', 5], ['Python', 7], ['C#', 8], ['Ruby', 4], ['PHP', 8], ['C', 4], ['Perl', 4],
        ],

        socialLinks: [
          {title: 'GitHub', icon: 'github', url: 'https://github.com/lissy93' },
          {title: 'LinkedIn', icon: 'linkedin', url: 'http://linkedin.com/in/aliciasykes' },
          {title: 'Twitter', icon: 'twitter', url: 'http://twitter.com/lissy_sykes' },
          {title: 'Blogger', icon: 'blogger', url: 'http://lissy93.blogspot.co.uk/' },
          {title: 'Facebook', icon: 'facebook', url: 'http://fb.com/liss.sykes' },
          {title: 'Google Plus', icon: 'googleplus', url: 'https://plus.google.com/+AliciaSykes' },
          {title: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/channel/UCq521kk0-fziXNJa3rQtrMQ' },
          {title: 'StackOverflow', icon: 'stackoverflow', url: 'http://stackoverflow.com/users/979052/lissy' },
          {title: 'Email', icon: 'mail', url: 'mailto:alicia@aliciasykes.com' },
          {title: 'Skype', icon: 'skype', url: 'skype:alicia_sykes?call' },
        ],
      };
  },
})
export default class About extends Vue {}

</script>


<style lang="scss" scoped>

.about-page {
  background: #eaeaea;
  max-width: 1400px;
  margin: 0 auto;
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
  max-width: 20em;
}

.profile-picture-container {
  text-align: center;
}

.card-content {
  padding: 1em;
}

.cloud-container {
  height: 15em;
}

.social-container {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-evenly;
  .social-icon-container {
    margin: 0.2em;
    flex: 1 0 17%;
  }
}

.experience-container{
  h3 {
    font-size: 1.8em;
    font-weight: bold;
  }
  
  p {
    margin: 0;
  }

  a {
    color: #2c3e50;
  }
}


</style>
