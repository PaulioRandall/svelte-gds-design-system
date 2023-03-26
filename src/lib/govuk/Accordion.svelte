<script context="module">
	const defaultLabels = {
		hideAllSections: 'Hide all sections',
		hideSection: 'Hide',
		hideSectionAriaLabel: 'Hide this section',
		showAllSections: 'Show all sections',
		showSection: 'Show',
		showSectionAriaLabel: 'Show this section',
	}

	const isValidLabelKey = (k) => !!defaultLabels[k]

	const validateCustomLabels = (customLabels) => {
		if (!isObject(customLabels)) {
			throw new Error("Accordion prop 'customLabels' must be an object")
		}

		for (const k in customLabels) {
			if (!isValidLabelKey(k)) {
				throw new Error(`Accordion prop 'customLabels.${k}' is not a valid key`)
			}

			if (isNonEmptyString(customLabels[k])) {
				throw new Error(
					`Accordion prop 'customLabels.${k}' must contain a non-empty string`
				)
			}
		}
	}
</script>

<script>
	import { onMount, setContext } from 'svelte'
	import { isObject, isNonEmptyString } from '$govuk/util.js'

	export let id = 'accordion-default'
	export let forget_expanded = false
	export let custom_labels = {
		// hideAllSections: "",
		// hideSection: "",
		// hideSectionAriaLabel: "",
		// showAllSections: "",
		// showSection: "",
		// showSectionAriaLabel: ""
	}

	validateCustomLabels(custom_labels)

	let elem = null
	let govukComponent = null
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

	onMount(() => {
		const config = {
			rememberExpanded: !forget_expanded,
			i18n: custom_labels,
		}

		govukComponent = new window.GOVUKFrontend.Accordion(elem, config)
		govukComponent.init()
	})
</script>

<div
	bind:this="{elem}"
	id="{id}"
	class="govuk-accordion"
	data-module="govuk-accordion">
	<slot />
</div>
