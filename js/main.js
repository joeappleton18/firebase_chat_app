var database = firebase.database();
var ref =   firebase.database().ref('messages/');

function sendMessage() {  
      
    var comment = document.getElementById('comment').value;
     ref.push({
                message: comment
      });
}

ref.on('value', function(snapshot) {
    let messages = ''
    snapshot.forEach(function(msg) {
        messages = messages +  '<p>' + msg.val().message  + '</p>'
    })
    
    document.getElementById('messages').innerHTML = messages;
    
});