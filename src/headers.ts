import type { SecurityHeaders, SecurityOptions } from "./types.js"

export const DEFAULT_HEADERS: SecurityHeaders = {
	"Referrer-Policy": "no-referrer",
	"X-Frame-Options": "SAMEORIGIN",
	"X-Content-Type-Options": "nosniff",
	"Cross-Origin-Embedder-Policy": "require-corp",
	"Cross-Origin-Opener-Policy": "same-origin",
	"Cross-Origin-Resource-Policy": "same-origin",
	"Origin-Agent-Cluster": "?1",
	"Strict-Transport-Security": {
		age: 31536000,
		subdomains: true,
	},
}

/**
 * A help function to resolve headers
 *
 * @param name - The name of the header.
 *
 * @param value - The value of the header.
 *
 * @returns The resolved header.
 */
function headers_resolver(name: string, value: string | Record<string, unknown>): string {
	if (name === "Strict-Transport-Security" && typeof value === "object") {
		return [
			`max-age=${value.age}`,
			value.subdomains ? "includeSubDomains" : "",
			value.preload ? "preload" : "",
		]
			.filter(Boolean)
			.join("; ")
	}

	if (name === "Permissions-Policy") {
		return Object.entries(value as Record<string, string[] | string>)
			.map(([permission, values]) => {
				if (typeof values === "string" && values === "*") {
					return `${permission}=*`
				} else {
					const formattedValues: string =
						(values as string[]).length > 1
							? (values as string[])
									.map((val) => (val === "self" ? val : `"${val}"`))
									.join(" ")
							: (values as string[]).length > 0
							  ? values[0]
							  : ""
					return `${permission}=(${formattedValues})`
				}
			})
			.join(", ")
	}

	return value as string
}

/**
 * Set the security headers.
 *
 * @param path - The path of the request.
 *
 * @param response - The response object.
 *
 * @param options - The security options.
 *
 */
export function security_headers(path: string, response: Response, options: SecurityOptions) {
	const { headers = {}, routes = {} } = options

	response.headers.delete("x-sveltekit-page")

	// Global headers
	for (const [header, value] of Object.entries(headers)) {
		let _value = value

		_value = headers_resolver(header, value as string | Record<string, unknown>)

		if (_value === "off") response.headers.delete(header)
		else response.headers.set(header, _value as string)
	}

	// Route base headers
	for (const [route, policy] of Object.entries(routes)) {
		if (new RegExp(route).test(path)) {
			if (policy?.headers) {
				for (const [header, value] of Object.entries(policy.headers)) {
					let _value = value

					_value = headers_resolver(header, value)
					if (_value === "off") response.headers.delete(header)
					else response.headers.set(header, _value)
				}
			}
		}
	}
}
