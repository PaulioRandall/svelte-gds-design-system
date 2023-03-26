<script>
	export let name = undefined // = ""

	export let GET = undefined // = ""
	export let POST = undefined // = ""

	// FYI: Sometimes browsers will ignore novalidate or autocomplete

	export let accept_charset = undefined // = ""
	export let novalidate = false
	export let autocomplete = false
	export let target = '_self'

	const newSearchFormError = (err) => {
		const prefix = name ? `Form ${name}` : `A form`
		return new Error(`${prefix} ${err}`)
	}

	const method = GET ? 'GET' : 'POST'
	const action = GET ? GET : POST
	const autoCompleteValue = autocomplete ? 'on' : 'off'
	const targets = ['_self', '_blank', '_parent', '_top']

	if (!GET && !POST) {
		throw newSearchFormError('must have a GET or POST destination url')
	}

	if (GET && POST) {
		throw newSearchFormError('cannot have both a GET and POST destination urls')
	}

	if (!targets.includes(target)) {
		const targetList = targets.join(', ')
		throw newSearchFormError(
			`must use one of the following targets [${targetList}] '_self' is the default`
		)
	}
</script>

<form
	name="{name}"
	method="{method}"
	action="{action}"
	accept-charset="{accept_charset}"
	novalidate="{novalidate}"
	autocomplete="{autoCompleteValue}"
	target="{target}">
	<slot />
</form>
