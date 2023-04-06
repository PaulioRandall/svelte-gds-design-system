<script>
	export let bullets = false
	export let numbers = false
	export let spaced = false

	export let indent = false
	export let double_indent = false
	export let sub_list = false

	if (bullets && numbers) {
		throw new Error(
			'A List cannot have both bullets and numbered at the same time'
		)
	}

	// TODO: try out https://svelte.dev/docs#template-syntax-slot-slot-key-value

	if (indent && double_indent) {
		throw new Error(
			'A List cannot have both an indent and double_indent at the same time'
		)
	}
</script>

{#if numbers}
	<ol
		class="govuk-list govuk-list--number"
		class:govuk-list--spaced="{spaced}"
		class:indent="{indent}"
		class:double_indent="{double_indent}"
		class:sub_list="{sub_list}">
		<slot />
	</ol>
{:else}
	<ul
		class="govuk-list"
		class:govuk-list--bullet="{bullets}"
		class:govuk-list--spaced="{spaced}"
		class:indent="{indent}"
		class:double_indent="{double_indent}"
		class:sub_list="{sub_list}">
		<slot />
	</ul>
{/if}

<style>
	.indent :global(li) {
		margin-left: var(--spacing-responsive-5);
	}

	.double_indent :global(li) {
		margin-left: var(--spacing-responsive-8);
	}

	.sub_list :global(li::before) {
		content: '—';
		margin-left: calc(0 - var(--spacing-responsive-5));
		padding-right: var(--spacing-responsive-1);
	}
</style>
