function trans()
{
	document.getElementById('function').style.transform = "translate(-100%,80%) scale(0.25,0.25)"
	document.getElementsByClassName('intro')[0].style.display = 'none'
	document.getElementsByClassName('store')[0].style.display = 'block'
	setTimeout(function(){document.getElementsByClassName('page')[0].style.display = 'block';
	setTimeout(function(){document.getElementsByClassName('math')[0].style.display ='block';
	setTimeout(function(){document.getElementsByClassName('physics')[0].style.display = 'block'},1500)},1500)},1500)	
	document.getElementById('function').onclick=function(){trans1()};
}

function trans1()
{
	document.getElementById('function').style.transform = "translate(0,0) scale(1,1)"
	document.getElementsByClassName('intro')[0].style.display = 'block'
	document.getElementsByClassName('show')[0].style.display = 'none'
	document.getElementById('function').onclick='trans()';
}