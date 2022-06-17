<script lang="ts">
  import type { App } from "$lib/types";
  export let app: App;
  export let active = false;
</script>

<div class="app" class:active>
  <div
    class="image"
    style="background-image: url(/assets/apps/{app.coverImage})"
  />
  {#if active}<div class="label">Start</div>{/if}
</div>

<style lang="sass">
.app
  height: 200px
  width: 200px
  display: flex
  flex-direction: column
  align-items: center
  .image
    height: 100%
    width: 100%
    background-size: cover
    background-position: center
  &.active
    width: 344px
    height: unset
    padding: 2px
    border: 5px solid #DED6E2
    margin: 0px 3px
    .image
      border: 4px solid #95A7C7
      height: 330px
    .label
      padding: 19px 0
      font-size: 32px
      font-weight: 300

</style>
