<script>
	export let noborders = false
</script>

<dl
	class="govuk-summary-list"
	class:govuk-summary-list--no-border="{noborders}">
	<slot />
</dl>
