import { json } from "@sveltejs/kit";
import * as fs from "fs";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const address = "./static/images";
  const regexp = new RegExp(".(jpg|jpeg|png|gif)$");

  const files = fs
    .readdirSync(address)
    .filter((file) => regexp.test(file))
    .map((file) => {
      return "./images/" + file;
    });

  return json(files);
}
