/**
 * JSON object shape
 */
export interface JSONObject {
  [x: string]: JSONValue;
}

/**
 * JSON value shape
 */
type JSONValue = string | number | boolean | JSONObject | JSONArray;

/**
 * JSON array shape
 */
interface JSONArray extends Array<JSONValue> {}
