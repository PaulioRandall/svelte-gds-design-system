const URL = (path) => `http://localhost:4000${path}`

const testForStatus = (path, status) =>
	cy
		.request({
			url: URL(path),
			failOnStatusCode: false,
		})
		.then((res) => {
			expect(res.status).equal(status)
		})

const topLevelPages = [
	'/',
	'/home',
	'/feedback',
	'/general-components',
	'/form-components',
]

const generalDocsPages = [
	'breadcrumbs',
	'details',
	'heading',
	'inset-text',
	'list',
	'notification-banner',
	'panel',
	'paragraph',
	'table',
	'tag',
	'warning-text',
]

const formDocsPages = [
	'button',
	'button-group',
	'checkboxes',
	'date-input',
	'date-unit',
	'error-summary',
	'radio-group',
	'select',
	'start-button',
	'text-input',
	'textarea',
]

describe('200 status returned when visiting top level pages', () => {
	for (const path of topLevelPages) {
		it(path, () => testForStatus(path, 200))
	}
})

describe('200 status returned when visiting general component documentation pages', () => {
	for (const pageName of generalDocsPages) {
		const url = `/general-components/${pageName}`
		it(url, () => testForStatus(url, 200))
	}
})

describe('200 status returned when visiting form component documentation pages', () => {
	for (const pageName of formDocsPages) {
		const url = `/form-components/${pageName}`
		it(url, () => testForStatus(url, 200))
	}
})

describe('404 (and not 500) status returned when visiting an unknown page', () => {
	const path = '/error'
	it(path, () => testForStatus(path, 404))
})
