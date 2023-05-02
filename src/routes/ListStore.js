import { writable } from "svelte/store"

export const ListStore = writable([
	{ id: 1, title: "Lorem" },
	{ id: 2, title: "ipsum" },
	{ id: 3, title: "dolor" },
	{ id: 4, title: "sit" },
	{ id: 5, title: "amet" },
])
