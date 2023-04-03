<script>
	import { getContext } from 'svelte'

	export let id = undefined // = ""
	export let heading // = ""
	export let summary = ''

	if (!heading) {
		throw new Error('An AccordionSection must have a heading')
	}

	const generateIds = getContext('id-generator')
	const { headingId, summaryId, contentId } = generateIds()
</script>

<div id="{id}" class="govuk-accordion__section">
	<div class="govuk-accordion__section-header">
		<h2 class="govuk-accordion__section-heading">
			<span class="govuk-accordion__section-button" id="{headingId}">
				{@html heading}
			</span>
		</h2>
		{#if summary}
			<div class="govuk-accordion__section-summary govuk-body" id="{summaryId}">
				{@html summary}
			</div>
		{/if}
	</div>
	<div
		id="{contentId}"
		class="govuk-accordion__section-content"
		aria-labelledby="{headingId}">
		<slot />
	</div>
</div>
