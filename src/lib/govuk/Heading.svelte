<script>
	// TODO: add captions

	export let h3 = false
	export let h2 = false
	export let h1 = false

	export let sm = false
	export let md = false
	export let lg = false
	export let xl = false

	if (!h1 && !h2 && !h3) {
		throw new Error('Must select a heading element (h1, h2, or h3)')
	}

	if (!sm && !md && !lg && !xl) {
		throw new Error('Must select a heading size (sm, md, lg, or xl)')
	}
</script>

{#if h1}
	<h1
		class:govuk-heading-s="{sm}"
		class:govuk-heading-m="{md}"
		class:govuk-heading-l="{lg}"
		class:govuk-heading-xl="{xl}">
		<slot />
	</h1>
{:else if h2}
	<h2
		class:govuk-heading-s="{sm}"
		class:govuk-heading-m="{md}"
		class:govuk-heading-l="{lg}"
		class:govuk-heading-xl="{xl}">
		<slot />
	</h2>
{:else if h3}
	<h3
		class:govuk-heading-s="{sm}"
		class:govuk-heading-m="{md}"
		class:govuk-heading-l="{lg}"
		class:govuk-heading-xl="{xl}">
		<slot />
	</h3>
{/if}
