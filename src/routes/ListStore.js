import { writable } from "svelte/store"

let items = [
	{ id: 1, title: "I" },
	{ id: 2, title: "Am" },
	{ id: 3, title: "Yoda" },
]

export const ListStore = writable(items)
