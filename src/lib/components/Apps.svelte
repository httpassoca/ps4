<script lang="ts">
  import App from "./App.svelte";

  const apps = [
    {
      name: "Bloodborne",
      coverImage: "bloodborne.webp",
    },
    {
      name: "Spider-Man",
      coverImage: "spider-man.webp",
    },
  ];
</script>

<div class="apps">
  {#each apps as app (app.name)}
    <App {app} />
  {/each}
</div>

<style lang="sass">
.apps
  display: flex
  gap: 2px
  margin-top: 210px
  margin-left: 73px
</style>
