import { get } from "./fetcher";

function teams() {
  return get("public", "/teams");
}

export { teams };