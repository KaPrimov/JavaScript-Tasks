import { get, post, deleteItem } from './requester'

function loadAllCommentsInPost(postId, callback) {
    let endpoint = `comments?query={"postId":"${postId}"}`;

    get('appdata', endpoint, 'kinvey')
        .then(callback)
}

function createComment(author, content, postId, callback) {
    let commentData = {
        author,
        content,
        postId
    };

    post('appdata', 'comments', 'kinvey', commentData)
        .then(callback)
}

function deleteComment(commentId, callback) {
    deleteItem('appdata', 'comments', commentId, 'kinvey')
        .then(callback)
}

export { loadAllCommentsInPost, createComment, deleteComment } 
