let radius = 114;
let outerRadius = radius - 10;
let dtg = new Date();
let hands = {};
let numbers = document.getElementById('numbers');
let ticks = document.getElementById('ticks');
let mark;
let rotation;
let number;
let angle;



hands.second = (dtg.getSeconds() + dtg.getMilliseconds() / 1000) / 60;
hands.minute = (dtg.getMinutes() + 30 + hands.second) / 60 ;
hands.hour = (dtg.getHours() + 5 % 12 + hands.minute) / 12;

for (key in hands) {
  document.getElementById(key).setAttribute('transform', "rotate(" + (hands[key] * 360) + ")");
}


function cE(type) {
  return document.createElementNS("http://www.w3.org/2000/svg", type);

}

function createMark(group, outerRadius, length, rotation) {
  let mark = cE('line');
  mark.setAttribute('x1', outerRadius - length);
  mark.setAttribute('x2', outerRadius);
  mark.setAttribute('y1', '0');
  mark.setAttribute('y2', '0');
  mark.setAttribute('transform', 'rotate(' + rotation + ')');
  group.appendChild(mark);


}

for (let i = 0; i < 12; i++) {
  number = cE('text');
  angle = Math.PI / 6 * i;
  number.setAttribute('x', radius * Math.cos(angle));
  number.setAttribute('y', radius * Math.sin(angle));
  number.innerHTML = ((i + 2) % 12 + 1);
  numbers.appendChild(number);
  rotation = i * 30;
  createMark(ticks, outerRadius, 16, rotation);

  for (j = 1; j < 5; j++) {
    createMark(ticks, outerRadius, 8, rotation + j * 6);
  }


}
