// pageData.ts

export interface Solution {
  id: number;
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  logo: string;
}

export interface PageContent {
  headerTitle: string;
  headerSubtitle: string;
  solutions: Solution[];
  ctaTitle: string;
  ctaDescription: string;
  applicationOpen: boolean;
}

export const localPageData: PageContent = {
  headerTitle: "Empowering Innovations from within",
  headerSubtitle: "Preparing Local Tech for Global Impact",
  solutions: [
    {
      id: 1,
      name: 'Schoola Apps Limited',
      description:
        "Schoola is a rising Edtech startup in Northern Nigeria, it was founded in the lockdown era of 2020, to make learning engaging, interactive and personalized. Also to empower schools in Nigeria with digital tools for student management and e-learning. Since then, Schoola has had success in spreading to schools across Nigeria and also gained local and international recognition.",
      link: '/local/schoola-apps-limited',
      imageUrl: '/images/schoola.png',
      logo: '/images/schoola logo.png',
    },
    {
      id: 2,
      name: 'OneCenter',
      description:
        "OneCenter is changing customer service in Africa! With the rapid development to AI, OneCenter is in the front row to use this to solve the lingering problem of customer support affecting businesses and customers in Nigeria.",
      link: '/local/onecenter',
      imageUrl: '/images/onecenter.png',
      logo: '/images/onecenter logo.png',
    },
    {
      id: 3,
      name: 'ConnectEd',
      description:
        "Connected is pioneering startup in Nigeria, democratizing access to accurate and socially inclusive information on activities, and essential services using AI through simple SMS, ensuring inclusive connectivity without the need for internet access.",
      link: '/local/connected',
      imageUrl: '/images/connected.png',
      logo: '/images/connected logo.png',
    },
    {
      id: 4,
      name: 'MoneeShare',
      description:
        "MoneeShare is a Fintech startup, that allows users make financial transactions using their SMS application. It was founded in 2024 to make accessible to everyone irrespective of location, device, age, or class.",
      link: '/local/moneeshare',
      imageUrl: '/images/moneeshare.png',
      logo: '/images/moneeshare Logo.png',
    },
  ],
  ctaTitle: "Have a Solution?",
  ctaDescription: "Join iT Central's network of innovators by submitting your startup ideas for mentorship and growth.",
  applicationOpen: true,
};