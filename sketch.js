function rotatex( point , center , angle ){

 var output = createVector( 0 , 0 );

 var point1 = p5.Vector.sub( point , center );

 output.x = point1.x*cos( angle ) - point1.y*sin( angle );

 output.y = point1.x*sin( angle ) + point1.y*cos( angle );

 output.add( center );

 return output;
 
 //console.log()

}

var maxDist;

var center;

var Dist;

function setup(){
  createCanvas( windowWidth , windowHeight);

  background( 0 , 0 , 0 );

  colorMode(HSB);
  
  maxDist= sqrt( width * width + height* height);
  
  center = createVector( width*0.5 , height*0.5 );

}

function draw(){
  var p0 = createVector( random( 0 , width ) );
  
  //center point that is rotated around
  var c = createVector( width*0.5 , height*0.5 );
  
  //coordinates and rotating for ellipse
  var p1 = rotatex( p0 , c , frameCount*0.01 );
  
  Dist = center.dist( p1 );
  //console.log( Dist/maxDist );
  var C1 = color( Dist  / maxDist* 720 , 100 , 100 );
  
  fill( C1 );
  ellipse( p1.x , p1.y , 20 , 20);
 
 
}