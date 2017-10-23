var streamers = [
	'freecodecamp',
	'ESL_SC2',
	'noobs2ninjas',
	'RobotCaleb'
]

function load(){
	streamers.map( function(s){
		$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + s + "?callback=?",function(data){
			if (data.stream == null){
				document.getElementById('results').innerHTML += 
					"<div class='strmr' id='offline'><div id='pic'><img src=" + 'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F'
					+ "></div><h1 id='name'>" + s
					+ "</h1><h1 id='game'>" + "OFFLINE"
					+ "</h1><h1 id='status'>" + "" + "</h1></div>"
			}else{
				document.getElementById('results').innerHTML += 
					"<div class='strmr' id='online'><div id='pic'><img src='" + data.stream.channel.logo
					+ "'></div><h1 id='name'>" + data.stream.channel.display_name
					+ "</h1><h1 id='game'>" + data.stream.channel.game
					+ "</h1><h1 id='status'>" + data.stream.channel.status + "</h1></div>"
			}
		})
	})
}
load()
var list = document.getElementsByTagName('li')

for (i=0; i < list.length; i++){
	list[i].addEventListener('click',function(){
		var id = this.id
		var each = document.getElementsByClassName('strmr')
		
		if (id == 'all'){
			document.getElementById('results').innerHTML = ""
			load()
		}
		else{
			for (i=0; i < each.length; i++){
				if (each[i].id != id){
					each[i].style.display = 'none';
				}
				else{
					each[i].style.display = 'flex'
				}
			}
		}

		for (i=0; i < list.length; i++){
			list[i].classList.remove('selected')
		}
		this.classList.add('selected')

	})
}

