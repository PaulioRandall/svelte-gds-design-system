<script>
	export let title = ''

	if (title) {
		title = `${title} | Svelte GDS Design System`
	} else {
		title = 'Svelte GDS Design System'
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="main">
	<slot />
</main>

<style>
	.main {
		flex-grow: 1;

		max-width: 100%;
		width: 100%;
	}
</style>
