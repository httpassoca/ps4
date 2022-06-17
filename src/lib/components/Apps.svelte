<script lang="ts">
  import App from "./App.svelte";

  let activeIndex = 0;

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
      name: "Hollow Knight",
      coverImage: "hollow-knight.webp",
    },
    {
      name: "Horizon Zero Dawn",
      coverImage: "horizon.webp",
    },
  ];

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == "37" && activeIndex !== 0) {
      activeIndex -= 1;
    } else if (e.keyCode == "39" && activeIndex !== apps.length - 1) {
      activeIndex += 1;
    }
  }
</script>

<div class="apps">
  {#each apps as app, i (i)}
    <App {app} active={i === activeIndex} />
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
