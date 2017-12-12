let radiusE = 114;
let outerRadiusE = radius - 10;
let dtgE = new Date();
let handsE = {};
let numbersE = document.getElementById('numbers_england');
let ticksE = document.getElementById('ticks_england');
let markE;
let rotationE;
let numberE;
let angleE;



handsE.secondE = (dtgE.getSeconds() + dtgE.getMilliseconds() / 1000) / 60;
handsE.minuteE = (dtgE.getMinutes() + handsE.secondE) / 60 ;
handsE.hourE = (dtgE.getHours() % 12 + handsE.minuteE) / 12;

console.log(handsE.secondE,handsE.minuteE,handsE.hourE );

for (key in handsE) {
  document.getElementById(key).setAttribute('transform', "rotate(" + (handsE[key] * 360) + ")");
}


function cE(type) {
  return document.createElementNS("http://www.w3.org/2000/svg", type);

}

function createMark(group, outerRadiusE, length, rotationE) {
  let mark = cE('line');
  mark.setAttribute('x1', outerRadiusE - length);
  mark.setAttribute('x2', outerRadiusE);
  mark.setAttribute('y1', '0');
  mark.setAttribute('y2', '0');
  mark.setAttribute('transform', 'rotate(' + rotationE + ')');
  group.appendChild(mark);


}

for (let i = 0; i < 12; i++) {
  numberE = cE('text');
  angleE = Math.PI / 6 * i;
  numberE.setAttribute('x', radiusE * Math.cos(angleE));
  numberE.setAttribute('y', radiusE * Math.sin(angleE));
  numberE.innerHTML = ((i + 2) % 12 + 1);
  numbersE.appendChild(numberE);
  rotationE = i * 30;
  createMark(ticksE, outerRadiusE, 16, rotationE);

  for (j = 1; j < 5; j++) {
    createMark(ticksE, outerRadiusE, 8, rotationE + j * 6);
  }


}
