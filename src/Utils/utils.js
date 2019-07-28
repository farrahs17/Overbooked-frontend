function saveToken(key, token) {
  return localStorage.setItem(key, token);
}

function getToken() {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return undefined;
}

function clearToken() {
  return localStorage.removeItem("token");
}

export { saveToken, getToken, clearToken };
