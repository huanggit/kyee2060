
global.get = function(url, handler){
    fetch(global.restUrl+url, {credentials: 'include'})
        .then(function(response){
            if(response.status!==200){
                console.log("response status:"+response.status);
                return;
            }
            response.json().then(function(data){
                handler(data)
            });
        })
        .catch(function(err){
            console.log("Fetch错误:"+err);
        });
};

global.syncGet = function (url, handler) {
    var request = new XMLHttpRequest();
    request.open('GET', global.restUrl+url, false);
    request.send(null);
    if (request.status === 200) {
        handler(request.responseText);
    }else {
        console.log("response status:"+request.status);
    }
}