// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  navItems: [
    { id: 'home', title: 'Home', link: '#home' },  // Updated to match Main.js
    { id: 'about', title: 'About Us', link: '#about' },  // Updated to match Main.js
    { id: 'events', title: 'Events', link: '#events' },
    { id: 'contact', title: 'Contact Us', link: '#contact' },
    { id: 'clubs', title: 'Clubs', link: '#clubs' },
    { id: 'sponsors', title: 'Sponsors', link: '#sponsors' }
  ]
};
