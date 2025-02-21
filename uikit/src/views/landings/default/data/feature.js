// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';
import { SECTION_PATH, BUY_NOW_URL, ADMIN_PATH, DOCS_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const feature2 = {
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  features: [
    {
      icon: { name: 'tabler-users', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-star', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-chart-histogram', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Growth',
      content: 'Our culture prioritizes continuous learning, encouraging personal and professional development. '
    }
  ]
};

export const feature5 = {
  heading: 'Beyond the 9-to-5',
  caption: 'Our benefits go beyond the standard, ensuring your life outside of work is just as fulfilling.',
  image1: '/assets/images/graphics/ai/graphics3-light.svg',
  image2: '/assets/images/graphics/ai/graphics2-light.svg',
  features: [
    {
      icon: 'tabler-coin',
      title: 'Compensation',
      content: 'Enjoy a competitive salary that recognizes your skills and contributions.'
    },
    {
      icon: 'tabler-health-recognition',
      title: 'Healthcare',
      content: "Access to a comprehensive healthcare plan, ensuring you and your family's well-being."
    }
  ],
  features2: [
    {
      icon: 'tabler-briefcase',
      title: 'Automated Scaling',
      content: 'Embrace a flexible work environment, allowing you to balance work.'
    },
    {
      icon: 'tabler-users',
      title: 'Real-Time',
      content: 'Support your family commitments with family-friendly policies and benefits.'
    }
  ],
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  },
  content: 'Explore diverse career paths within the company through our internal mobility programs.',
  actionBtn: { children: 'Explore all Features', href: '#' }
};

export const feature9 = {
  heading: 'Streamline Your Business with Our CRM Solution',
  caption: 'Discover the features that will transform your customer relationships',
  features: [
    {
      icon: 'custom-brain',
      title: 'AI-Powered Analytics',
      content: 'Leverage AI for Predictive Insights and Sales Opportunities.'
    },
    {
      icon: 'custom-path',
      title: 'Journey Mapping',
      content: 'Customer experiences at every touchpoint with it.'
    },
    {
      icon: 'custom-statastic',
      title: 'Voice & Speech Analytics',
      content: 'Actionable insights from customer interactions through it.'
    },
    {
      icon: 'custom-remote',
      title: 'Sales Gamification',
      content: 'Boost sales team motivation and performance with it.'
    },
    {
      icon: 'custom-lock',
      title: 'Subscription Management',
      content: 'Effortlessly handle and optimize subscriptions with it.'
    },
    {
      icon: 'custom-interface',
      title: 'Intuitive Interface',
      content: 'Simplify user interactions & enhance usability with it.'
    }
  ]
};

export const feature10 = {
  heading: 'Design Seamlessly with Figma',
  caption: 'Use Figma tools like Component Architecture and Dark Mode to speed up your design process.',
  typesetPosition: 'center',
  primaryBtn: { children: 'Buy Figma' },
  secondaryBtn: { children: 'Live Figma Preview' },
  features: [
    {
      animationDelay: 0.1,
      icon: { name: 'tabler-components', type: IconType.STROKE, stroke: 1.25 },
      title: 'Component Architecture',
      content: 'Organize and reuse components for scalable design.'
    },
    {
      animationDelay: 0.2,
      icon: { name: 'tabler-layout-list', type: IconType.STROKE, stroke: 1.25 },
      title: 'Auto-layout',
      content: 'Auto-layout system for effortless design alignment and responsiveness.'
    },
    {
      animationDelay: 0.3,
      icon: { name: 'tabler-clipboard-text', type: IconType.STROKE, stroke: 1.25 },
      title: 'Clear Guidance',
      content: 'Easy-to-follow instructions for seamless navigation & understanding.'
    },
    {
      animationDelay: 0.1,
      icon: { name: 'tabler-devices-code', type: IconType.STROKE, stroke: 1.25 },
      title: 'Responsive',
      content: 'Design adaptable layouts for all screen sizes effortlessly.'
    },

    {
      animationDelay: 0.2,
      icon: { name: 'tabler-keyframe-align-center', type: IconType.STROKE, stroke: 1.25 },
      title: 'Dark Mode',
      content: 'Seamlessly switch to dark mode with a single click.'
    },

    {
      animationDelay: 0.3,
      icon: { name: 'tabler-settings-2', type: IconType.STROKE, stroke: 1.25 },
      title: 'Variables',
      content: 'Manage color and typography settings efficiently with variables.'
    }
  ],
  video: {
    thumbnail: '/assets/images/graphics/ai/background2.svg',
    src: '/assets/videos/test.mp4'
  }
};

export const feature20 = {
  heading: 'Comprehensive UI Kit Tailored to your Need',
  caption: 'Ready to transform your SaaS designs with one powerful UI Kit?',
  actionBtn: { children: 'Buy Now', href: BUY_NOW_URL, ...linkProps },
  secondaryBtn: { children: 'Explore Blocks', href: SECTION_PATH },
  features: [
    {
      icon: 'tabler-accessible',
      title: 'WCAG Compliant',
      content: 'Ensure accessibility with WCAG compliant design for browsing.'
    },
    {
      icon: 'tabler-brand-google',
      title: 'SEO Friendly',
      content: 'Boost visibility with SEO-friendly features for better search rankings.'
    },
    {
      icon: 'tabler-stack-2',
      title: 'MUI Components',
      content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
    },
    {
      icon: 'tabler-rocket',
      title: 'High Performance UI',
      content: 'Adjust content layout for visual coherence on various screen sizes.'
    },
    {
      icon: 'tabler-help',
      title: 'Detailed Documentation',
      content: 'Access comprehensive documentation for easy guidance on platform usage.'
    },
    {
      icon: 'tabler-refresh',
      title: 'Regular Updates',
      content: 'Receive consistent updates to keep the platform secure and up-to-date with the latest features.'
    }
  ]
};

export const feature21 = {
  heading: `Design Faster, Smarter with ${branding.brandName} Figma`,
  caption: 'Unlock Figma’s advanced tools for streamlined, scalable, and responsive SaaS UI design.',
  image: '/assets/images/graphics/ai/desktop1-light.svg',
  primaryBtn: { children: 'Free Figma', href: 'https://www.figma.com/community/file/1425095061180549847', ...linkProps },
  secondaryBtn: {
    children: 'Preview Pro Figma',
    href: 'https://www.figma.com/design/mlkXfeqxUKqIo0GQhPBqPb/SaasAble---UI-Kit---Preview-only?node-id=11-1833&t=JBHOIIEuYZpmN6v8-1',
    ...linkProps
  },
  features: [
    {
      animationDelay: 0.1,
      icon: 'tabler-components',
      title: 'Component Architecture'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-moon',
      title: 'Dark Mode'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-brightness-auto',
      title: 'Auto Layout'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-accessible',
      title: 'WCAG Compliant'
    },
    {
      animationDelay: 0.1,
      icon: 'tabler-icons',
      title: 'Custom Icons'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-file-stack',
      title: 'Page Demos'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-brand-matrix',
      title: 'Material 3 Guideline'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-click',
      title: 'Quick Customization'
    }
  ]
};

export const feature = {
  heading: `What’s Inside of ${branding.brandName} Plus Version`,
  features: [
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA JavaScript',
      content: 'Ensure accessibility with WCAG compliant design for browsing.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js JavaScript',
      content: 'Tailor typography for optimal readability across all screen sizes.'
    },
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA TypeScript',
      content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js TypeScript',
      content: 'Adjust content layout for visual coherence on various screen sizes.'
    },
    {
      image: '/assets/images/shared/figma.svg',
      title: 'Figma ',
      content: 'Boost visibility with SEO-friendly features for better search rankings.'
    },
    {
      title: 'Check Out Our Pricing Plan',
      content: 'Choose the plan that aligns with your SaaS product requirements.',
      actionBtn: { children: 'Pricing Plan', href: BUY_NOW_URL, ...linkProps }
    }
  ]
};

export const feature7 = {
  heading: 'Real-Time Performance Insights',
  caption: 'Gain a competitive edge with real-time performance monitoring.',
  testimonials: [
    {
      image: '/assets/images/graphics/ai/graphics6-light.svg',
      features: [
        {
          icon: 'tabler-star',
          title: 'Core Value',
          content: 'Unlock growth potential through continuous monitoring, enabling proactive strategies in a competitive landscape.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics8-light.svg',
      features: [
        {
          icon: 'tabler-route',
          title: 'Multi-Cloud Orchestration',
          content: 'Enhances flexibility and resilience in a multi-cloud environment.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics3-light.svg',
      features: [
        {
          icon: 'tabler-history',
          title: 'Story',
          content: 'Real-time performance insights empower teams to respond swiftly, optimizing operations and driving growth.'
        }
      ]
    }
  ],
  breadcrumbs: [{ title: 'Core Value' }, { title: 'Culture' }, { title: 'Story' }]
};

export const feature23 = {
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  heading2: 'Growth',
  caption2: 'Our culture prioritizes continuous learning, encouraging personal and professional development. ',
  image: '/assets/images/graphics/default/feature23-light.png',
  primaryBtn: { children: 'Join  Our Team', href: '#' },

  features: [
    {
      icon: 'tabler-users',
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: 'tabler-star',
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    }
  ]
};

export const feature18 = {
  heading: 'Clubs',
  caption: "The Powerhouse Behind ChakraVyuha'25",
  topics: [
    {
      icon: 'tabler-rocket',
      title: 'GDG - MIT',
      title2: 'Be a Leader, Be a Create, Be a Game Changer',
      description: 'Google Developer Groups On Campus - MIT (GDG MIT) is a student-run community focused on fostering technological innovation and skill development. We provide a platform for students to learn, build, and connect with other developers. Through workshops, hackathons, and mentorship programs, we empower students to explore cutting-edge technologies and bring their ideas to life. Join us in shaping the future of tech!',
      image: '/assets/images/clubs/gdg-logo.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'AUSEC - MIT',
      title2: 'Your talent is our work',
      description: 'Anna University Student Entrepreneurship Club - MIT (AUSEC-MIT) is a dynamic student-driven club that nurtures innovation and entrepreneurial spirit. AU-SEC provides a platform for students to ideate, network, and transform their business concepts into viable ventures through workshops, mentorship, and events. It aims to foster a strong entrepreneurial ecosystem on campus.',
      image: '/assets/images/graphics/default/admin-dashboard-2.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'TEDcMIT',
      title2: 'Inspire, Invent, Innovate',
      description: 'The TED Club at our college is a vibrant community focused on inspiring and empowering students through the exchange of ideas. We organize two flagship events, Innovate (even semester) and Originate (odd semester), where we invite renowned speakers from various fields to share their journeys and insights. In addition to these events, we host regular discussions and idea-sharing sessions to foster creativity, innovation, and critical thinking. The club provides a platform for students to collaborate, engage with thought leaders, and actively shape their future by exploring new ideas and perspectives.',
      image: '/assets/images/graphics/default/admin-dashboard-3.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'QUANTuMIT',
      title2: 'Decipher the quantized',
      description: 'The QUANTuMIT is a technical student club, stipulating an interactive and a comprehensible platform for the knowledge hunters, facilitating effective learning through mind-boggling discussions, events, sessions and competitions. It is highly imperative that the STEM community must be well-equipped about quantum computing and communication as we are witnessing the monumental outgrowth of computational and algorithmic applications of quantum physics, and hence here is the right solution in the form of QUANTuMIT.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'QCMIT',
      title2: '',
      description: 'The Quiz Club of MIT is the official quizzing club of the college, bringing together students who love learning and competing. We don’t just stick to regular quizzes—we add a twist to make them fun and engaging for everyone. Our club organizes and participates in various quizzing events, both within and outside the college. Regular sessions help members improve their trivia skills, teamwork, and critical thinking. The club strives to create an intellectually stimulating environment that nurtures curiosity and a thirst for knowledge.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'MET',
      title2: 'Engineering Innovation for a Safer Tomorrow',
      description: 'MIT Meteorology Club aims to use “Engineering technologies and innovations” to develop the Meteorological field and help in Disaster Relief & Management. The team is dedicated to developing projects that apply engineering knowledge in meteorology, collaborating with IMD, creating high-quality and cost-effective disaster relief solutions, and supporting meteorology startups.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'தமிழ் மன்றம்',
      title2: 'தாய் மொழி வழி சமூக முன்னேற்றம்',
      description: 'மாணவர்களின் படைப்பாற்றலையும் கலைத்திறனையும் வெளிக்கொணர்வதற்கு அர்பணிக்கப்பட்ட களம் ஆகும். மாணவர்களின் இலக்கிய ஆர்வத்தை கூர்மையாக்குதல், அறிவியல் தமிழ் வளர்த்தல் மற்றும் சமூகப் பார்வையை விரிவாக்குதல் என்ற முனைப்புடன் செயல்படும். தாய் மொழியின் வளம்பாடும் வானம்பாடிகளாய் உளம் கொண்டு எழ இம்மன்றம் துணை நிற்கும். தாய்மொழி மூலம் தன்னம்பிக்கை ஊற்றெடுக்க தக்கதோர் வழிகாட்டியாய் செயல்படும். எனவே, இம்மன்றமானது தமிழை வளர்க்க பாடுபடும் – தலை நிமிர்ந்து நிற்கப் போராடும்.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'CSMIT',
      title2: '',
      description: 'The Computer Society of MIT fosters coding skills and technical expertise for students across all disciplines. Associated with Dr. Kalam Computing Centre, it offers interdisciplinary learning and professional training to prepare students for industry demands. CSMIT conducts workshops, coding sessions, and placement training to equip students with real-world skills. It remains committed to nurturing innovation and technical excellence among aspiring technocrats.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'MITRA',
      title2: 'To foster innovation and practical learning in Robotics and Automation',
      description: 'The Robotics Association that plays a pivotal role in enhancing the technical skills of the students, particularly in the fields of robotics, automation, and technology through bootcamps, workshops, and events aimed at equipping students with essential skills and knowledge and hosts the annual national-level technical symposium, Dexbot, which attracts participants from various colleges and showcases innovative projects and hands-on workshops. MITRA continues to foster a community that embraces technology and robotics, encouraging students to explore and excel in this rapidly evolving field.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'Raptors',
      title2: '',
      description: 'An official aero-modelling club with three divisions: Rocketry, Fixed-Wing, and Multi-Copter. It provides hands-on experience, software training, and fosters innovation in aerospace engineering through design, building, and flight experiments, enhancing technical skills and practical knowledge in aeromodelling.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'IoT',
      title2: '',
      description: 'A platform for students to explore and innovate in the field of the Internet of Things. Through hands-on projects, industry internships, and technical workshops, the club equips members with practical skills and real-world experience. With access to cutting-edge technology and mentorship, students can build strong portfolios and stay ahead in this rapidly evolving field. The club also hosts CharIoT, its annual flagship event, bringing together enthusiasts to showcase innovations and engage with industry experts.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    },
    {
      icon: 'tabler-rocket',
      title: 'PSMIT',
      title2: 'Every Moment. Every Story. Perfectly Captured.',
      description: 'Our passionate and skilled photographers are the visual storytellers of the institute, capturing the vibrant energy, academic excellence, and innovative spirit that defines MIT. Our award-winning photographers consistently excel in capturing major MIT events, achievements, and milestones with exceptional skill, artistic vision, and meticulous attention to detail.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Learn More', href: "https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/"}
    }
  ]
};
