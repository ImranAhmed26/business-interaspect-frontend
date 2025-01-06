export const metadataConst = {
  title: 'Business Interaspect',
  description:
    'We provide you with top talents for your Web, Mobile, and Custom Software development ensuring scalable software solutions at affordable rates',
};

export const navLinks = [
  { name: 'home', id: 1, value: 'home', link: '/', dropdown: false },
  {
    name: 'Service',
    id: 2,
    value: 'service',
    link: '/service',
    dropdown: true,
    options: [
      {
        name: 'Web Application',
        link: '/web',
        details:
          'E-commerce, Saas, CRM, ERP, Ed-Tech. Build scalable, user-friendly web applications with cutting-edge technologies tailored to your business needs.',
      },
      {
        name: 'Mobile App Development',
        link: '/app',
        details:
          'Create seamless mobile experiences with custom apps designed for iOS and Android platforms, ensuring broad reach and engagement.',
      },
      {
        name: 'Cloud Services',
        link: '/cloud',
        details:
          'Cloud solutions designed for flexibility, cost-efficiency, and scalability, with a focus on data security and performance.',
      },
      {
        name: 'Website Design',
        link: '/design',
        details:
          'Visually stunning, responsive websites built with attention to detail to enhance your brand’s online presence and user engagement.',
      },
      {
        name: 'Ongoing Support',
        link: '/support',
        details:
          'Get continuous assistance and maintenance to ensure your applications run smoothly and remain up-to-date with evolving needs.',
      },
    ],
  },
  {
    name: 'Industries',
    id: 3,
    value: 'industries',
    link: '/industries',
    dropdown: true,
    options: [
      {
        name: 'Ecommerce and Retail',
        link: '/ecommerce',
        details:
          'Develop scalable e-commerce platforms with features like inventory management, payment gateways, and personalized shopping experiences to boost sales.',
      },
      {
        name: 'Healthcare and Wellness',
        link: '/healthcare',
        details:
          'Build secure healthcare solutions, including telemedicine platforms, appointment systems, and patient portals, ensuring compliance with industry regulations.',
      },
      {
        name: 'Service Based Businesses',
        link: '/service-based',
        details:
          'Empowering service-based businesses with  custom CRM, appointment tools, and client portals to streamline operations and improve customer satisfaction.',
      },
      {
        name: 'Charities and Nonprofits',
        link: '/charities',
        details:
          'Support charitable organizations with donation platforms, volunteer management systems, landing pages and outreach tools for impactful community engagement.',
      },
      {
        name: 'Ed-Tech',
        link: '/edtech',
        details:
          'Develop interactive learning management systems (LMS), virtual classrooms, and educational content platforms tailored for modern education.',
      },
      // {
      //   name: 'Travel and Hospitality',
      //   link: '/travel-hospitality',
      //   details:
      //     'Design booking systems, travel planning apps, and customer experience tools to enhance operations in the travel and hospitality sector.',
      // },
      // {
      //   name: 'Food and Beverage',
      //   link: '/food-beverage',
      //   details:
      //     'Craft technology solutions for the food industry, such as online ordering systems, delivery tracking, and inventory management tools.',
      // },
    ],
  },
  ,
  { name: 'About', id: 4, value: 'about', link: '/about', dropdown: false },
];

export const brandData = {
  name: `Business Interaspect`,
  slogan: `Skilled Developers. Transparent Pricing. Exceptional Results`,
};
