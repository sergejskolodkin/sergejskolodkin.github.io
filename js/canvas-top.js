var c = document.getElementById("Canvas-top");
var ctx = c.getContext("2d");   
function draw(){
    var canvasattrwidth = $('#Canvas-top').attr('width');
    var canvasrealwidth = $('#Canvas-top').width();
    // n sets the line width
    var n = 4;
    var widthStroke = n * (canvasattrwidth / canvasrealwidth) ;
    ctx.lineWidth = widthStroke;
    ctx.shadowColor ="rgba(0,0,0,0)";
       ctx.strokeStyle ="rgba(56, 122, 162)";
       ctx.lineWidth = 1;
       ctx.lineCap = "butt";
       ctx.lineJoin = "miter";
       ctx.beginPath();
       ctx.moveTo(150,242);
       ctx.lineTo(150,122);
       ctx.stroke();

       //Shape1;
       ctx.shadowColor ="rgba(0,0,0,0)";
       ctx.strokeStyle ="rgba(56, 122, 162)";
       ctx.lineWidth = 1;
       ctx.lineCap = "butt";
       ctx.lineJoin = "miter";
       ctx.beginPath();
       ctx.moveTo(150,122);
       ctx.lineTo(350,122);
       ctx.stroke();

       //Shape2;
       ctx.shadowColor ="rgba(0,0,0,0)";
       ctx.strokeStyle ="rgba(56, 122, 162)";
       ctx.lineWidth = 1;
       ctx.lineCap = "butt";
       ctx.lineJoin = "miter";
       ctx.beginPath();
       ctx.moveTo(350,122);
       ctx.lineTo(350,300);
       ctx.stroke();

       //Shape3;
       ctx.shadowColor ="rgba(0,0,0,0)";
       ctx.strokeStyle ="rgba(56, 122, 162)";
       ctx.lineWidth = 1;
       ctx.lineCap = "butt";
       ctx.lineJoin = "miter";
       ctx.beginPath();
       ctx.moveTo(350,300);
       ctx.lineTo(750,300);
       ctx.stroke();

       //Shape4;
       ctx.shadowColor ="rgba(0,0,0,0)";
       ctx.strokeStyle ="rgba(56, 122, 162)";
       ctx.lineWidth = 1;
       ctx.lineCap = "butt";
       ctx.lineJoin = "miter";
       ctx.beginPath();
       ctx.moveTo(180,242);
       ctx.lineTo(180,182);
       ctx.stroke();

       //Shape5;
       ctx.shadowColor ="rgba(0,0,0,0)";
       ctx.strokeStyle ="rgba(56, 122, 162)";
       ctx.lineWidth = 1;
       ctx.lineCap = "butt";
       ctx.lineJoin = "miter";
       ctx.beginPath();
       ctx.moveTo(180,182);
       ctx.lineTo(310,182);
       ctx.stroke();

       //Shape6;
       ctx.shadowColor ="rgba(0,0,0,0)";
       ctx.strokeStyle ="rgba(56, 122, 162)";
       ctx.lineWidth = 1;
       ctx.lineCap = "butt";
       ctx.lineJoin = "miter";
       ctx.beginPath();
       ctx.moveTo(310,182);
       ctx.lineTo(310,390);
       ctx.stroke();

       //Shape7;
       ctx.shadowColor ="rgba(0,0,0,0)";
       ctx.strokeStyle ="rgba(56, 122, 162)";
       ctx.lineWidth = 1;
       ctx.lineCap = "butt";
       ctx.lineJoin = "miter";
       ctx.beginPath();
       ctx.moveTo(310,390);
       ctx.lineTo(560,390);
       ctx.stroke();
}
$(window).on('resize', function(){
    ctx.clearRect(0, 0, c.width, c.height);
    draw();
});
draw();