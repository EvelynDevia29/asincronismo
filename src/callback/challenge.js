let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhtpp = new XMLHttpRequest();
    XMLHttpRequest.open('GET'.url_api, true);
    xhtpp.onreadystatechange = function (event) {
        if (xhtpp.readyState === 4) {
            if (xhtpp.status === 200) {
                callback(null, JSON.parse(xhtpp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error,null);
            }

        }

    }
    xhtpp.send();
}















