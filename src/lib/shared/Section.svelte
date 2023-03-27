<script>
	// Section is a row with a single full width column.
	//
	// By default, there is a section break at the start to separate the
	// section from the previous. I'm experimenting with a section break
	// prior to the content rather than after so when someone clicks a
	// menu link that jumps to the content there will be a gap at the top.
	//
	// I've found a top gap after jumping to content improves reading
	// experience quite a bit but have yet to figure out how to best
	// implement it. A top margin is usually preferred but using a section
	// break allows for visual section break lines to be added easily.
	//
	// My current feelings on this implementation are pretty meh but I'm
	// giving it a few weeks to see if it has any sticking power. I'll
	// be switching to a top margin and removing the section break if not.

	import Col from '$govuk/Col.svelte'
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

<Row type="section" id="{row_id}">
	<Col full>
		<slot />
	</Col>
</Row>
