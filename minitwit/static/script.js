function uploadFile(file){

    var fd = new FormData();
    fd.append("image", file); // Append the file

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.imgur.com/3/image');
    xhr.setRequestHeader('Authorization', 'Client-ID 39f055eace08d53');
    xhr.onreadystatechange = function(){
        console.log('Request status: ' + xhr.status);
        console.log('Request readystate: ' + xhr.readyState);
        
        if(xhr.status === 200 && xhr.readyState === 4){
            var imgurResponse = JSON.parse(xhr.responseText);
            console.log(imgurResponse);
            document.getElementById('messagetext').value = document.getElementById('messagetext').value + ' ' + imgurResponse.data.link;
            return;
        }
    }
    xhr.onerror = function(){
        console.log('Error:');
        console.log(xhr.error);
    }

    xhr.send(fd);
}
