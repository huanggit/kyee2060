global.apiUrlPrefix = "http://localhost:8888/";


global.get = function(url, handler){
    fetch(global.apiUrlPrefix+url, {credentials: 'include'})
        .then(function(response){
            if(response.status!==200){
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