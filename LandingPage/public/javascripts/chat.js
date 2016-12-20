function enviar(e){
	if (e.keyCode == 13) {
		var name = document.getElementById("nameInput").value;
		var text = document.getElementById("messageInput").value;

		firebase.database().ref("Chat/").push({name: name, text: text})
	}
}

firebase.database().ref("Chat/").on('child_added', function(snapshot) {
	var message = snapshot.val();
	displayChatMessage(message.name, message.text);
})

function displayChatMessage(name, text) {
    $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
}