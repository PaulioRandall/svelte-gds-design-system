<script>
	import { onMount } from 'svelte'

	import Header from '$govuk/Header.svelte'
	import Footer from '$govuk/Footer.svelte'
	import SkipLink from '$govuk/SkipLink.svelte'

	onMount(async () => {
		// Important!
		// GOVUK JS stuff must initalise after component rendering.
		window.GOVUKFrontend.initAll()
	})
</script>

<div class="page">
	<SkipLink />
	<Header homePage="/home" />

	<div class="content">
		<slot>
			<div></div>
		</slot>
	</div>

	<Footer />
</div>

<style>
	@import '$govuk/govuk-frontend-4.5.0.min.css';
	@import '$govuk/variables.css';

	.page {
		display: flex;
		flex-direction: column;

		min-height: 100vh;
	}

	.content {
		flex-grow: 1;
	}
</style>
