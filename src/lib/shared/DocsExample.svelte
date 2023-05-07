<script>
	import htmlLang from 'svelte-highlight/languages/xml'

	import SectionBreak from '$govuk/SectionBreak.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'

	export let first_example = false
	export let id // = ""
	export let heading // = ""
	export let src // = ""
</script>

{#if !first_example}
	<SectionBreak md />
{/if}

<SummaryCard h3 id="{id}" heading="{heading}">
	<slot name="description" />
	<slot />
	<CodeBlock lang="{htmlLang}" code="{src}" />
</SummaryCard>
