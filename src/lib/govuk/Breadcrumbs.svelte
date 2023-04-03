<script>
	// If true, only shows the first and last crumbs when on mobile
	export let collapsable = false

	if (!$$slots.default) {
		throw new Error(
			'Breadcrumbs must have a series of Breadcrumb components slotted in via the default slot'
		)
	}
</script>

<div
	class="govuk-breadcrumbs"
	class:govuk-breadcrumbs--collapse-on-mobile="{collapsable}">
	<ol class="govuk-breadcrumbs__list">
		<slot />
	</ol>
</div>
