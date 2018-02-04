import { get, post, deleteItem, update } from './requester'

function loadAllPosts(callback) {
    get('appdata', 'posts', 'kinvey')
        .then(callback);
}

function createPost(author, title, url, imageUrl, description, callback) {
    let postObj = {
        author,
        title,
        url,
        imageUrl,
        description
    };

    post('appdata', 'posts', 'kinvey', postObj)
        .then(callback)
}

function editPost(postId, author, title, description, url, imageUrl, callback) {
    let updatedPostObj = {
        author,
        title,
        url,
        imageUrl,
        description
    };

    update('appdata', `posts/${postId}`, updatedPostObj, 'kinvey')
        .then(callback)
}

function deletePost(postId, callback) {
    deleteItem('appdata', 'posts', postId, 'kinvey')
    .then(callback)
}

function loadOwnPosts(username, callback) {
    let endpoint = `posts?query={"author":"${username}"}`;

    get('appdata', endpoint, 'kinvey')
        .then(callback);
}

function loadPostById(postId, callback) {
    let endpoint = `posts/${postId}`;

    get('appdata', endpoint, 'kinvey')
        .then(callback);
}


export { loadAllPosts, loadOwnPosts, loadPostById, createPost, editPost, deletePost }
