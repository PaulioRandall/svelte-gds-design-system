<script>
	import { countTruthy } from '$govuk/util.js'

	export let inactive = false
	export let fresh = false // Because 'new' is a JS keyword
	export let active = false
	export let pending = false
	export let received = false
	export let sent = false
	export let rejected = false
	export let declined = false
	export let delayed = false

	const numOfStatuses = countTruthy(
		inactive,
		fresh,
		active,
		pending,
		received,
		sent,
		rejected,
		declined,
		delayed
	)

	if (numOfStatuses > 1) {
		throw new Error('A tag cannot have more than one status')
	}
</script>

<strong
	class="govuk-tag"
	class:govuk-tag--grey="{inactive}"
	class:govuk-tag--green="{fresh}"
	class:govuk-tag--turquoise="{active}"
	class:govuk-tag--blue="{pending}"
	class:govuk-tag--purple="{received}"
	class:govuk-tag--pink="{sent}"
	class:govuk-tag--red="{rejected}"
	class:govuk-tag--orange="{declined}"
	class:govuk-tag--yellow="{delayed}">
	<slot />
</strong>
