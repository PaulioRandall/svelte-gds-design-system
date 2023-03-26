<script>
	export let bullets = false
	export let numbers = false
	export let spaced = false
	export let sub_list = false

	if (bullets && numbers) {
		throw new Error(
			'A list cannot have both bullet points and be numbered at the same time'
		)
	}
</script>

{#if numbers}
	<ol
		class="govuk-list govuk-list--number"
		class:govuk-list--spaced="{spaced}"
		class:sub_list="{sub_list}">
		<slot />
	</ol>
{:else}
	<ul
		class="govuk-list"
		class:govuk-list--bullet="{bullets}"
		class:govuk-list--spaced="{spaced}"
		class:sub_list="{sub_list}">
		<slot />
	</ul>
{/if}

<style>
	.sub_list :global(li::before) {
		content: '—';
		margin-left: calc(0 - var(--spacing-responsive-4));
		padding-right: var(--spacing-responsive-1);
	}
</style>
