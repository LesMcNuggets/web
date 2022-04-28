<template>
  <div>
    <LandingNavbar/>
    <LandingPage/>
  </div>
</template>

<script>
import LandingPage from "~/components/mn-landingPage";
import "@fortawesome/fontawesome-free";
import LandingNavbar from "~/components/landing-page/landing-navbar";

export default {
  name: "IndexPage",
  components: {
    LandingNavbar,
    LandingPage,
  },
};
</script>
