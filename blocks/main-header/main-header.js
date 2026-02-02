// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

export default function decorate(block) {
  block.classList.add('main-header-wrapper');

  // Example: CTA button
  const cta = block.querySelector('a');
  if (cta) {
    cta.classList.add('btn', 'btn-primary');
  }
}