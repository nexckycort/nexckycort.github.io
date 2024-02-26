import { Footer, Navbar } from '../components/layout';

import { AboutMePage } from '../pages/aboutme';
import { ContactPage } from '../pages/contact';

import { selectedLanguage } from '../helpers/selectedLang';

export const routes: {
  [key: string]: () => Promise<HTMLDivElement>;
} = {
  '': AboutMePage,
  '#/contact': ContactPage
};

export const router = async () => {
  const header = document.getElementById('header') as HTMLElement;
  const content = document.getElementById('content') as HTMLElement;
  const footer = document.getElementById('footer') as HTMLElement;

  if (header.childNodes.length === 0 && footer.childNodes.length === 0) {
    header.append(Navbar());
    footer.append(Footer());
  }

  const hash = location.hash.toLowerCase();

  content.innerHTML = '';
  if (routes[hash] !== undefined) {
    content.append(await routes[hash]());
  }

  const { changeLanguage } = selectedLanguage();
  await changeLanguage();
};
