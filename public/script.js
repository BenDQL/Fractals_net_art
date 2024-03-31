const cnv = document.getElementById(`recursive_hexagons`);
cnv.width = cnv.parentNode.scrollWidth;
cnv.height = cnv.width;
const a = (2 * Math.PI) / 6; // Use for drawing hexagon

const ctx = cnv.getContext(`2d`);

function rand_col() {
  return `hsl(${Math.random() * 360}, 100%, 66%)`;
}

// Draw hexagon with radius (define size)
function draw_hexagon(r, x, y) {
  ctx.fillStyle = rand_col();
  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  ctx.closePath();
  ctx.fill();
}

function draw_hexagons(start_radius, start_x, start_y) {
  draw_hexagon(start_radius, start_x, start_y);

  if (start_radius > 0) {
    draw_hexagons(start_radius - 20, start_x + 5, start_y - 8);
  }
}

draw_hexagons(cnv.width / 2, cnv.width / 2, cnv.height / 2);

window.onresize = () => {
  // When screen resize, redraw the hexagons based on updated screen size
  cnv.width = innerWidth;
  cnv.height = innerHeight;
  draw_hexagons(cnv.width / 2, cnv.width / 2, cnv.height / 2);
};
