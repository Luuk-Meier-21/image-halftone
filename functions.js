function rotateCenter(w, h, rotation) {
    translate(w / 2, h / 2);
    rotate(radians(rotation));
    translate(-w / 2, -h / 2);
}

function fromCenter(w, h, onCenter) {
  translate(w / 2, h / 2);
  onCenter();
  translate(-w / 2, -h / 2);
}


// for json.js
class Counter {
  i;
  max;

  constructor(initialIndex, max) {
    this.i = initialIndex;
    this.max = max;
  }

  update() {
    if (this.i < this.max - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
  }
}
