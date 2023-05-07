<script>
	import { Highlight } from 'svelte-highlight'
	import theme from 'svelte-highlight/styles/tomorrow-night'

	import Copyable from '$shared/Copyable.svelte'

	export let lang // = <svelte-highlight/languages/*>
	export let code // = ""
</script>

<svelte:head>
	{@html theme}
</svelte:head>

<div class="code-block">
	<Copyable text="{code}" color="white">
		<Highlight language="{lang}" code="{code}" />
	</Copyable>
</div>

<style>
	.code-block {
		overflow: hidden;
		max-width: 96vw;

		margin-top: 1rem;
		border-radius: 0.3rem;

		font-size: 14px;
		tab-size: 2;
	}

	.code-block :global(pre) {
		margin: 0;
	}
</style>
