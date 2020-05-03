<template>
  <ParentLayout>
    <template #sidebar-top>
    <h1>JELLO</h1>
      <RebelAds />
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import CarbonAds from '@theme/components/RebelAds.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout,
    RebelAds,
  }
}
</script>