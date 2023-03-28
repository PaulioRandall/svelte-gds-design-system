<script>
	import ButtonGroup from '$govuk/forms/ButtonGroup.svelte'
	import Button from '$govuk/forms/Button.svelte'
	import Heading from '$govuk/Heading.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'

	export let id // = ""
	export let heading // = ""
	export let code_lines // = [""]
</script>

<Heading id="{id}" h3 md>{heading}</Heading>
<slot />
<CodeBlock lines="{code_lines}" />
