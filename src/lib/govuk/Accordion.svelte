<script>
	import { setContext } from 'svelte'

	export let id = 'accordion-default'

	let sectionIndex = 0

	setContext('id-generator', () => {
		const next = sectionIndex
		sectionIndex++

		return {
			headingId: `${id}-heading-${sectionIndex}`,
			summaryId: `${id}-summary-${sectionIndex}`,
			contentId: `${id}-content-${sectionIndex}`,
		}
	})
</script>

<div class="govuk-accordion" data-module="govuk-accordion" id="{id}">
	<slot />
</div>
