<script>
	export let bullets = false
	export let numbers = false
	export let spaced = false

	if (bullets && numbers) {
		throw new Error(
			'A list cannot have both bullet points and be numbered at the same time'
		)
	}
</script>

{#if numbers}
	<ol class="govuk-list govuk-list--number" class:govuk-list--spaced="{spaced}">
		<slot />
	</ol>
{:else}
	<ul
		class="govuk-list"
		class:govuk-list--bullet="{bullets}"
		class:govuk-list--spaced="{spaced}">
		<slot />
	</ul>
{/if}
