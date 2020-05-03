<script>
export default {
  name: 'RebelAds',
  watch: {
    '$route' (to, from) {
      if (
        to.path !== from.path
        // Only reload if the ad has been loaded
        // otherwise it's possible that the script is appended but
        // the ads are not loaded yet. This would result in duplicated ads.
        && this.$el.querySelector('#rebelads')
      ) {
        this.$el.innerHTML = ''
        this.load()
      }
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      // I haven't pushed any of this live
      // am just trying to get the idea working
      // then I'll remove the script & replace it
      const s = document.createElement('script')
      s.id = '_carbonads_js'
      s.src = `//cdn.carbonads.com/carbon.js?serve=CKYIK2QU&placement=vuejsorg`
      this.$el.appendChild(s)
    }
  },
  render (h) {
    return h('div', { class: 'rebel-ads' })
  }
}
</script>

<style lang="stylus">
.rebel-ads
  min-height 102px
  padding 1.5rem 1.5rem 0
  margin-bottom -0.5rem
  font-size 0.75rem
  a
    color #444
    font-weight normal
    display inline
  .rebel-img
    float left
    margin-right 1rem
    border 1px solid $borderColor
    img
      display block
  .rebel-poweredby
    color #999
    display block
    margin-top 0.5em
@media (max-width: $MQMobile)
  .rebel-ads
    .rebel-img img
      width 100px
      height 77px
</style>