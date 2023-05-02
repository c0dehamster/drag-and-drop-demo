<script>
	import { dndzone } from "svelte-dnd-action"
	import { flip } from "svelte/animate"

	import { ListStore } from "./ListStore"

	const flipDurationMs = 200

	const handleSort = e => {
		$ListStore = e.detail.items
	}
</script>

<section
	use:dndzone={{ items: $ListStore }}
	on:consider={handleSort}
	on:finalize={handleSort}>
	{#each $ListStore as item (item.id)}
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
