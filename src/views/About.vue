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
            <carousel :perPage="1">
              <slide v-for="pic in profilePics" :key="pic.fileName">
                <div
                  class="img-container"
                  :style="`background-image: url('/img/profile-pictures/${pic.fileName}');`"
                  :title="pic.altText"
                  >
                </div>
              </slide>
            </carousel>
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
              class="social-icon"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', socialLink.icon]" />
            </a>
          </Card>
        </column>

      </row>


      <row>
        <column :xs="12">
          <h2>Experience</h2>
          <Card class="card-content experience-container">           

            <h3>Teaching Computer Science</h3>
            <p>
              I am really passionate about coding, and so I care a lot about 
              helping others get into programming, especially girls.
              While at University I volunteered in secondary schools,
              running after school programming clubs, for 11- 16 year-olds.
              After this I worked towards the
              <a href='http://uas.ac.uk/'>Undergraduate Ambassador Scheme</a>
              where I was given the opportunity to shadow, assist and learn
              from computing teachers, and in the end take some full lessons.
              I also did 1-to-1 tutoring for A Level pupils, and have helped those
              struggling with computing and programming achieve good grades.
              <br><br>
              I developed a number of online coding resources for beginners,
              thar are available free
              <a href='http://web-dev.school/computer-science-resources.php'>here</a>.
              And when I have a spair moment, I answer questions on 
              <a href="https://stackoverflow.com/users/979052/alicia">StackOverflow.</a>
              I have attended hackathons and tech events as a mentor, and at work I
              really enjoy helping to train up junior team members, in the latest tech.
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

            <h3>Open Source</h3>
            <p>
              I really strongly believe that open source is the way forward, and have great admiration 
              for the many OS devs who without which, computers, the internet and the world would not 
              be what it is today. Where possible I modularise all my code, open-sourcing standalone 
              components. I try hard to keep it clean, documented and well-tested, and then license it under MIT.
            </p>

            <h3>Education</h3>
            <p>
              I was lucky enough to go to University in the UK, and
              I graduated with a First-Class Honours degree in Computer 
              Science from Oxford Brookes University, and also won the Btitish 
              Computer Society award for my dissertation, which I'd really enjoyed building.
              <br><br>
              While I was studying I had the chance do internships and side-jobs which taught 
              me a lot about real-world programming. I did a Summer job writing Java at at a 
              research project at Oxford University, that aimed to reduce anti-malarial resistance. 
              I then did a year of part-time work developing and maintaining the website for UTC Swindon.
              I really enjoyed chilling with my coding friends, and I became the president of 
              the Computing Society.              
            </p>

            
            <h3>Work</h3>
            <p>
              I am very fortunate that my work, is also my hobby and I genuinley love coding. 
              Most of what I do for work is full-stack: with Vue, React or Angular for the 
              frontent, and Node.js and more recently Go Lang for the backend, and mobile 
              development: React Native and Flutter. 
              <br><br>
              The clients I served over the past 5 or so years, have mainly been 
              full-stack and mobile projects. I worked in a team developing an AR bathroom 
              planning tool for Kingfisher Digital using Angular, then built a mobile app 
              for Shell for EV drivers using React Native. Then worked for Boots making a
              customer prescription dashboard in ReactJS and then I went back to Shell, 
              but for a different project, this time in ReactJS.
              As well as a couple of smaller web projects, for other clients.
              <br><br>
              Prior to this, and after graduating I joined Accenture, where I got the chance to work 
              on variety of different roles for for various clients, which just further confirmed 
              that what I want to persue is full-stack and mobile development. I then moved onto 
              their Innovation Programme, where we built out fast PoCs for clients on 6-8 week 
              cycles, which was fun as we used different tech for each project, including AI, 
              ML, NLU, CV, IoT.. This was also the first dev lead role I did, and I really 
              enjoyed being able help teach more junior devs.
            </p>

          </Card>
        </column>
      </row>
    </grid>
  </div>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import VueGrid from '@liqueflies/vue-flex-grid';
import { Component, Vue } from 'vue-property-decorator';
import VueWordCloud from 'vuewordcloud';
import { Carousel, Slide } from 'vue-carousel';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(VueGrid);

@Component({
  components: {
    Card,
    VueGrid,
    [VueWordCloud.name]: VueWordCloud,
    Carousel,
    Slide,
    FontAwesomeIcon,
  },
  head: {
    title: {
      inner: 'About',
    },
  },
  data: () => {
    return {
      profilePics: [
        {fileName: 'profile1.jpg', altText: 'Winning StartHack 2016'},
        {fileName: 'profile2.jpg', altText: 'Alicia Sykes'},
        {fileName: 'profile3.jpg', altText: 'Teaching at Code School'},
        {fileName: 'profile4.jpg', altText: 'Oxford Half Marathon'},
        {fileName: 'profile5.jpg', altText: 'Winning StartHack 2019'},
        {fileName: 'profile6.jpg', altText: 'Chilton 100 Mile'},
        {fileName: 'profile7.jpg', altText: 'Winning IoT, HackJunction Helsinki'},
        {fileName: 'profile8.jpg', altText: 'Presenting at StartHack Switzerland'},
        {fileName: 'profile9.jpg', altText: 'Winning BlockChain Award, Zurich'},
        {fileName: 'profile10.jpg', altText: 'Alicia Sykes in Oxford'},
      ],
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
          {title: 'StackOverflow', icon: 'stack-overflow', url: 'http://stackoverflow.com/users/979052/lissy' },
          {title: 'LinkedIn', icon: 'linkedin', url: 'http://linkedin.com/in/aliciasykes' },
          {title: 'KeyBase', icon: 'keybase', url: 'https://keybase.io/aliciasykes' },
          {title: 'Twitter', icon: 'twitter', url: 'http://twitter.com/lissy_sykes' },
          {title: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/' },
          {title: 'Facebook', icon: 'facebook', url: 'http://fb.com/liss.sykes' },
          {title: 'Skype', icon: 'skype', url: 'skype:alicia_sykes?call' },
        ],
      };
  },
})
export default class About extends Vue {}

</script>


<style lang="scss" scoped>

.social-icon {
  color: #e53935;
  font-size: 3em;
}

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

/deep/ .VueCarousel-wrapper {
  max-height: 350px;
}

.img-container {
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto 100%;
  margin: 0 auto;
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
  .social-icon {
    padding: 5px;
    transition: 0.3s;
    &:hover {
      color: #ff7673;
    }
  }
}

.experience-container{
  h3 {
    font-size: 1.8em;
    margin-bottom: 0;
  }
  
  p {
    margin: 0;
  }

  a {
    color: #2c3e50;
  }
}


</style>
