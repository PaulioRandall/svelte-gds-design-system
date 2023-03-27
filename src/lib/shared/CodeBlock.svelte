<script>
	export let lines = ['']
</script>

<pre class="code-block"><code><slot>{lines.join('\n')}</slot></code></pre>

<style>
	.code-block {
		display: block;
		tab-size: 2;
		font-size: 14px;
	}
</style>
