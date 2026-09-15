
const grid = document.querySelector('.gallery-grid');
const indices = Array.from({length: 50}, (_, i) => i + 1);

for (let i = indices.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [indices[i], indices[j]] = [indices[j], indices[i]];
}

indices.forEach(num => {
  const img = document.createElement('img');
  img.src = `50waysofseeing/imgs/${num}.png`;
  img.onerror = () => console.warn(`Failed to load: ${num}.png`);
  grid.appendChild(img);
});


const toggleBtn = document.getElementById('reflection-toggle');
const textBlock = document.getElementById('reflection-text');

toggleBtn.addEventListener('click', () => {
  const isHidden = textBlock.style.display === 'none';
  textBlock.style.display = isHidden ? 'block' : 'none';
  toggleBtn.textContent = isHidden ? 'reflection -' : 'reflection +';
});