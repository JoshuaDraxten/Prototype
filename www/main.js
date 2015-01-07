function pushMessages(){
	names		=	[ 'Srinivasa Ramanujan','Albert Einstien', 'John Conway', 'Gottfried Leibniz','Niccola Tesla'];
	for (var i = names.length - 1; i >= 0; i--) {
		document.write('<div class="container" layout vertical center><paper-button raised style="margin-top:'+(i*210)+'px"><post-card><img width="70" height="70" src="images/avatar-0'+(i+1)+'.svg"><h2>'+names[i]+'</h2></paper-button></post-card></div>');
	};
};

window.onload = pushMessages();