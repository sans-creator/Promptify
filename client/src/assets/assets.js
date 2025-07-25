import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import mainPage from './mainPage.jpeg'
import black_on_trans from './black_on_trans.png'
import linkedIn from './linkedin.png'
import github from './github.png'
import email from './email.png'





export const assets = {
    logo,
    logo_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    mainPage,
    black_on_trans,
    github,
    linkedIn,
    email
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
  {
    image: profile_img_1,
    name: 'Aarav Mehta',
    role: 'UX Designer',
    stars: 5,
    text: `This AI image generator has transformed how I visualize concepts. Just type a prompt and watch it come to life — truly impressive!`
  },
  {
    image: profile_img_2,
    name: 'Priya Sharma',
    role: 'Social Media Strategist',
    stars: 5,
    text: `Generating visuals for campaigns has never been easier. It saves me time and sparks fresh creative ideas every single time.`
  },
  {
    image: profile_img_1,
    name: 'Kunal Verma',
    role: 'Brand Consultant',
    stars: 5,
    text: `Perfect for on-the-go ideation. I use it during client meetings to instantly create mood boards. A must-have creative tool!`
  }
];


export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]