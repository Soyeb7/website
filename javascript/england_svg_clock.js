let radius_england = 114;
let outerRadius_england = radius_england - 10;
let dtg_england = new Date();
let hands_england = {};
let numbers_england = document.getElementById('numbers_england');
let ticks_england = document.getElementById('ticks_england');
let mark_england;
let rotation_england;
let number_england;
let angle_england;



hands_england.second_england = (dtg_england.getSeconds() + dtg_england.getMilliseconds() / 1000) / 60;
hands_england.minute_england = (dtg_england.getMinutes() + hands_england.second) / 60 ;
hands_england.hour_england = (dtg_england.getHours() % 12 + hands_england.minute) / 12;

 

for (key in hands_england) {
  document.getElementById(key).setAttribute('transform', "rotate(" + (hands_england[key] * 360) + ")");
}


function cE_england(type) {
  return document.createElementNS("http://www.w3.org/2000/svg", type);

}

function createMark_england(group_england, outerRadius_england, length_england, rotation_england) {
  let mark_england = cE_england('line_england');
  mark_england.setAttribute('x1_england', outerRadius_england - length_england);
  mark_england.setAttribute('x2_england', outerRadius_england);
  mark_england.setAttribute('y1_england', '0');
  mark_england.setAttribute('y2_england', '0');
  mark_england.setAttribute('transform_england', 'rotate_england(' + rotation_england + ')');
  group_england.appendChild(mark_england);


}

for (let i = 0; i < 12; i++) {
  number_england = cE_england('text_england');
  angle_england = Math.PI / 6 * i;
  number_england.setAttribute('x_england', radius_england * Math.cos(angle_england));
  number_england.setAttribute('y_england', radius_england * Math.sin(angle_england));
  number_england.innerHTML = ((i + 2) % 12 + 1);
  numbers_england.appendChild(number_england);
  rotation_england = i * 30;
  createMark_england(ticks_england, outerRadius_england, 16, rotation_england);

  for (j = 1; j < 5; j++) {
    createMark_england(ticks_england, outerRadius_england, 8, rotation_england + j * 6);
  }


}
