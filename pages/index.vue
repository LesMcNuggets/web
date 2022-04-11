<template>
  <div style="background-image: linear-gradient(to left bottom, #683fb5, #4c73d4, #519de3, #81c2e8, #c1e3ee);
background-image: linear-gradient(to right top, #c1e3ee, #abd6ea, #99c7e8, #8db8e4, #87a8df, #809bdb, #7c8dd6, #7c7ecf, #756fca, #6f60c4, #6b50bd, #683fb5);
background-image: linear-gradient(to bottom, #c1e3ee, #abd6ea, #99c7e8, #8db8e4, #87a8df, #809bdb, #7c8dd6, #7c7ecf, #756fca, #6f60c4, #6b50bd, #683fb5);">
      <LandingPage />
  </div>
</template>

<script>
import LandingPage from '~/components/kanban'
import '@fortawesome/fontawesome-free'

export default {
  name: 'IndexPage',
  components: {
    LandingPage
  }
}
</script>
