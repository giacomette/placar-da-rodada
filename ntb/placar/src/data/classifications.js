import { get } from "./fetcher";

function classifications() {
  return get("public", "/classifications");
}

export { classifications };