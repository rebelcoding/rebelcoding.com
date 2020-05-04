<template>
  <ParentLayout>
    <template v-slot:sidebar-top>
      <h1>JELLO</h1>
      <RebelAds />
    </template>
  </ParentLayout>
</template>


<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import RebelAds from '@theme/components/RebelAds.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout,
    RebelAds,
  },
  created() {
    window.$example = this
  }
}
</script>