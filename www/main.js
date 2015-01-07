function displayMessages(){
	names		=	[ 'Ramanujan','Euler', 'Conway', 'Leibniz','Grime'];
	for (var i = names.length - 1; i >= 0; i--) {
		document.write('<div class="container" layout vertical center>'+
						'<paper-button raised class=newMessage style="margin-top:'+(i*210)+'px">'+
							'<post-card onClick="window.location.href = \'guessEmoji.html\';">'+
								'<img width="70" height="70" src="images/avatar-0'+(i+1)+'.svg">'+
							'<h2>'+names[i]+'</h2>'+
						'</paper-button></post-card></div>'
						);
	};
	document.write('<p style="text-align:center;margin-top:'+(names.length*210 + 50)+';">That\'s all she wrote.</p>');
};


window.onload =  displayMessages();