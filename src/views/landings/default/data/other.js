// @project
import { SECTION_PATH } from '@/path';

// @asssets
const imagePrefix = '/assets/images/presentation';

// @project
import branding from '@/branding.json';

export const other = {
  heading: `${branding.brandName} Events `,
  description: 'Explore the Arena of Innovation – Competitions & Challenges',
  primaryBtn: { children: 'Explore all Events', href: SECTION_PATH },
  sections: [
    {
      animationDelay: 0.2,
      title: 'Street Coding',
      subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
      club: 'CSMIT',
      image: `${imagePrefix}/hero-light.svg`,
      link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing'
    },
    {
      animationDelay: 0.3,
      title: 'OSPC',
      subTitle: 'Time: Mar 8th&9th      venue: IT Lab',
      club: 'CSMIT',
      image: `${imagePrefix}/cta-light.svg`,
      link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing'
    },
    {
      animationDelay: 0.4,
      title: 'Bug Hunt',
      subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
      club: 'CSMIT',
      image: `${imagePrefix}/feature-light.svg`,
      link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing'
    },
    {
      animationDelay: 0.2,
      title: 'My Sequel ',
      subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
      club: 'CSMIT',
      image: `${imagePrefix}/benefits-light.svg`,
      link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing'
    },
    {
      animationDelay: 0.3,
      title: 'Sight on Site ',
      subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
      club: 'CSMIT',
      image: `${imagePrefix}/process-light.svg`,
      link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing'
    },
    {
      animationDelay: 0.4,
      title: 'Tech Connector',
      subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
      club: 'CSMIT',
      image: `${imagePrefix}/integration-light.svg`,
      link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing'
    }
  ]
};

export const other3 = {
  heading: 'Join a Winning Team',
  caption: 'Be a part of a winning culture that fosters collaboration, creativity, and success in every career path',
  other: [
    {
      title: 'Product Design',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Front-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Back-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Scrum Master',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    }
  ]
};
