import path from "path"
import { fileURLToPath as file_url_to_path } from "url"

import fg from "fast-glob"
import fs from "fs-extra"

const current_path = path.dirname(file_url_to_path(import.meta.url))

export const DIR_ROOT = path.resolve(current_path, "../")

export async function clear() {
	const files = await fg(["*.js", "*.d.ts"], {
		cwd: DIR_ROOT,
		ignore: ["_*", "dist", "node_modules"],
	})

	for (const file of files) {
		const filepath = path.join(DIR_ROOT, file)
		await fs.remove(filepath)
	}
}
