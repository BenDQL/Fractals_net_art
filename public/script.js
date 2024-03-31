const cnv = document.getElementById(`recursive_squares`);
cnv.width = cnv.parentNode.scrollWidth;
cnv.height = cnv.width;
const a = (2 * Math.PI) / 6; // Use for drawing hexagon

const ctx = cnv.getContext(`2d`);

function rand_col() {
  return `hsl(${Math.random() * 360}, 100%, 66%)`;
}

// Draw hexagon with radius (define size)
function draw_hexagon(r) {
  ctx.fillStyle = rand_col();
  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(
      cnv.width / 2 + r * Math.cos(a * i),
      cnv.height / 2 + r * Math.sin(a * i)
    );
  }
  ctx.closePath();
  ctx.fill();
}

function draw_hexagons(start_radius) {
  draw_hexagon(start_radius);

  if (start_radius > 0) {
    draw_hexagons(start_radius - 20);
  }
}

draw_hexagons(cnv.height);

window.onresize = () => {
  // When screen resize, redraw the hexagons based on updated screen size
  cnv.width = innerWidth;
  cnv.height = innerHeight;
  draw_hexagons(cnv.height);
};
