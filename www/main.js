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


  var scope = document.querySelector('template[is=auto-binding]');

  scope.toggleDialog1 = function(e) {
    if (e.target.localName != 'button') {
      return;
    }
    var d = e.target.nextElementSibling;
    if (!d) {
      return;
    }
    d.toggle();
  };

  scope.transitions = [
    'core-transition-center',
    'core-transition-top',
    'core-transition-bottom',
    'core-transition-left',
    'core-transition-right'
  ];

  scope.toggleDialog2 = function(e) {
    if (e.target.localName != 'button') {
      return;
    }
    scope.transition = e.target.getAttribute('transition');
    document.getElementById('dialog2').toggle();
  };