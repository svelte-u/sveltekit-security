import { DEFAULT_HEADERS, security_headers } from "./headers.js"

import type { SecurityHeaders, SecurityOptions } from "./types.js"
import type { Handle } from "@sveltejs/kit"

/**
 * Create a security hook.
 *
 * @param options - The security options.
 * - `headers` - The security headers to set.
 * - `routes` - Set a specific rule for a route.
 *
 * @returns The security hook.
 */
export function rules(options: SecurityOptions = {}) {
	const { headers = {}, routes = {} } = options

	for (const [header, value] of Object.entries(headers)) {
		const _header = header as keyof SecurityHeaders

		DEFAULT_HEADERS[_header] = value
	}

	const security: Handle = async ({ event, resolve }) => {
		const response = await resolve(event)

		for (const [header, value] of Object.entries(DEFAULT_HEADERS)) {
			security_headers(event.url.pathname, response, {
				headers: {
					[header]: value,
				},
				routes,
			})
		}

		return response
	}

	return security
}
