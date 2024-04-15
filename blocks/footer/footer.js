import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  block.append(footer);
}
