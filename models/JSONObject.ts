export interface JSONObject {
  [x: string]: JSONValue;
}

type JSONValue = string | number | boolean | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {}
