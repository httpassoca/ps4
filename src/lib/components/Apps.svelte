<script lang="ts">
  import { area, AreasEnum, KeyboardCode } from "$lib/controls";
  import { actualArea, keysPressed } from "$lib/store/controls.store";
  import App from "./App.svelte";

  let activeIndex = 1;
  let appsPosition = 0;
  const homeArea: area = {
    [KeyboardCode.LEFT]: {
      function() {
        if (activeIndex !== 0) {
          activeIndex -= 1;
          appsPosition += 206;
        }
      },
      name: "Previous App",
    },
    [KeyboardCode.UP]: {
      function() {
        actualArea.update(AreasEnum.header);
      },
      name: "Previous App",
    },
    [KeyboardCode.RIGHT]: {
      function() {
        if (activeIndex !== apps.length - 1) {
          activeIndex += 1;
          appsPosition -= 206;
        }
      },
      name: "Next App",
    },
  };
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

  $: if ($actualArea === AreasEnum.home) {
    document.onkeyup = keyPressEnd;
  }

  function keyPressEnd(this: GlobalEventHandlers, ev: KeyboardEvent) {
    keysPressed.keyUp(ev);
    homeArea[ev.code].function();
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
