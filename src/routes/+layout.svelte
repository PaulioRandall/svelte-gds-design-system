<script>
	import Header from '$govuk/Header.svelte'
	import Footer from '$govuk/Footer.svelte'
</script>

<div class="page">
	<Header />

	<slot>
		<div></div>
	</slot>

	<Footer />
</div>

<style>
	@import '$govuk/govuk-frontend-4.5.0.min.css';

	.page {
		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;

		min-height: 100vh;
	}
</style>
