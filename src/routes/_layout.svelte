<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    @apply relative max-w-4xl bg-white p-8 my-0 mx-auto box-border;
  }
</style>

<Tailwindcss />

<Nav {segment} />

<main>
  <slot />
</main>
