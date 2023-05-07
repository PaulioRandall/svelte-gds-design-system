<script>
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import { cubicOut } from 'svelte/easing'

	export let text // = ''
	export let color = ''
	export let inline = false

	let enabled = false
	let showMsg = false

	const copyTextToClipboard = () => {
		try {
			navigator.clipboard.writeText(text)
			copied()
		} catch (_) {
			return
		}
	}

	const copied = async () => {
		showMsg = true
		setTimeout(() => (showMsg = false), 200)
	}

	onMount(async () => (enabled = true))

	const backdropFade = {
		delay: 200,
		duration: 800,
		easing: cubicOut,
	}

	const textFade = {
		duration: 200,
		easing: cubicOut,
	}
</script>

{#if enabled}
	<div
		class="copyable"
		class:inline="{inline}"
		style:--color="{color}"
		on:click="{copyTextToClipboard}"
		on:keypress="{copyTextToClipboard}">
		<slot />
		{#if showMsg}
			<div class="msg" out:fade="{backdropFade}">
				<span out:fade="{textFade}">Copying...</span>
			</div>
		{/if}
	</div>
{:else}
	<slot />
{/if}

<style>
	.copyable {
		position: relative;
		cursor: copy;
	}

	.inline {
		display: inline-block;
	}

	.msg {
		position: absolute;
		top: -5px;
		left: -5px;

		display: flex;
		justify-content: center;
		align-items: center;

		width: calc(100% + 10px);
		height: calc(100% + 10px);

		color: var(--color, white);
		font-size: 16px;
		font-weight: bold;

		backdrop-filter: saturate(200%) blur(12px);
		box-shadow: 0 0 12px 4px blur(12px);
		border-radius: 0.4rem;
	}
</style>
