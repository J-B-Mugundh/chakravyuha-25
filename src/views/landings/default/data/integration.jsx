// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'Ready to Shine?',
  captionLine: 'Sponsoring Chakravyuha’25 provides extensive digital reach and engagement across multiple platforms, ensuring maximum brand visibility before, during, and after the event. Our active online presence across Instagram, LinkedIn, Twitter, and Facebook willshowcase your brand to a vast audience of students, professionals, and tech enthusiasts.',
  primaryBtn: {
    children: 'Documentation',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'Unmatched Brand Exposure' },
    { label: 'Cross Campus Promotions' },
    { label: 'Be part of History' },
    { label: 'Pan College Enagagement' },
    { label: 'Prime Branding Recognition' },
    { label: 'Influencer and Word-Of-Mouth Impact' }
  ]
};
