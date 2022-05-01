<template>
  <div>
    <HeaderPage />
    <HomeDashboard />
  </div>
</template>

<script>
import HeaderPage from "~/components/mn-header";
import HomeDashboard from "~/components/home-dashboard";

export default {
  name: "HomePage",
  components: {
    HeaderPage,
    HomeDashboard,
  },
};
</script>
