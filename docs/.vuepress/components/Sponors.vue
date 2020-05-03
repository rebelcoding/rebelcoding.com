
<template>
  <div class="sponsors" v-if="sponsors.length">
    <div class="sponsor" v-for="sponsor in sponsors">
      <router-link :to="sponsor.link">
        <div>
          <img v-if="sponsor.frontmatter.image" :src="$withBase(sponsor.frontmatter.image)" alt="">
        </div>
        <b>{{sponsor.frontmatter.title}}</b>
	    </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["page"],
  computed: {
    sponsors() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return sponsors;
    }
  }
};
</script>
