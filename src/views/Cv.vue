<template>
  <div class="cv-page">
    <!--
                                    _   _       _a_a
                        _   _     _{.`=`.}_    {/ ''\_
                _    {.`'`.}   {.'  _  '.}  {|  ._oo)
                { \  {/ .-. \} {/  .' '.  \} {/  |
        ~~~~^~`~^~`~^~`~^~`~^~^~`^~^~`^~^~^~^~^~^~`^~~`
    -->

    <aside>
      <!-- Profile Picture -->
      <img 
        src="/img/profile-pictures/profile5.jpg" 
        alt="Alicia Sykes | Profile Picture"
        class="profile-picture" />

      <!-- Short Bio -->
      <div class="side-panel bio-panel">
        <h3>Bio</h3>
        <font-awesome-icon :icon="['far', 'user']" class="side-panel-icon" />
        <span>
          Experienced software engineer with broad development knowledge, 
          specialising in full-stack modern web development and native mobile apps. 
          Hardworking, adaptable and passionate about coding. Understands the 
          importance of clean, good quality and well tested code.
        </span>
      </div>

      <h3>Contact</h3>

      <!-- Current Location -->
      <div class="side-panel">
        <font-awesome-icon icon="map-marker" class="side-panel-icon"/>
        <span>London, UK</span>
      </div>

      <!-- Email Address -->
      <div class="side-panel">
        <font-awesome-icon :icon="['far', 'envelope']" class="side-panel-icon"/>
        <span>alicia@as93.net</span>
      </div>

      <!-- Phone Number -->
      <div class="side-panel">
        <font-awesome-icon :icon="['fas', 'phone']" class="side-panel-icon"/>
        <span>07742922302</span>
      </div>

      <h3>Links</h3>

      <!-- Website -->
      <div class="side-panel">
        <font-awesome-icon :icon="['far', 'hand-pointer']" class="side-panel-icon"/>
        <a href="https://aliciasykes.com/" title="Alicia Sykes | Personal Website">
          aliciasykes.com
        </a>
      </div>

      <!-- GitHub -->
      <div class="side-panel">
        <font-awesome-icon :icon="['fab', 'github']" class="side-panel-icon"/>
        <a href="https://github.com/lissy93" title="Alicia Sykes | GitHub">
         github.com/lissy93
        </a>
      </div>

      <!-- StackOverflow -->
      <div class="side-panel">
        <font-awesome-icon :icon="['fab', 'stack-overflow']" class="side-panel-icon"/>
        <a href="https://stackoverflow.com/users/979052/lissy" title="Alicia Sykes | StackOverflow">
          stackoverflow.com/users/979052
        </a>
      </div>

      <!-- LinkedIn -->
      <div class="side-panel">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="side-panel-icon"/>
        <a href="https://www.linkedin.com/in/aliciasykes/" title="Alicia Sykes | LinkedIn">
          linkedin.com/in/aliciasykes
        </a>
      </div>

      <!-- KeyBase -->
      <div class="side-panel">
        <font-awesome-icon :icon="['fab', 'keybase']" class="side-panel-icon"/>
          <a href="https://keybase.io/aliciasykes" title="Alicia Sykes | KeyBase">
            keybase.io/aliciasykes
          </a>
      </div>
    </aside>


    <main>
      <!-- Employment Hstory -->
      <section>
        <h3>
          <font-awesome-icon :icon="['far', 'building']" class="side-panel-icon" />
          Employment
        </h3>
        <Card class="section-card">
          
          <h4>Software Engineer @ Accenture, UK</h4>
          <span class="date-subtitle">July 2014 - Current</span>
          <p>
            Worked across on several agile projects, including developing an Angular app for planning bathroom for a 
            large DIY company, a React Native app for finding EV charge points and charging your car, for
            a large fuel company, and a React JS app for ordering repeat prescriptions, for a large 
            high-street pharmacy.
          </p>
         
          <h4>Web Admin @ UTC Swindon</h4>
          <span class="date-subtitle">Part-time September 2013 - September 2014 (12 months)</span>
          <p>
            Was responsible for the day-to-day running of the WordPress site, from creating and styling
             new pages and features to ensuring content was published promptly and never out-of-date.
          </p>

          <h4>Software Engineer (Intern) @ University of Oxford</h4>
          <span class="date-subtitle">June - September 2013 (3 months)</span>
          <p>
            Worked as part of a small Java team following the agile methodology. Developing software for
            WWARN who are working towards the eradication of resistance to anti-malarial vaccinations. 
            Involved processing mass amounts of data, so algorithm efficiency was paramount.
          </p>
          
        </Card> 
      </section>

      <!-- Other Experience -->
      <section>
        <h3>
          <font-awesome-icon icon="check-double" class="side-panel-icon" />
          Other Experience
        </h3>
        <Card class="section-card">
          
          <h4>Open Source Code</h4>
          <span class="date-subtitle">Contributes to Open-source projects</span>
          <p>
            The Open-source comunities are one of the keen drivers of innovation. I love getting involved 
            in new and exciting projects, or using open source tech to create mobile, web and server apps.
          </p>
                    
          <h4>Hackathons</h4>
          <span class="date-subtitle">Keen Attender of International Coding Competitions</span>
          <p>
            I regulalry attend 24/48 hour hackathons across Europe. I really enjoy the chance work with new technology
            to build a solution to a problem. It's a great chance to learn new stuff and collaborate with great developers
            from around the world. I've won first place, or a runner up award in over 15 global hackathons.
          </p>
                   
          <h4>Teaching Computing</h4>
          <span class="date-subtitle">Completed UAS, A Level Computing tutor, published many educational resources</span>
          <p>
            While at Uni, ran a series of after-school programming clubs at the Wheatley Park School and 
            The Oxford Academy for year 7- 9 pupils to inspire them to get into coding.

            I have Completed the Undergraduate Ambassador Scheme, which by the end involved planning and 
            taking full computing lessons. 1-to-1 A Level computing tutor, helped several pupils increase 
            their grades. 

            I am always keen to pass on what I've learnt to others, so I have developed and maintain several 
            online educational computing resources for students, teachers and anyone wanting to learn to code. 
            Including a tutorial site, a computer science site, revisionquizzes.co.uk, a 100-page A Level 
            Computing Revision guide, an educational file sharing site, A2 Computing revision site and 
            an Android app for revising to name a few.
          </p>

          <h4>Army Reservist</h4>
          <span class="date-subtitle">Currently serving in a London-based Army Reserve unit</span>
          <p>
            I've been a Reservist for the past couple of years, and it's a great oppertunity to get out and
            do something different on the weekends. I get the chance to learn new skills, which are 
            usually very transferable to my civi job. Because most training happens in the evenings and weekends
            I usually never have to miss any work.
          </p>

        </Card> 
      </section>

      <!-- Education -->
      <section>
        <h3>
          <font-awesome-icon icon="graduation-cap" class="side-panel-icon" />
          Education
        </h3>
        <Card class="section-card">
          <h4>Computer Science BSc @ Oxford Brookes University</h4>
          <span class="date-subtitle">September 2012 - May 2016</span>
          <p>
            Gained a first-class honours in computer science, and won the British Computer Society (BCS) 
            award for best computing project. Course representative and student ambassador, I was fully 
            involved in all aspects of my course. Founded and initially ran the computing society, which 
            holds regular computer-science related, and social events.
          </p>

          <h4>A Levels @ St John's Academy, Marlborough</h4>
          <span class="date-subtitle">May 2012 - Sep 2016</span>
          <p>
            Studied Economics, Physics and Computing at A Level. Business Studies and Photography for 
            AS Level. While studying also developed a set of interactive learning tools, including a 
            quiz sharing website, and dynamic computing revision app. Won the governors award for economics.
          </p>
        </Card> 
      </section>

      <!-- Key Skills -->
      <section>
        <h3>
          <font-awesome-icon icon="list-ul" class="side-panel-icon" />
          Key Skills
        </h3>
        <Card class="section-card">
          <p>
            Currently I am specialising in modern web applications with React, Angular and Vue, and native 
            mobile with React Native and Flutter. But I also have extensive experience working with other
            technologies, and am a very fast learner.
          </p>
          <p>
            JavaScript, ES6, Node.js, Vue, React Native, TypeScript, D3.js, ReactJS, Angular, Kotlin, Java, AI, NLU, Mongo,
            Digital Ocean, C#, PHP, Unit Testing, Native Script, Swift, Dart, Blockchain, Apache, Linux, Docker, AWS, NGINX,
            Python, Neural Networks, Chatbots, DevOps, SQL, Agile, SCRUM, Objective C, Cordova, Project Management, C++, UX,
            UI, Scaled-Agile, Kanban, QA, Ruby, C, Perl
          </p>
        </Card>
      </section> 

      <!-- Hobbies and Interests -->
      <section>
        <h3>
          <font-awesome-icon icon="star" class="side-panel-icon" />
          Hobbies and Interests
        </h3>
        <Card class="section-card">
          <p>
            My biggest hobby is coding, I love experimenting with the latest technologies, finding better 
            ways of doing things, and creating applications. I'm also interested in astro-physics and 
            cosmology- while at secondary school, I got an A grade in self-taught GCSE Astronomy. 
            On weekends and sometimes an early session before work I enjoy running, swimming and cycling.
          </p>
        </Card> 
      </section>


    </main>
            
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


@Component({
  components: {
    Card,
    FontAwesomeIcon,
  },
})
export default class Cv extends Vue {}
</script>

<style lang="scss">

@import '../styles/media-queries.scss';

.cv-page {
  background: #ebebeb;
}

main {
    padding: 2em;
    display: flex;
    flex-direction: column;

  h3 {
    margin: 0;
    color: #a2a4a5;
  }

  section {
    margin: 1em 0;
    .section-card {
      padding: 0.5em 1em;
      margin-top: 0.5em;

      h4 {
        font-size: 1.5em;
        font-weight: normal;
        margin: 0.5em 0 0 0;
      }
      span.date-subtitle {
        font-size: 0.8em;
        color: #a2a4a5;
      }
    }
  }


}

aside { 
  float: left;
  display: flex;
  flex-direction: column;
  background: #2196F3;
  box-shadow: 
    0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12), 
    0 1px 5px 0 rgba(0,0,0,0.2);
  
  @media #{$xs-devices-only} {
    width: 100%;
  }
  @media #{$small-devices-and-up} {
    width: 35%;
  }
  @media #{$medium-devices-and-up} {
    width: 30%;
  }
  @media #{$large-devices-and-up} {
    width: 25%;
  }

  img.profile-picture {
    max-width: 100%;
    margin: 0 auto;
  }

  h3 {
    flex: 0 0 100%;
    margin: 10px 5px 5px 5px;
    font-weight: normal;
    font-size: 1.8em;
    color: white;
  }

  .side-panel {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5em;
    color: white;

    .side-panel-icon {
      flex: 1;
      font-size: 30px;
      margin: 0 5px;
    }
    span, a {
      flex: 8;
      margin: 5px;
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &.bio-panel {
      padding-top: 0;
      background: rgba(255,255,255,.4);
      box-shadow: 
        0 2px 2px 0 rgba(0,0,0,0.14),
        0 3px 1px -2px rgba(0,0,0,0.12),
        0 1px 5px 0 rgba(0,0,0,0.2);
    }
  }
}

</style>

