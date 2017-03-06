
global.get = function(url, handler){
    fetch(global.restUrl+url, {credentials: 'include'})
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