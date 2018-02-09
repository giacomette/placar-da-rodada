/**
 * @flow
 */

import { stringify } from "querystring";
import _ from "lodash";

const BASE_URL = "http://localhost:3000/v1";

function generateUrl(uri, params) {
let queryString = Object.keys(params).length ? "?" + stringify(params) : "";
  return BASE_URL + uri + queryString;
}

async function get(type = "private", uri = "/", params = {}) {
  const headers = new Headers();

  if (type === "private") {
    headers.append("Authorization", await localStorage.getItem("token"));
  }

  return fetch(generateUrl(uri, params), {
    headers: headers,
    cache: "no-store"
  });
}

async function post(type = "private", uri = "/", body = {}, params = {}) {
  const headers = new Headers();

  if (type === "private") {
    headers.append("Authorization", await localStorage.getItem("token"));
  }

  let method = "POST";

  if (body.hasOwnProperty("_method")) {
    method = body._method;
    delete body._method;
  }

  headers.append("X-Requested-With", "XMLHttpRequest");

  var data = new FormData();
  Object.keys(body).forEach(key => {
    var value = body[key];
    if (_.isArray(value)) {
      value.forEach(row => {
        data.append(`${key}[]`, row);
      });
      return;
    }
    data.append(key, value);
  });

  return fetch(generateUrl(uri, params), {
    method: method,
    body: data,
    headers: headers,
    cache: "no-store"
  });
}

export { get, post };