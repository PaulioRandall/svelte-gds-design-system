<script>
	import { onMount } from 'svelte'

	let elem = null
	let govukComponent = null

	onMount(() => {
		govukComponent = new window.GOVUKFrontend.Tabs(elem)
		govukComponent.init()
	})
</script>

<div bind:this="{elem}" class="govuk-tabs" data-module="govuk-tabs">
	<h2 class="govuk-tabs__title">Contents</h2>
	<ul class="govuk-tabs__list">
		<slot name="labels" />
	</ul>
	<slot name="panels" />
</div>
