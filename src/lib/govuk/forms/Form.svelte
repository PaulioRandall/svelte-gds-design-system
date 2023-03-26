<script>
	export let name = undefined // = ""

	export let GET = undefined // = ""
	export let POST = undefined // = ""

	export let accept_charset = undefined // = ""
	export let novalidate = false
	// export let autocomplete // = false

	/* enctype - one and only one
		export let urlencoded = false
		export let multipart = false
		export let plain_text = false
	*/

	export let target = '_self'
	const targets = ['_self', '_blank', '_parent', '_top']

	if (!GET && !POST) {
		throw new Error('A form must have a GET or POST destination url')
	}

	if (GET && POST) {
		throw new Error('A form cannot have both GET and POST destination urls')
	}

	const method = GET ? 'GET' : 'POST'
	const action = GET ? GET : POST

	if (!targets.include(target)) {
		const targetList = targets.join(', ')
		throw new Error(
			`A form must use one of the following targets [${targetList}] '_self' is the default`
		)
	}

	// TODO: Consider having multiple form types:
	//       - SearchForm
	//       - SecureForm (POST only and requires security props)
</script>

<form
	name="{name}"
	method="{method}"
	action="{action}"
	accept_charset="{accept_charset}"
	novalidate="{novalidate}">
	<slot />
</form>
