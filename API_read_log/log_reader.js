var result;
function load_log(file_name) {
  result = loadStrings('log/'+file_name);
}

var target_log = 0;
var colour_font = 0;

function display_log(font,size) {
	var time_to_switch_user = 600;
	if(frameCount%time_to_switch_user == 0) {
		target_log = floor(random(result.length));
	} 
  
  colour_inc(.2,0,0);
	fill(color(colour_log_x,colour_log_y,colour_log_z));
	
  textFont(font);
  textSize(size);
  textAlign(LEFT);
  // text('dist:'+ radius_log, 100,100);
  // text('cx:'+ colour_log_x + ' cy:'+ colour_log_y +' cz:'+ colour_log_z, 100,100);
  var s = split(String(result[target_log]),'|');
  var pos = position(.01,100);
  for(var i = 0 ; i < s.length ; i++) {
  	var pos_x =  mouseX + pos.x;
  	var pos_y =  mouseY + (i*size) + pos.y;
  	text(s[i],pos_x,pos_y);
  } 
}


var colour_log_x = 0;
var colour_log_y = 100;
var colour_log_z = 100;
function colour_inc(speed_x,speed_y,speed_z) {
	colour_log_x += speed_x;
	colour_log_y += speed_y;
	colour_log_z += speed_z;
	if(colour_log_x > 360) colour_log_x = 0;
	if(colour_log_y > 100) colour_log_y = 0;
	if(colour_log_z > 100) colour_log_z = 0;

}


var radius_log = 0;
function position(speed,dist_max) {
	radius_log += (speed*5);
	if(radius_log > dist_max) radius_log = 0 ;
	var angle = frameCount *speed;
	var x = cos(angle) *radius_log;
	var y = sin(angle) *radius_log;
	return createVector(x,y);
}
