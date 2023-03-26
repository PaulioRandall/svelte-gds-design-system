<!--
	TODO: If possible!
	
	let elem
	
	onMount(() => {
		window.GOVUKFrontend.init(...elem...)
	})

	<div bind:this={elem} class="govuk-tabs" data-module="govuk-tabs">	

	OR

	const init = () => {
		window.GOVUKFrontend.init(...elem...)
	}

	<div use:init>
-->

<div class="govuk-tabs" data-module="govuk-tabs">
	<h2 class="govuk-tabs__title">Contents</h2>
	<ul class="govuk-tabs__list">
		<slot name="menu" />
	</ul>
	<slot name="panels" />
</div>
