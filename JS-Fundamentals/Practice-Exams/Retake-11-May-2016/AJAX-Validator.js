function ajaxValidator(input) {

    let hash = input.pop().split('');
    
    function validateToken(hash, token) {
        for (let i = 0; i < hash.length; i+=2) {
            let neededOccurrences = Number(hash[i]);
            let neededCharacter = hash[i+1];

             if((token.match(new RegExp(neededCharacter, "g")) || []).length == neededOccurrences) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < input.length; i+=3) {

        let methodPattern = /^Method: (GET|POST|PUT|DELETE)$/g;
        let credentialsPattern = /^Credentials: (Basic|Bearer) ([a-zA-Z0-9]+)$/g;
        let contentPattern = /^Content: [a-zA-Z0-9.]+$/g;

        let methodMatch = methodPattern.exec(input[i]);
        let credentialsMatch = credentialsPattern.exec(input[i+1]);
        let contentMatch = contentPattern.exec(input[i+2]);

        let resultResponse = '';

        if (methodMatch && credentialsMatch && contentMatch) {

            let method = methodMatch[1];

            let authenticationType = credentialsMatch[1];
            let authenticationToken = credentialsMatch[2];

            resultResponse = `Response-Method:${method}`;
            switch (method) {
                case 'GET':
                     resultResponse += `&Code:200&Header:${authenticationToken}`;
                    break;
                case 'POST':
                case 'PUT':
                case 'DELETE':
                    if(authenticationType == 'Basic') {
                        resultResponse +=`&Code:401`;
                    } else {
                        resultResponse += `&Code:200&Header:${authenticationToken}`;
                    }
                    break;
            }

            if(!validateToken(hash, authenticationToken) && resultResponse.indexOf('Header') > 1) {
                resultResponse = `Response-Method:${method}&Code:403`
            }

        } else {
            resultResponse = 'Response-Code:400';
        }

        console.log(resultResponse);
    }
}