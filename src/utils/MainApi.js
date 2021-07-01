const MAIN_API_URL = ' https://api.mymovieplases.nomoredomains.icu';

export const handlerErrorApi = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const authorize = (password, email) => {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password: password, email: email })
  })
  .then(handlerErrorApi);
};

export const register = (name, password, email) => {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, password: password, email: email })
  })
    .then(handlerErrorApi);
};

export const checkToken = (token) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    }
  })
    .then(handlerErrorApi);
};

export const updateMe = (token, name, email) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify({ name: name, email: email })
  })
    .then(handlerErrorApi);
};

export const getUserInfo = (token) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    }
  })
    .then(handlerErrorApi);
};

export const getSavedMovies = (token) => {
  return fetch(`${MAIN_API_URL}/movies`, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    }
  })
    .then(handlerErrorApi);
};

export const saveMovie = (token, movie) => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify({ ...movie })
  })
    .then(handlerErrorApi);
};

export const deleteMovie = (token, movieId) => {
  return fetch(`${MAIN_API_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    }
  })
    .then(handlerErrorApi);
};