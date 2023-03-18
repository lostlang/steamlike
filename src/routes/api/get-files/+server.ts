import { json } from "@sveltejs/kit";
import * as fs from "fs";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const address = "./static/images";

	const files = fs.readdirSync(address).map((file) => {
		return "./images/" + file;
	});

	return json(files);
}
