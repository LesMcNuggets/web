<template>
  <div>
    <HeaderPage />
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from "~/components/mn-landingPage";
import HeaderPage from "~/components/mn-header";
import "@fortawesome/fontawesome-free";

export default {
  name: "IndexPage",
  components: {
    LandingPage,
    HeaderPage,
  },
};
</script>
