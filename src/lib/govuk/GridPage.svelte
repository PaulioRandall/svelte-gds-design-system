<script>
	import PhaseBanner from '$govuk/PhaseBanner.svelte'

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

<div class="govuk-width-container">
	<PhaseBanner feedbackTo="/feedback" />
	<slot />
</div>
