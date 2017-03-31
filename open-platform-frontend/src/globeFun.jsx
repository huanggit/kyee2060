import 'whatwg-fetch';

global.get = function(url, handler){
    fetch(global.restUrl+url, {credentials: 'include'})
        .then(function(response){
            if(response.status!==200){
                console.log("response status:"+response.status);
                return;
            }
            response.json().then(function(data){
                if(data.success){
                    handler(data.data)
                }else {
                    alert(data.message);
                }
            });
        })
        .catch(function(err){
            console.log("Fetch错误:"+err);
        });
};

global.syncGet = function (url, handler) {
    try {
        var request = new XMLHttpRequest();
        request.open('GET', global.restUrl+url, false);
        request.withCredentials = true;
        request.send(null);
        if (request.status === 200) {
            handler(request.responseText);
        }else {
            console.log("response status:"+request.status);
        }
    }catch(err){
        console.log("syncGet错误:"+err);
    }
}

global.post = function(url, body, handler){
    fetch(global.restUrl+url, {
        method:"POST",
        body:body,
        credentials: 'include'
    })
    .then(function(response){
        if(response.status!==200){
            console.log("response status:"+response.status);
            return;
        }
        response.json().then(function(data){
            if(data.success){
                handler(data.data)
            }else {
                alert(data.message);
            }
        });
    })
    .catch(function(err){
        console.log("Fetch错误:"+err);
    });
};

global.icons = ['bold','music','plus','glass','cloud','envelope',
                'pencil','search','user','zoom-out','off','plane',
                'signal','home','time','upload','earphone','ok',
                'lock','flag', 'headphones','file','tag','camera',
                'cog','tint','edit','share','leaf','folder-close',
                'comment','fire','bell','phone','flash','magnet'];

global.randomIcons = function () {
    var icons =[];
    var divide = 3;
    for(var i=0;i<12;i++){
        icons.push(global.icons[divide*i+Math.floor(Math.random()*divide)]);
    }
    return icons;
};

