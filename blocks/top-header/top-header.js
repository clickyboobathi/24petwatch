// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

export default function decorate(block) {
  block.classList.add('top-header-wrapper');

  // Example: language dropdown
  const lang = block.querySelector('p');
  if (lang) {
    lang.classList.add('lang-switch');
  }
}