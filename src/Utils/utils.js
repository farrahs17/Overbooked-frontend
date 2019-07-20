function saveToken(key, token) {
  return localStorage.setItem(key, token);
}

function getToken() {
  return localStorage.getItem("token");
}

function clearToken() {
  return localStorage.removeItem("token");
}

export { saveToken, getToken, clearToken };
