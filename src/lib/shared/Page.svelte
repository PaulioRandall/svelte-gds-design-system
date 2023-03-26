<script>
	import WidthContainer from '$govuk/WidthContainer.svelte'
	import PhaseBanner from '$govuk/PhaseBanner.svelte'

	export let title = ''

	if (title) {
		title = `${title} | Svelte GDS Design System`
	} else {
		title = 'Svelte GDS Design System'
	}
</script>

<WidthContainer title="{title}">
	<PhaseBanner feedbackTo="/feedback" />
	<slot />
</WidthContainer>
