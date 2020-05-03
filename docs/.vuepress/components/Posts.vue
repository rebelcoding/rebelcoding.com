
<template>
  <div class="posts" v-if="posts.length">
    <div class="post" v-for="post in posts">
      <router-link :to="post.path">
        <div>
          <img v-if="post.frontmatter.image" :src="$withBase(post.frontmatter.image)" alt="">
        </div>
        <h2>{{post.frontmatter.title}}</h2>
	</router-link>
        <p>{{post.frontmatter.description}}</p>
        <span v-for="tag in post.frontmatter.tags" style="padding:5px;">
            <a href="">#{{ tag }}</a>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    }
  }
};
</script>
