/**
 * Runs on changes to window.devicePixelRatio.
 */
(function update() {
  // Listen for changes in window.devicePixelRatio
  // https://stackoverflow.com/questions/28905420/window-devicepixelratio-change-listener
  matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener('change', update, {
    once: true,
  });

  handleImageScale('snail-orig', 1);
  handleImageScale('snail-scale', 'dynamic');

  handleImageScale('pixelated-scaling', 6);
  handleImageScale('crisp-edges-scaling', 6);

  document.getElementById('info').textContent = `devicePixelRatio=${window.devicePixelRatio}`;
})();

function handleImageScale(id, scale) {
  const img = document.getElementById(id);
  const finalScale = scale === 'dynamic' ? Math.round(Math.max(window.devicePixelRatio, 1)) : scale;
  img.style.width = (finalScale * img.naturalWidth) / window.devicePixelRatio + 'px';
}
