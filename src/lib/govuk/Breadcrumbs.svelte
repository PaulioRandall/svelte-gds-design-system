<script>
	// If true, only shows the first and last crumbs when on mobile
	export let collapsable = false

	export let crumbs /* = [
    ["", ""]
  ] */
</script>

<div
	class="govuk-breadcrumbs"
	class:govuk-breadcrumbs--collapse-on-mobile="{collapsable}">
	<ol class="govuk-breadcrumbs__list">
		{#each crumbs as [href, text]}
			<li class="govuk-breadcrumbs__list-item">
				<a class="govuk-breadcrumbs__link" href="{href}">{text}</a>
			</li>
		{/each}
	</ol>
</div>
