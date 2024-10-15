<script setup>
import Nav from '../components/Nav.vue'
import NavBar from '../components/NavBar.vue'
import Banner from '../components/Banner.vue'
import Splash from '../components/Splash.vue'
import Themes from '../components/Themes.vue'
import Section1 from '../components/Section1.vue'
import Tracks from '../components/Tracks.vue'
import Schedule from '../components/Schedule.vue'
import Section2 from '../components/Section2.vue'
import Venue from '../components/Venue.vue'
import Section3 from '../components/Section3.vue'
import MentorsJudges from '../components/MentorsJudges.vue'
import Section4 from '../components/Section4.vue'
import Sponsors from '../components/Sponsors.vue'
import CommunitySupport from '../components/CommunitySupport.vue'
import Section5 from '../components/Section5.vue'
import Faq from '../components/Faq.vue'
import Section6 from '../components/Section6.vue'

import Section7 from '../components/Section7.vue'
import Footer from '../components/Footer.vue'
import PastSupporters from '../components/PastSupporters.vue'
import JoinUs from '../components/JoinUs.vue'

</script>
<template>
  <div>
    <!-- <Nav /> -->
    <NavBar />

    <!-- <Banner id="banner" /> -->
    <Splash />

    <Themes />

    <!-- <Section1 id="section1" /> -->
    <Schedule id="schedule" />

    <!-- <Section2 id="section2" /> -->
    <Tracks id="tracks" />

    <!-- <Section3 id="section3" /> -->
    <Venue id="venue" />

    <!-- <Section4 id="section4" /> -->
    <MentorsJudges id="mentorsjudges" />

    <JoinUs id="joinus" />

    <!-- <Section5 id="section5" /> -->
    <Sponsors id="sponsors" />

    <CommunitySupport id="communitysupport" />

    <!-- <Section6 id="section6" /> -->
    <Faq id="faq" />

    <!-- <Section7 /> -->
    <PastSupporters />
    

    <Footer />
  </div>
</template>