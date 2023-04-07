<script>
	// Section is a row with a single full width column and a top margin.

	import Col from '$govuk/Col.svelte'
	import Row from '$govuk/Row.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'

	export let id = undefined // ""
	export let no_top_pad = false
	export let add_top_margin = false

	const noTopPadClass = no_top_pad ? '' : 'section-top-pad'
	const addTopMarginClass = add_top_margin ? 'section-add-top-margin' : ''
</script>

<Row type="section" id="{id}" c="{noTopPadClass} {addTopMarginClass}">
	<Col width="full">
		<slot />
	</Col>
</Row>

<style>
	:global(.section-top-pad) {
		padding-top: var(--spacing-responsive-5);
	}

	:global(.section-add-top-margin) {
		margin-top: var(--spacing-responsive-9);
	}
</style>
