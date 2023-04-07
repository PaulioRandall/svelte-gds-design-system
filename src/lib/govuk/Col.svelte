<script context="module">
	export const widths = [
		'full',
		'three-quarters',
		'two-thirds',
		'one-half',
		'one-third',
		'one-quarter',
	]

	const isValidWidth = (w) => widths.includes(w)
</script>

<script>
	import { countTruthy } from '$govuk/util.js'

	export let c = ''

	export let id = undefined // ""
	export let type = 'div' // Must be a standard HTML block element
	export let width // = ""
	export let desktop_width = undefined // ""

	if (!width) {
		throw new Error('A column (Col) must have a width')
	}

	if (!isValidWidth(width)) {
		throw new Error('A column (Col) width must from the set of valid widths')
	}

	let desktopWidthClass = ''
	if (desktop_width) {
		if (!isValidWidth(desktop_width)) {
			throw new Error(
				'A column (Col) desktop_width must from the set of valid widths'
			)
		}

		desktopWidthClass = `govuk-grid-column-${desktop_width}-from-desktop`
	}
</script>

<svelte:element
	this="{type}"
	id="{id}"
	class="govuk-grid-column-{width} {desktopWidthClass} {c}">
	<slot />
</svelte:element>
