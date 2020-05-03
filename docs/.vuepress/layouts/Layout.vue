<template>
  <ParentLayout>
    <template #sidebar-top>
      <h1>JELLO</h1>
      <CarbonAds />
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import CarbonAds from '../components/CarbonAds.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout,
    CarbonAds,
  }
}
</script>