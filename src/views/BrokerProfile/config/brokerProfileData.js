import logo1 from '../../../assets/images/afro-man.jpg';
import logo4 from '../../../assets/images/business-professional-employer.jpg';
import logo2 from '../../../assets/images/handsome-man-background.jpg';
import logo3 from '../../../assets/images/pp.jpg';
import logo6 from '../../../assets/images/pp2.png';
import spaceImage1 from '../../../assets/images/profile-image.jpg';
import logo from '../../../assets/images/spaceImage1.jpeg';
import spaceImage from '../../../assets/images/spaceImage1.jpeg';  
import logo5 from '../../../assets/images/successful-businessman.jpg';
import logoImg from '../../../assets/Logo/BrokerLogo.png';

export const footerCompanyList = [
  'About Us',
  'Careers',
  'News',
  'Term & Conditions',
  'Privacy & Policy',
  'Testimonials',
  'Sales Enquiry'
];

export const footerBlogList = [
  'Explore All',
  'Top 10 Brokers in Noida',
  'Latest Projects in Delhi NCR',
  'Latest Projects in Mumbai',
  'Latest Projects in Bengaluru',
  'Latest Projects in Pune',
  'Latest Projects in Hyderabad'
];

export const SpaceImageGallery = [
  { id: 1, image: spaceImage },
  { id: 2, image: spaceImage },
  { id: 3, image: spaceImage }
];

export const brokerDetails = {
  name: 'Bharat Brokerage Pvt. Ltd.',
  logo: logo,
  rating: 4.5,
  location: [
    { location: 'Noida', id: 1 },
    { location: 'Pune', id: 2 },
    { location: 'Hyderabad', id: 3 },
    { location: 'Gurgaon', id: 4 }
  ],
  specialization: [
    { label: 'Commercial Leasing', id: 1 },
    { label: 'Residential Fresh Sales', id: 2 },
    { label: 'Commercial Resale', id: 3 }
  ],
  email: 'info@corporatebrokerage.in',
  phone: '9120601677',
  aboutCompany:
    'At Corporate Brokerage Pvt. Ltd., we pride ourselves on our dedication to delivering top-notch financial solutions customized to meet the diverse needs of corporations like yours. With 12 years of industry expertise under our belt, we specialize in providing comprehensive brokerage services that go beyond the conventional norms. Our mission is to empower businesses with the knowledge and tools they need to thrive in today"s dynamic financial landscape.From strategic investment planning to robust insurance coverage and sophisticated wealth management strategies, we offer a wide array of services designed to address every fa ...',
  leaseSpecialization: {
    label: 'Lease Specilization',
    value: [{ leaseSpec: 'Office Leasing' }, { leaseSpec: 'Retail Leasing' }],
    name: 'lease-specilization'
  },
  pastClients: {
    label: 'Past Clients',
    value: [
      { client: 'Intel India Pvt. Ltd.' },
      { client: 'BMW India Pvt. Ltd.' },
      { client: 'Google India' },
      { client: 'Microsoft India' },
      { client: 'American Express Pvt. Ltd.' },
      { client: 'Nvidia' },
      { client: 'Qualcomm' },
      { client: 'TATA Motors' },
      { client: '+180' }
    ],
    name: 'past-clients'
  }
};

export const listingType = [
  { id: 1, label: 'Commercial' },
  { id: 2, label: 'Housing' }
];

export const commercialData = [
  {
    id: 1,
    spaceName: 'Amanora Park Tower',
    location: 'Sector 61',
    city: 'Noida',
    price: 3100,
    leasableArea: 960000,
    logo: logoImg,
    spaceImg: spaceImage1
  },
  {
    id: 2,
    spaceName: 'Bhutani Cyberthum',
    location: 'Sector 67',
    city: 'Noida',
    price: 2040,
    leasableArea: 1060000,
    logo: '',
    spaceImg: spaceImage
  },
  {
    id: 3,
    spaceName: 'DLF Workspace',
    location: 'Sector 72',
    city: 'Noida',
    price: 2960,
    leasableArea: 580000,
    logo: logoImg,
    spaceImg: spaceImage
  },
  {
    id: 4,
    spaceName: 'Mittal Group of IT Parks',
    location: 'Sector 67',
    city: 'Noida',
    price: 2040,
    leasableArea: 1060000,
    logo: '',
    spaceImg: spaceImage
  },
  {
    id: 5,
    spaceName: 'Smart Works Noida',
    location: 'Sector 63',
    city: 'Noida',
    price: 3910,
    leasableArea: 730000,
    logo: '',
    spaceImg: spaceImage
  },
  {
    id: 6,
    spaceName: 'City IT Center',
    location: 'Sector 63',
    city: 'Noida',
    price: 3910,
    leasableArea: 730000,
    logo: '',
    spaceImg: spaceImage
  },
  {
    id: 7,
    spaceName: 'Cyberhub IT Park',
    location: 'Sector 61',
    city: 'Noida',
    price: 3100,
    leasableArea: 960000,
    logo: '',
    spaceImg: spaceImage
  },
  {
    id: 8,
    spaceName: 'Modern Workspaces',
    location: 'Sector 63',
    city: 'Noida',
    price: 3910,
    leasableArea: 730000,
    logo: '',
    spaceImg: spaceImage
  },
  {
    id: 9,
    spaceName: '91springboard',
    location: 'Sector 63',
    city: 'Noida',
    price: 3910,
    leasableArea: 730000,
    logo: '',
    spaceImg: spaceImage
  }
];

export const ourTeamCardData = [
  {
    id: 1,
    image: logo1,
    name: 'Anmol Singh',
    designation: 'Founder & CEO',
    email: 'anmol.singh@corporatebrokerage.in',
    phone: '+91 912 0601 677'
  },
  {
    id: 2,
    image: logo2,
    name: 'Ravi Mishra',
    designation: 'Managing Director',
    email: 'ravi.mishra@corporatebrokerage.in',
    phone: '+91 912 0601 677'
  },
  {
    id: 3,
    image: logo3,
    name: 'Priya Agarwal',
    designation: 'Risk Manager',
    email: 'priya.agarwal@corporatebrokerage.in',
    phone: '+91 912 0601 677'
  },
  {
    id: 4,
    image: logo4,
    name: 'Arjun Desai',
    designation: 'Operations Manager',
    email: 'arjun.desai@corporatebrokerage.in',
    phone: '+91 912 0601 677'
  },
  {
    id: 5,
    image: logo5,
    name: 'Financial Advisor',
    designation: 'Founder & CEO',
    email: 'vikram.singh@corporatebrokerage.in',
    phone: '+91 912 0601 677'
  },
  {
    id: 6,
    image: logo6,
    name: 'Neha Shah',
    designation: 'Sales Associate',
    email: 'neha.shah@corporatebrokerage.in',
    phone: '+91 912 0601 677'
  }
];

export const professionalInformationData = [
  {
    id: 1,
    head: 'Company Headquarter',
    value: '  B221, Sector 61, Noida, Uttar Pradesh 201301, India'
  },
  { id: 2, head: 'Official Email ID', value: 'sales@corporatebrokerage.in' },
  { id: 3, head: 'Official Contact', value: '+91 912 0601 677' },
  { id: 4, head: 'Official Website', value: 'www.corporatebrokerage.in' },
  { id: 5, head: 'Linkedin Profile', value: 'linkedin.com/corporatebrokerage' },
  { id: 6, head: 'RERA Registration No.', value: 'UPRERAPRJ79290' },
  { id: 7, head: 'RERA Type', value: 'Company' },
  { id: 8, head: 'GST No.', value: '22 AAAAA0000A 1Z5' },
  { id: 9, head: 'PAN No.', value: 'AAAAA8888A' }
];

export const ratingType = [
  { id: 1, value: 'Highest rated' },
  { id: 2, value: 'Lowest rated' },
  { id: 3, value: 'Latest rated' },
  { id: 4, value: 'Oldest rated' }
];

export const reviewData = [
  {
    id: 1,
    name: 'Suhana Khanna',
    rate: '5/5',
    locality: 'Noida',
    date: 'Nov, 2023',
    review:
      'I can"t say enough good things about Corporate Brokerage Pvt. Ltd.! Their expertise and professionalism are unmatched. They took the time to understand our unique needs and delivered tailored solutions that exceeded our expectations. Thanks to them, we feel confident about our financial outlook.'
  },
  {
    id: 2,
    name: 'Abhimanyu singh',
    rate: '4/5',
    locality: 'Noida',
    date: 'Nov, 2023',
    review:
      'I can"t say enough good things about Corporate Brokerage Pvt. Ltd.! Their expertise and professionalism are unmatched. They took the time to understand our unique needs and delivered tailored solutions that exceeded our expectations. Thanks to them, we feel confident about our financial outlook.'
  },
  {
    id: 3,
    name: 'Sameera Bansal',
    rate: '4/5',
    locality: 'Noida',
    date: 'Nov, 2023',
    review:
      'I can"t say enough good things about Corporate Brokerage Pvt. Ltd.! Their expertise and professionalism are unmatched. They took the time to understand our unique needs and delivered tailored solutions that exceeded our expectations. Thanks to them, we feel confident about our financial outlook.'
  },
  {
    id: 4,
    name: 'Manoj Gupta',
    rate: '4/5',
    locality: 'Noida',
    date: 'Nov, 2023',
    review:
      'I can"t say enough good things about Corporate Brokerage Pvt. Ltd.! Their expertise and professionalism are unmatched. They took the time to understand our unique needs and delivered tailored solutions that exceeded our expectations. Thanks to them, we feel confident about our financial outlook.'
  },
  {
    id: 5,
    name: 'Ankit Mishra',
    rate: '4/5',
    locality: 'Noida',
    date: 'Nov, 2023',
    review:
      'I can"t say enough good things about Corporate Brokerage Pvt. Ltd.! Their expertise and professionalism are unmatched. They took the time to understand our unique needs and delivered tailored solutions that exceeded our expectations. Thanks to them, we feel confident about our financial outlook.'
  },
  {
    id: 6,
    name: 'Rahul Kumar',
    rate: '3/5',
    locality: 'Noida',
    date: 'Nov, 2023',
    review:
      'I can"t say enough good things about Corporate Brokerage Pvt. Ltd.! Their expertise and professionalism are unmatched. They took the time to understand our unique needs and delivered tailored solutions that exceeded our expectations. Thanks to them, we feel confident about our financial outlook.'
  }
];

export const writeReview = {
  id: 1,
  name: 'Suhana Khanna',
  rate: '5/5',
  locality: 'Noida',
  date: 'Nov, 2023',
  review:
    'I can"t say enough good things about Corporate Brokerage Pvt. Ltd.! Their expertise and professionalism are unmatched. They took the time to understand our unique needs and delivered tailored solutions that exceeded our expectations. Thanks to them, we feel confident about our financial outlook.'
};

export const spaceType = [
  { id: 1, value: 'Commercial' },
  { id: 2, value: 'Coworking' }
];



export const brokerProfileTabData = [
  { item: 'Company Details', id: 1 },
  { item: 'Professional Details', id: 2 },
  { item: 'Listings', id: 3 },
  { item: 'Team Details', id: 4 },
  { item: 'Photos & Videos', id: 5 }
];

export const cityOFOperation = [
  { id: 1, value: 'Pune' },
  { id: 2, value: 'Gurgaon' },
  { id: 3, value: 'Mumbai' },
  { id: 4, value: 'Faridabad' }
];

export const brokerAddSpace = [
  { id: 1, spaceName: 'Amanora Park Tower' },
  { id: 2, spaceName: 'Bhutani Cyberthum' },
  { id: 3, spaceName: 'DLF Workspace' },
  { id: 4, spaceName: 'Smart Works Noida' },
  { id: 5, spaceName: 'City IT Center' },
  { id: 6, spaceName: 'Cyberhub IT Park' }
];

export const brokerMember = [
  { id: 1, spaceName: 'Anmol Singh' },
  { id: 2, spaceName: 'Ravi Mishra' },
  { id: 3, spaceName: 'Priya Agarwal' },
  { id: 4, spaceName: 'Arjun Desai' },
  { id: 5, spaceName: 'Vikram Singh' },
  { id: 6, spaceName: 'Neha Shah' }
];

export const brokerImageGallery = [
  { id: 1, image: spaceImage1 },
  { id: 2, image: spaceImage },
  { id: 3, image: spaceImage }
];

export const clientChatData = [
  {
    date: '2023-12-04',
    messages: [
      {
        id: 1,
        date: '2023-12-04T04:35:00Z',
        author: 'Shubham Malhotra',
        value:
          'Hello! Finally found the time to wrote to you. I need the updated space detail file which is pending'
      },
      {
        id: 2,
        date: '2023-12-04T16:35:00Z',
        author: 'Shubham Malhotra',
        value: 'Can you send me updated files'
      },
      {
        id: 3,
        date: '2023-12-04T22:35:00Z',
        author: 'You',
        value:
          'I totally missed your previous message.I have Followed up with the space owner regarding the same.  '
      }
    ]
  },
  {
    date: '2023-12-05',
    messages: [
      {
        id: 1,
        date: '2023-12-05T02:35:00Z',
        author: 'Shubham Malhotra',
        value:
          'Hello! Finally found the time to wrote to you. I need the updated space detail file which is pending'
      },
      {
        id: 2,
        date: '2023-12-05T12:35:00Z',
        author: 'Shubham Malhotra',
        value: 'Can you send me updated files'
      },
      {
        id: 3,
        date: '2023-12-05T22:35:00Z',
        author: 'You',
        value:
          'I totally missed your previous message.I have Followed up with the space owner regarding the same.  '
      }
    ]
  },
  {
    date: '2023-12-20',
    messages: [
      {
        id: 1,
        date: '2023-12-20T05:35:00Z',
        author: 'Shubham Malhotra',
        value:
          'Hello! Finally found the time to wrote to you. I need the updated space detail file which is pending'
      },
      {
        id: 2,
        date: '2023-12-20T13:35:00Z',
        author: 'Shubham Malhotra',
        value: 'Can you send me updated files'
      },
      {
        id: 3,
        date: '2023-12-20T22:35:00Z',
        author: 'You',
        value:
          'I totally missed your previous message.I have Followed up with the space owner regarding the same.  '
      }
    ]
  }
];
