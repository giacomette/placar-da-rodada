import { get } from "./fetcher";

function games() {
  return get("public", "/games");
}

export { games };