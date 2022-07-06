<script lang="ts">
  import { area, KeyboardCode, makeKeypressEndFunction } from "$lib/controls";
  import { apps } from "$lib/store/apps.store";
  import { actualArea, AreasEnum } from "$lib/store/controls.store";
  import App from "./App.svelte";

  let activeIndex = 1;
  let appsY = 0;
  let appsX = 0;
  const homeArea: area = {
    [KeyboardCode.LEFT]: {
      function() {
        if (activeIndex !== 0) {
          activeIndex -= 1;
          appsX += 206;
        }
      },
      name: "Previous App",
    },
    [KeyboardCode.RIGHT]: {
      function() {
        if (activeIndex !== $apps.length - 1) {
          activeIndex += 1;
          appsX -= 206;
        }
      },
      name: "Next App",
    },
    [KeyboardCode.UP]: {
      function() {
        appsY += 703;
        actualArea.update(AreasEnum.HEADER);
      },
      name: "Previous App",
    },
  };

  $: if ($actualArea === AreasEnum.HOME) {
    if (appsY !== 0) appsY = 0;
    document.onkeyup = keyPressEnd;
  }

  const keyPressEnd = makeKeypressEndFunction(homeArea);
</script>

<div
  class="apps"
  style="transform: translateX({appsX}px) translateY({appsY}px); "
>
  {#each $apps as app, i (i)}
    <App {app} active={i === activeIndex} down={appsY !== 0} />
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
