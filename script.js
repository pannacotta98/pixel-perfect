imageScale = 1;

function update() {
  // https://stackoverflow.com/questions/28905420/window-devicepixelratio-change-listener
  matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener('change', update, {
    once: true,
  });

  const snailOrigImg = document.getElementById('snail-orig');
  snailOrigImg.style.width =
    (imageScale * snailOrigImg.naturalWidth) / window.devicePixelRatio + 'px';

  const infoParagraph = document.getElementById('info');
  infoParagraph.textContent = `devicePixelRatio=${window.devicePixelRatio}`;

  const snailScaleImg = document.getElementById('snail-scale');
  snailScaleImg.style.width =
    (Math.round(Math.max(window.devicePixelRatio, 1)) * snailOrigImg.naturalWidth) /
      window.devicePixelRatio +
    'px';
}

update();
