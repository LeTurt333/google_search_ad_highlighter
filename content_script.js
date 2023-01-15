const adElements = document.querySelectorAll('[aria-label="Ads"]');

for (const ad of adElements) {
  ad.style.backgroundColor = 'red';
}