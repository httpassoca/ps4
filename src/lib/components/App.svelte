<script lang="ts">
  import type { App } from "$lib/types";
  export let app: App;
  export let active = false;
  export let down = false;
</script>

<div class="app" class:active class:down>
  <div
    class="image"
    style="background-image: url(/assets/apps/{app.coverImage})"
  />
  {#if active}<div class="label">Start</div>{/if}
  {#if active}<div class="title"><span>{app.name}</span></div>{/if}
</div>

<style lang="sass">
.app
  height: 200px
  width: 200px
  display: flex
  flex-direction: column
  align-items: center
  position: relative
  transition: height .15s ease, border .3s ease, width .4s ease, transform .3s ease
  border: 0px solid rgba(0,0,0,.5)
  .image
    height: 100%
    width: 100%
    background-size: cover
    background-position: center
  &.active
    width: 344px
    height: 424px
    padding: 2px
    border: 5px solid #DED6E2
    margin: 0px 3px
    transform: translateY(-6px)
    .image
      border: 4px solid #95A7C7
      height: 330px

  &.down
    width: 182px
    height: 182px
    margin: 0px 3px
  .label
    padding: 19px 0
    font-size: 32px
  .title
    margin-left: 22px
    position: absolute
    bottom: 0
    left: 100%
    font-size: 64px
    line-height: 64px
    width: 100vw
    height: 80px
    display: flex
    align-items: center
</style>
