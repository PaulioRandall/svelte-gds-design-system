<script>
	import SectionBreak from '$govuk/SectionBreak.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'

	import ButtonGroup from '$govuk/forms/ButtonGroup.svelte'
	import Button from '$govuk/forms/Button.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'

	export let first_example = false
	export let id // = ""
	export let heading // = ""
	export let src // = "<url>"
</script>

{#if !first_example}
	<SectionBreak md />
{/if}

<SummaryCard h3 id="{id}" heading="{heading}">
	<slot name="description" />
	<slot />
	<CodeBlock>{src}</CodeBlock>
</SummaryCard>

<style>
	.docs-example {
		padding: var(--spacing-responsive-1);
		border: 1px solid var(--color-grey-border);
	}
</style>
