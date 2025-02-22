// @project

export const pricing = {
  "heading": "Why Sponsor Us?",
  "caption": "Sponsoring Chakravyuha’25 extends your brand’s visibility beyond MIT, reaching students and tech enthusiasts from top institutions across the country. This fest isn't just limited to MIT—it serves as a hub for collaboration, competition, and innovation, attracting talent from leading engineering colleges, universities, and startups.",
  "features": [
    { "id": 1, "label": "Exclusive branding as 'Chakravyuha’25 Presented by [Your Brand]'" },
    { "id": 2, "label": "Logo placement on all event materials, merchandise, and main stage banners" },
    { "id": 3, "label": "Dedicated social media campaigns, influencer collaborations, and brand mentions" },
    { "id": 4, "label": "Prime booth space and direct engagement with participants" },
    { "id": 5, "label": "Prominent brand visibility across event collaterals & website" },
    { "id": 6, "label": "Featured branding in workshops, hackathons, and keynote sessions" },
    { "id": 7, "label": "Multiple social media shout-outs and audience engagement opportunities" },
    { "id": 8, "label": "Booth space for product showcases and interactions" },
    { "id": 9, "label": "Branding as the official sponsor of a flagship event" },
    { "id": 10, "label": "Custom promotional content across our social media platforms" },
    { "id": 11, "label": "Targeted branding on competition banners and event posters" },
    { "id": 12, "label": "Opportunity to provide custom giveaways or prizes" }
  ],
  plans: [
    {
      title: 'Title Sponsor',
      price: '2,50,000',
      active: false,
      featureTitle: 'Features',
      content: 'Learn more about the MIT',
      exploreLink: { children: 'Learn More', href: "/"},
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
      title: 'Co Sponsor',
      price: '1,50,000',
      active: false,
      featureTitle: 'Features',
      content: 'Learn more about the MIT',
      exploreLink: { children: 'Learn More', href: "/"},
      featuresID: [5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
      title: 'Event Sponsor',
      price: '1,25,000',
      active: false,
      featureTitle: 'Features',
      exploreLink: { children: 'Learn More', href: "/"},
      featuresID: [9, 10, 11, 12]
    }
  ]
};
