export function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('UserSignIn'));

  if (user && user.accessToken) {
    return { Authorization: `Bearer ${user.accessToken}` };
  }
  return {};
}
