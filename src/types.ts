interface StrictTransportSecurity {
	/** The max-age of the Strict-Transport-Security header. */
	age: number

	/** Whether to include subdomains. */
	subdomains?: boolean

	/** Whether to preload the site. */
	preload?: boolean
}

type HTTPMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH"

interface PermissionsPolicy {
	/** The camera permissions. */
	camera?: string[] | "*"

	/** The microphone permissions. */
	microphone?: string[] | "*"

	/** The geolocation permissions. */
	geolocation?: string[] | "*"

	/** The fullscreen permissions. */
	fullscreen?: string[] | "*"

	/** The display-capture permissions. */
	"display-capture"?: string[] | "*"

	/** The web-share permissions. */
	"web-share"?: string[] | "*"

	/** The accelerometer permissions.
	 *
	 * @remarks Experimental API.
	 */
	accelerometer?: string[] | "*"

	/** The gyroscope permissions.
	 *
	 * @remarks Experimental API.
	 */
	gyroscope?: string[] | "*"

	/** The magnetometer permissions.
	 *
	 * @remarks Experimental API.
	 */
	magnetometer?: string[] | "*"

	/** The payment permissions.
	 *
	 * @remarks Experimental API.
	 */
	payment?: string[] | "*"

	/** The usb permissions.
	 *
	 * @remarks Experimental API.
	 */
	usb?: string[] | "*"

	/** The autoplay permissions.
	 *
	 * @remarks Experimental API.
	 */
	autoplay?: string[] | "*"

	/** The speaker permissions.
	 *
	 * @remarks Experimental API.
	 */
	"speaker-selection"?: string[] | "*"

	/** The midi permissions.
	 *
	 * @remarks Experimental API.
	 */
	midi?: string[] | "*"

	/** The ambient-light-sensor permissions.
	 *
	 * @remarks Experimental API.
	 */
	"ambient-light-sensor"?: string[] | "*"

	/** The battery permissions.
	 *
	 * @remarks Experimental API.
	 */
	battery?: string[] | "*"

	/** The document-domain permissions.
	 *
	 * @remarks Experimental API.
	 */
	"document-domain"?: string[] | "*"

	/** The encrypted-media permissions.
	 *
	 * @remarks Experimental API.
	 */
	"encrypted-media"?: string[] | "*"

	/** The execution-while-not-rendered permissions.
	 *
	 * @remarks Experimental API.
	 */
	"execution-while-not-rendered"?: string[] | "*"

	/** The execution-while-out-of-viewport permissions.
	 *
	 * @remarks Experimental API.
	 */
	"execution-while-out-of-viewport"?: string[] | "*"

	/** The gamepad permissions.
	 *
	 * @remarks Experimental API.
	 */
	gamepad?: string[] | "*"

	/** The hid permissions.
	 *
	 * @remarks Experimental API.
	 */
	hid?: string[] | "*"

	/** The idle-detection permissions.
	 *
	 * @remarks Experimental API.
	 */
	"idle-detection"?: string[] | "*"

	/** The local-fonts permissions.
	 *
	 * @remarks Experimental API.
	 */
	"local-fonts"?: string[] | "*"

	/** The picture-in-picture permissions.
	 *
	 * @remarks Experimental API.
	 */
	"picture-in-picture"?: string[] | "*"

	/** The publickey-credentials-get permissions.
	 *
	 * @remarks Experimental API.
	 */
	"publickey-credentials-get"?: string[] | "*"

	/** The screen-wake-lock permissions.
	 *
	 * @remarks Experimental API.
	 */
	"screen-wake-lock"?: string[] | "*"

	/** The serial permissions.
	 *
	 * @remarks Experimental API.
	 */
	serial?: string[] | "*"

	/** The xr-spatial-tracking permissions.
	 *
	 * @remarks Experimental API.
	 */
	"xr-spatial-tracking"?: string[] | "*"
}

export interface SecurityHeaders {
	/**
	 * The Referrer-Policy header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
	 *
	 * @defaultValue no-referrer
	 *
	 */
	"Referrer-Policy"?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url"
		| "off"

	/**
	 * The Strict-Transport-Security header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
	 *
	 * @defaultValue
	 * - `age`: 31536000
	 * - `subdomains`: true
	 *
	 */
	"Strict-Transport-Security"?: StrictTransportSecurity | "off"

	/**
	 * The X-Content-Type-Options header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
	 *
	 * @defaultValue nosniff
	 *
	 */
	"X-Content-Type-Options"?: "nosniff" | "off"

	/**
	 * The X-Frame-Options header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
	 *
	 * @defaultValue SAMEORIGIN
	 */
	"X-Frame-Options"?: "DENY" | "SAMEORIGIN" | "off"

	/**
	 * The Cross-Origin-Embedder-Policy header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)
	 *
	 * @defaultValue require-corp
	 *
	 */
	"Cross-Origin-Embedder-Policy"?: "require-corp" | "unsafe-none" | "credentialless" | "off"

	/**
	 * The Cross-Origin-Opener-Policy header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
	 *
	 * @defaultValue same-origin
	 *
	 */
	"Cross-Origin-Opener-Policy"?:
		| "same-origin"
		| "same-origin-allow-popups"
		| "unsafe-none"
		| "off"

	/**
	 * The Cross-Origin-Resource-Policy header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy)
	 *
	 * @defaultValue same-origin
	 *
	 */
	"Cross-Origin-Resource-Policy"?: "same-site" | "same-origin" | "cross-origin" | "off"

	/**
	 * The Permissions-Policy header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)
	 *
	 */
	"Permissions-Policy"?: PermissionsPolicy | "off"

	/**
	 * The Origin-Agent-Cluster header. [Web.dev](https://web.dev/origin-agent-cluster/)
	 *
	 * @defaultValue ?1
	 */
	"Origin-Agent-Cluster"?: "?1" | "off"

	/**
	 * The X-Permitted-Cross-Domain-Policies. [read more]()
	 *
	 */
	"X-Permitted-Cross-Domain-Policies"?:
		| "none"
		| "master-only"
		| "by-content-type"
		| "by-ftp-filename"
		| "all"
		| "off"

	/**
	 * The Clear-Site-Data header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data)
	 *
	 *
	 */
	"Clear-Site-Data"?: "cache" | "cookies" | "storage" | "executionContexts" | "*" | "off"

	/**
	 * The X-XSS-Protection header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
	 *
	 *
	 */
	"X-XSS-Protection"?: string | "off"

	/**
	 * The X-Powered-By header.
	 *
	 *
	 */
	"X-Powered-By"?: string | "off"

	/**
	 * Access-Control-Allow-Origin header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
	 *
	 * @defaultValue *
	 *
	 */
	"Access-Control-Allow-Origin"?: string | "*" | "null" | (string | RegExp)[] | "off"

	/**
	 * Access-Control-Allow-Methods header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods)
	 */
	"Access-Control-Allow-Methods"?: HTTPMethod[] | "*" | "off"

	/**
	 * Access-Control-Allow-Headers header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)
	 */
	"Access-Control-Allow-Headers"?: string[] | "*" | "off"

	/**
	 * Access-Control-Allow-Credentials header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)
	 */
	"Access-Control-Allow-Credentials"?: boolean | "off"

	/**
	 * Access-Control-Max-Age header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age)
	 */
	"Access-Control-Max-Age"?: number | "off"

	/**
	 * Access-Control-Expose-Headers header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)
	 */
	"Access-Control-Expose-Headers"?: string[] | "*" | "off"

	/**
	 * Preflight request. [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
	 */
	preflight?: number | "off"

	/**
	 * Access-Control-Request-Headers header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers)
	 */
	"Access-Control-Request-Headers"?: string[] | "off"

	/**
	 * Access-Control-Request-Methods header. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method)
	 */
	"Access-Control-Request-Methods"?: string | "off"
}

export interface SecurityOptions {
	/** The security headers to set.*/
	headers?: SecurityHeaders

	routes?: {
		[key: string]: {
			headers?: SecurityHeaders
		}
	}
}
