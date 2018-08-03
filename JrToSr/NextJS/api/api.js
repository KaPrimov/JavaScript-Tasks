import fetch from 'isomorphic-unfetch'

export const apiCall = (link) =>
  fetch(link).then(response => response.json())