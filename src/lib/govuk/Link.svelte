<script>
	export let href // = ""
	export let as_new_tab = false

	export let invert_color = false
	export let no_underline = false
	export let thick_underline = false
	export let dynamic_page = false
</script>

{#if as_new_tab}
	<a
		href="{href}"
		target="_blank"
		rel="noopener noreferrer"
		class="govuk-link"
		class:govuk-link--inverse="{invert_color}"
		class:govuk-link--no-underline="{no_underline}"
		class:govuk-link--no-visited-state="{dynamic_page}"
		class:thick_underline="{thick_underline}">
		<slot /> (opens in new tab)
	</a>
{:else}
	<a
		href="{href}"
		class="govuk-link"
		class:govuk-link--inverse="{invert_color}"
		class:govuk-link--no-underline="{no_underline}"
		class:govuk-link--no-visited-state="{dynamic_page}"
		class:thick_underline="{thick_underline}">
		<slot />
	</a>
{/if}

<style>
	.thick_underline {
		text-decoration-thickness: 3px;
		text-decoration-skip: initial;
		text-decoration-skip-ink: none;
	}
</style>
