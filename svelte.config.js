import adapter from '@sveltejs/adapter-auto'
import importAssets from 'svelte-preprocess-import-assets'
import path from 'path'

export default {
	kit: {
		adapter: adapter(),
		alias: {
			$routes: path.resolve('./src/routes'),
			$govuk: path.resolve('./src/lib/govuk'),
			$shared: path.resolve('./src/lib/shared'),
			$data: path.resolve('./src/lib/data'),
		},
	},
	preprocess: [importAssets()],
}
