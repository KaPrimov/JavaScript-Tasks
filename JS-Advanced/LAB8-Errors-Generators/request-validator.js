function validateRequest(obj) {
    let method = obj.method;
    let uri = obj.uri;
    let version = obj.version;
    let message = obj.message;

    if(method != 'GET' && method != 'POST' && method!= 'DELETE' && method != 'CONNECT') {
        throw  new Error('Invalid request header: Invalid Method')
    }
    let uriRegex = /^([A-Za-z.0-9]+)$/g;

    if(!uriRegex.test(uri) || uri === undefined) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if (version != 'HTTP/0.9' && version != 'HTTP/1.0' && version != 'HTTP/1.1' && version!= 'HTTP/2.0' ) {
        throw new Error('Invalid request header: Invalid Version')
    }

    let messageRegex = /^[^><\\&'"]*$/g;

    if(!messageRegex.test(message) || message === undefined) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return obj;

}

validateRequest({
    method: 'GET',
    uri: 'obj.method',
    version: 'HTTP/1.1',
    message: '-recursive'
});
