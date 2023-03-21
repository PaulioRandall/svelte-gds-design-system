<script>
	import { countTruthy } from '$govuk/util.js'

	export let lead = false
	export let small = false

	export let regular = false // by default but used to force regular
	export let bold = false

	export let left = false // by default but used to force left
	export let centre = false
	export let right = false

	export let override_font_80 = false
	export let override_font_48 = false
	export let override_font_36 = false
	export let override_font_27 = false
	export let override_font_24 = false
	export let override_font_19 = false
	export let override_font_16 = false
	export let override_font_14 = false

	if (lead && small) {
		throw new Error(
			'A paragraph cannot be both leading (lead) and small at the same time'
		)
	}

	if (regular && bold) {
		throw new Error(
			'A paragraph cannot be both regular and bold at the same time'
		)
	}

	const numOfAlignments = countTruthy(left, centre, right)

	if (numOfAlignments > 1) {
		throw new Error(
			'A paragraph cannot have more than one alignment (left, centre, or right)'
		)
	}

	const numOfOverrides = countTruthy(
		override_font_80,
		override_font_48,
		override_font_36,
		override_font_27,
		override_font_24,
		override_font_19,
		override_font_16,
		override_font_14
	)

	if (numOfOverrides > 1) {
		throw new Error('A paragraph cannot have more than one font size override')
	}
</script>

<p
	class:govuk-body="{!lead && !small}"
	class:govuk-body-l="{lead}"
	class:govuk-body-s="{small}"
	class:govuk-!-text-align-left="{left}"
	class:govuk-!-text-align-centre="{centre}"
	class:govuk-!-text-align-right="{right}"
	class:govuk-!-font-weight-regular="{regular}"
	class:govuk-!-font-weight-bold="{bold}"
	class:govuk-!-font-size-80="{override_font_80}"
	class:govuk-!-font-size-48="{override_font_48}"
	class:govuk-!-font-size-36="{override_font_36}"
	class:govuk-!-font-size-27="{override_font_27}"
	class:govuk-!-font-size-24="{override_font_24}"
	class:govuk-!-font-size-19="{override_font_19}"
	class:govuk-!-font-size-16="{override_font_16}"
	class:govuk-!-font-size-14="{override_font_14}">
	<slot />
</p>
