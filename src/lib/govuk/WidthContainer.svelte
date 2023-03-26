<script>
	export let title = ''
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="govuk-width-container">
	<slot />
</div>
