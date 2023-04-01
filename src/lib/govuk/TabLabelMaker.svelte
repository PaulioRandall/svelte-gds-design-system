<script>
	import TabLabel from '$govuk/TabLabel.svelte'

	export let labels /* = [
		["tab-id", "label-text"]
	] */
</script>

{#each labels as [id, text]}
	<TabLabel id="{id}">{text}</TabLabel>
{/each}
