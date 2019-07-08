function saveToken(key, token) {
  localStorage.setItem(key, token);
}

function getToken() {
  return localStorage.getItem("token");
}

function clearToken(key) {
  localStorage.removeItem(key);
}

export { saveToken, getToken, clearToken };
