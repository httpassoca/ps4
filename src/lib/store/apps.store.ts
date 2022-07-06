import { readable } from 'svelte/store';

type App = {
  name: string;
  coverImage: string;
}
export const apps = readable<App[]>([
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
])