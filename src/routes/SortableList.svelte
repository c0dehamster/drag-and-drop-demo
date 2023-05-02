<script>
	import { dndzone } from "svelte-dnd-action"
	import { flip } from "svelte/animate"

	import { ListStore } from "./ListStore"

	let items = $ListStore

	const flipDurationMs = 200

	const handleSort = e => {
		items = e.detail.items
	}

	const handleSortEnd = e => {
		items = e.detail.items
		ListStore.set(items)
	}
</script>

<section
	use:dndzone={{ items }}
	on:consider={handleSort}
	on:finalize={handleSortEnd}>
	{#each items as item (item.id)}
		<div animate:flip={{ duration: flipDurationMs }}>
			{item.title}
		</div>
	{/each}
</section>

<style>
	div {
		height: 1.5em;
		width: 10em;
		text-align: center;
		border: 1px solid black;
		margin: 0.2em;
		padding: 0.3em;
	}
</style>
