<script>
	export let id = undefined // = ""
	export let no_border = false
</script>

<dl
	id="{id}"
	class="govuk-summary-list"
	class:govuk-summary-list--no-border="{no_border}">
	<slot />
</dl>
