<script lang="ts">
  import type { App } from "$lib/types";
  export let app: App;
</script>

<div class="app" style="background-image: url(/assets/apps/{app.coverImage})" />

<style lang="sass">
.app
  height: 200px
  width: 200px
  background-size: cover
  background-position: center
</style>
