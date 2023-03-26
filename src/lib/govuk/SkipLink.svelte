<script>
	import { onMount } from 'svelte'

	let elem = null
	let govukComponent = null

	onMount(() => {
		govukComponent = new window.GOVUKFrontend.SkipLink(elem)
		govukComponent.init()
	})
</script>

<a
	bind:this="{elem}"
	href="#main-content"
	class="govuk-skip-link"
	data-module="govuk-skip-link">
	Skip to main content
</a>
