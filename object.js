// Context + Canvas
var svgContainer = document.getElementById("SVG");

//buttons
var clearButton = document.getElementById("clearButton");

//master variables

//svgContainer.appendChild(c1);

//temp variables
var OGfillStyle = "#000000";


var clear = function(){
    svgContainer.innerHTML = "";
};

var createCircle = function(x,y,r,fillColor){
    var circle = {
        svgElement : document.createElementNS("http://www.w3.org/2000/svg", "circle"),
        xCor : x,
        yCor : y,
        radius : r,
        fill : fillColor,
        changeColor : function(e){
            if (this.getAttribute("fill") == "black"){
                console.log("changing color of circle at x:" + this.getAttribute("cx") + " y:" + this.getAttribute("cy"));
                this.setAttribute("fill", "red");
                this.addEventListener("click", circle.remove, true);
            }
            else{
                this.removeEventListener("click", this.changeColor, true);
                console.log("removing changeColor eventListener of circle at x:" + this.getAttribute("cx") + " y:" + this.getAttribute("cy"));
                console.log("REMOVE SHOULD HAPPEN NEXT");
            }
            e.stopPropagation();
        },
        remove : function(e){
            console.log("removing circle at x:" + x + " y:" + y);
            randomX = Math.floor(svgContainer.getAttribute("width") * Math.random());
            randomY = Math.floor(svgContainer.getAttribute("height") * Math.random());
            var circle2 = createCircle(randomX, randomY, 10, "black");
            this.remove();
        },

        display : function(){
            this.svgElement.setAttribute("cx", this.xCor);
            this.svgElement.setAttribute("cy", this.yCor);
            this.svgElement.setAttribute("r", this.radius);
            this.svgElement.setAttribute("fill", this.fill);
            this.svgElement.addEventListener("click", this.changeColor, true);
            console.log("displaying circle at x:" + x + " y:" + y);
            svgContainer.appendChild(this.svgElement);
        }
    };
    circle.display();
};

var drawCircle = function(e){
    createCircle(e.offsetX, e.offsetY,10,"black");
};

clearButton.addEventListener("click", clear);
svgContainer.addEventListener("click", drawCircle);