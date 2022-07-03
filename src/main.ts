import App from './index.svelte'
import '$lib/controls.ts'
const app = new App({
  target: document.getElementById('app')
})

export default app
