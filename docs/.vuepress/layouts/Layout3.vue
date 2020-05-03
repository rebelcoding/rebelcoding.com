<template>
  <Layout>
    <CarbonAds slot="sidebar-top"/>
  </Layout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import CarbonAds from '@theme/components/CarbonAds.vue'

export default {
  components: {
    Layout,
    CarbonAds,
  }
}
</script>