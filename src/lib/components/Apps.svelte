<script lang="ts">
  import App from "./App.svelte";

  let active = "Spider-Man";

  const apps = [
    {
      name: "Bloodborne",
      coverImage: "bloodborne.webp",
    },
    {
      name: "Spider-Man",
      coverImage: "spider-man.webp",
    },
    {
      name: "Bloodborne1",
      coverImage: "bloodborne.webp",
    },
    {
      name: "Spider-Man2",
      coverImage: "spider-man.webp",
    },
    {
      name: "Bloodborne3",
      coverImage: "bloodborne.webp",
    },
    {
      name: "Spider-Man4",
      coverImage: "spider-man.webp",
    },
    {
      name: "Bloodborne5",
      coverImage: "bloodborne.webp",
    },
    {
      name: "Spider-Man6",
      coverImage: "spider-man.webp",
    },
    {
      name: "Bloodborne7",
      coverImage: "bloodborne.webp",
    },
    {
      name: "Spider-Man8",
      coverImage: "spider-man.webp",
    },
  ];
</script>

<div class="apps">
  {#each apps as app (app.name)}
    <App {app} active={active === app.name} />
  {/each}
</div>

<style lang="sass">
.apps
  display: flex
  gap: 4px
  margin-top: 210px
  margin-left: 73px
  width: fit-content
</style>
