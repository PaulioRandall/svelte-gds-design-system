<script>
	import { countTruthy } from '$govuk/util.js'

	export let id = undefined // = ""
	export let heading // = ''

	export let h2 = false
	export let h3 = false
	export let h4 = false

	if (!heading) {
		throw new Error('A SummaryCard must have a heading prop')
	}

	const numOfHeadingElementTypes = countTruthy(h2, h3, h4)

	if (numOfHeadingElementTypes < 1) {
		throw new Error(
			"A SummaryCard must have a heading element type prop ('h2' or 'h3')"
		)
	}

	if (numOfHeadingElementTypes > 1) {
		throw new Error(
			'A SummaryCard cannot have more than one heading element type'
		)
	}
</script>

<div id="{id}" class="govuk-summary-card">
	<div class="govuk-summary-card__title-wrapper">
		<h2 class="govuk-summary-card__title">{@html heading}</h2>
		{#if $$slots.actions}
			<ul class="govuk-summary-card__actions">
				<slot name="actions" />
			</ul>
		{/if}
	</div>
	<div class="govuk-summary-card__content">
		<slot />
	</div>
</div>
