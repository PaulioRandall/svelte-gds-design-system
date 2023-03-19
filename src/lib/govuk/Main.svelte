<script>
	export let autospace = false
	export let largespace = false
</script>

<main
	id="main-content"
	role="main"
	class="govuk-main-wrapper"
	class:govuk-main-wrapper--auto-spacing="{autospace}"
	class:govuk-main-wrapper--l="{largespace}">
	<slot />
</main>
