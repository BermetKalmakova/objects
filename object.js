var canvas = document.getElementById("svg");

var create = function(x,y){
    var circle = {
	xcor: x,
	ycor: y,
	radius: 10,
	color: "green",
	click: False,
	svgelement:,
	display: function(){
	    svg = document.createElementNS('http://www.w3.org/2000/svg','circle');
	    this.svgelement.setAttribute('cx',this.xcor);
	    this.svgelement.setAttribute('cy',this.ycor);
	    this.svgelement.setAttribute('r',this.radius);
	    this.svgelement.setAttribute('fill',this.color);
	    this.svgelement.addEventListener('click',this.change);
	    canvas.appendChild(this);
	},
	remove: function(){
	    canvas.removeChild(this);
	    create(Math.random()*500, Math.random()*500);
	},
	change: function(){
	    if(this.click == False){
		svgelement.setAttribute('fill',"red");
	    }
	    else{
		this.remove();
	    }
	    
	}
    }
    circle.display();
}

	
canvas.addEventListener('click', create(100,100));	
