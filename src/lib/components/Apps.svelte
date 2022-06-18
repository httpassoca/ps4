<script lang="ts">
  import App from "./App.svelte";

  let activeIndex = 1;
  let appsPosition = 0;

  const apps = [
    {
      name: "Ps Store",
      coverImage: "ps-store.webp",
    },
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
    {
      name: "Metal Gear Solid V: The Panthom Pain",
      coverImage: "metal-gear.webp",
    },
  ];

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == "37" && activeIndex !== 0) {
      activeIndex -= 1;
      appsPosition += 206;
    } else if (e.keyCode == "39" && activeIndex !== apps.length - 1) {
      activeIndex += 1;
      appsPosition -= 206;
    }
  }
</script>

<div class="apps" style="transform: translateX({appsPosition}px)">
  {#each apps as app, i (i)}
    <App {app} active={i === activeIndex} />
  {/each}
</div>

<style lang="sass">
.apps
  display: flex
  gap: 4px
  margin-top: 83px
  margin-left: 73px
  width: fit-content
  transition: transform .15s ease-in
  position: fixed
</style>
