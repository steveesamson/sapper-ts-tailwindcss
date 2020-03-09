<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script lang="ts">
  export let posts;
</script>

<style lang="less">
  h1 {
    @apply font-bold uppercase text-gray-900;
  }
  ul {
    @apply mt-4 mr-0 ml-0 mr-4 bg-gray-100 p-4 rounded-lg shadow-md;
  }
  .link {
    @apply text-gray-700;
    &:hover {
      @apply underline;
    }
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a class="link" rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
