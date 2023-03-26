<script>
	import Row from '$govuk/Row.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'

	export let row_id = undefined // ""
	export let section_break_id = undefined // ""

	export let no_break = false
	export let show_break_line = false
</script>

{#if !no_break}
	<SectionBreak id="{section_break_id}" md show_line="{show_break_line}" />
{/if}

<Row id="{row_id}">
	<slot />
</Row>
