<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Apps from "$lib/components/Apps.svelte";
  import "$lib/sass/index.sass";
</script>

<main>
  <Header />
  <Apps />
</main>

<style lang="sass">
main
  max-width: 1920px
  margin: 0 auto
</style>
