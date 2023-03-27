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

const routes = [
	{ path: '/', status: 200 },
	{ path: '/home', status: 200 },
	{ path: '/general-components', status: 200 },
	{ path: '/general-components/xyz', status: 200 },
	{ path: '/general-components/notification-banner', status: 200 },
	{ path: '/form-components', status: 200 },
	{ path: '/form-components/search-form', status: 200 },
	{ path: '/feedback', status: 200 },
	{ path: '/error', status: 404 },
]

describe('Hitting all routes returns correct status', () => {
	for (const r of routes) {
		it(r.path, () => testForStatus(r.path, r.status))
	}
})
