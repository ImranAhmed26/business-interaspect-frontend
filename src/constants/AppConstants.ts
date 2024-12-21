export const metadataConst = {
  title: 'Business Interaspect',
  description:
    'We provide you with top talents for your Web, Mobile, and Custom Software development ensuring scalable software solutions at affordable rates',
};

export const navLinks = [
  { name: 'home', id: 2, value: 'home', link: '/', dropdown: false },
  {
    name: 'Service',
    id: 1,
    value: 'service',
    link: '/service',
    dropdown: true,
    options: [
      {
        name: 'Web Application',
        link: '/web',
      },
      {
        name: 'IOS & Android Application',
        link: '/app',
      },
      {
        name: 'Cloud Services',
        link: '/cloud',
      },
      {
        name: 'Website Design',
        link: '/design',
      },
      {
        name: 'Ongoing Support',
        link: '/support',
      },
    ],
  },
  { name: 'About', id: 1, value: 'about', link: '/about', dropdown: false },
];

export const brand = {
  name: `Business Interaspect`,
  slogan: `Skilled Developers. Transparent Pricing. Exceptional Results`,
};

export const paragraph = {
  bannerMessage: `Join the heartfelt exchange: Where students embrace the cycle of giving, share the load, care for others, and illuminate brighter paths together!`,
};
