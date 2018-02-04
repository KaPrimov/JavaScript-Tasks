import $ from 'jquery';

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_S1Rth7R0-";
const kinveyAppSecret = "d1ab2df4eaf346ef833ac7c9f2f52315";

function makeAuth(type) {
  switch (type) {
    case 'basic':
      return { 'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret) };
    case 'kinvey':
      return { 'Authorization': "Kinvey " + sessionStorage.getItem('authToken') };
    default: break;
  }
}

function get(module, uri, auth) {
  const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
  const kinveyAuthHeaders = makeAuth(auth);

  return $.ajax({
    method: "GET",
    url: kinveyLoginUrl,
    headers: kinveyAuthHeaders
  });
}

function post(module, uri, auth, data) {
  console.log(auth)
  const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
  const kinveyAuthHeaders = makeAuth(auth);
  let request = {
    method: "POST",
    url: kinveyLoginUrl,
    headers: kinveyAuthHeaders
  };

  if (data !== null) {
    request.data = data;
  }
  return $.ajax(request);
}

function update(module, uri, data, auth) {
  const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
  const kinveyAuthHeaders = makeAuth(auth);

  let request = {
    method: "PUT",
    url: kinveyLoginUrl,
    headers: kinveyAuthHeaders,
    data: data
  };

  return $.ajax(request);
}
function deleteItem(module, uri, id, auth) {
  console.log(module)
  console.log(uri)
  console.log(id)
  const kinveyDeleteUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri + '/' + id;
  const kinveyAuthHeaders = makeAuth(auth);

  let request = {
    method: "DELETE",
    url: kinveyDeleteUrl,
    headers: kinveyAuthHeaders
  };

  return $.ajax(request);
}


export { get, post, update, deleteItem };
