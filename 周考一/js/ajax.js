function obj(obj) {
    var str = ''
    for (var key in obj) {
        str += key + '=' + obj[key] + '&'
    }
    return str.substr(0,str.length-1)
}

function ajax(method, url, data, callback) {
    var xhr = new XMLHttpRequest();
    if (method === 'get') {
        url += '?' + obj(data)
    }
    xhr.open(method, url, true);
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 ) {
                callback && callback(xhr.responseText);
            } else {
                console.log("Request was unsuccessful:" + xhr.status);
            }
        }
    }
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    var postData = method === 'post' ? data : null;
    xhr.send(postData);
}