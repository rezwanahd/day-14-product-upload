/**
 *  Data send to local storage
 * @param {*} key
 * @param {*} value
 */
function set_data(key, value) {
  let convert_to_jason = JSON.stringify(value);
  localStorage.setItem(key, convert_to_jason);
}

/**
 * Data get from local server
 * @param {*} key
 */
function get_data(key) {
  let get_data = localStorage.getItem(key);
  return get_data ? JSON.parse(get_data) : false;
}
