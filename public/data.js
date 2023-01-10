import erikaOliver from "../public/assets/images/author/erikaOliver.webp";
import joshuaWood from "../public/assets/images/author/joshuaWood.webp";
import marioSanchez from "../public/assets/images/author/marioSanchez.webp";

import mainPostText from "../public/assets/texts/mainPost.js";

const mainPosts = [
  {
    mainImage: require("../public/assets/images/mainPosts/mainPosts_0.webp"),
    categories: [
      {
        title: "TECHNOLOGY",
        color: "blue"
      }
    ],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    author: {
      image: marioSanchez,
      name: "Mario Sanchez",
      bio: "Mario is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple."
    },
    publishedAt: "2022-10-21T14:34:32.999Z",
    body: mainPostText
  },
  {
    mainImage: require("../public/assets/images/mainPosts/mainPosts_1.webp"),
    categories: [
      {
        title: "LIFESTYLE",
        color: "purple"
      }
    ],
    title:
      "5 Effective Brain Recharging Activities No One is Talking About",
    author: {
      image: joshuaWood,
      name: "Joshua Wood"
    },
    publishedAt: "2022-10-21T14:34:32.999Z"
  }
];

const secondaryPosts = [
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_0.webp"),
    categories: [
      {
        title: "DESIGN",
        color: "blue"
      },
      {
        title: "LIFESTYLE",
        color: "purple"
      }
    ],
    title: "14 Architectural Design Ideas for a Spacious Interior",
    author: {
      image: marioSanchez,
      name: "Mario Sanchez"
    },
    publishedAt: "2022-10-21T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_1.webp"),
    categories: [
      {
        title: "LIFESTYLE",
        color: "purple"
      },
      {
        title: "PERSONAL GROWTH",
        color: "green"
      }
    ],
    title:
      "Every Next Level of Your Life Will Demand a Different You",
    author: {
      image: marioSanchez,
      name: "Mario Sanchez"
    },
    publishedAt: "2022-10-20T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_2.webp"),
    categories: [
      {
        title: "TRAVEL",
        color: "orange"
      }
    ],
    title: "This Bread Pudding Will Give You All the Fall Feels",
    author: {
      image: erikaOliver,
      name: "Erika Oliver"
    },
    publishedAt: "2022-10-19T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_3.webp"),
    categories: [
      {
        title: "TRAVEL",
        color: "orange"
      }
    ],
    title: "I Moved Across the Country and Never Looked Back",
    author: {
      image: joshuaWood,
      name: "Joshua Wood"
    },
    publishedAt: "2022-10-19T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_4.webp"),
    categories: [
      {
        title: "PERSONAL GROWTH",
        color: "green"
      }
    ],
    title: "3 Meaningful Ways to Practice Self-Care as an Introvert",

    author: {
      image: marioSanchez,
      name: "Mario Sanchez"
    },
    publishedAt: "2022-10-18T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_5.webp"),
    categories: [
      {
        title: "PERSONAL GROWTH",
        color: "green"
      }
    ],
    title:
      "The Rise of Artificial Intelligence and the Future of Humans",
    author: {
      image: joshuaWood,
      name: "Joshua Wood"
    },
    publishedAt: "2022-10-18T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_6.webp"),
    categories: [
      {
        title: "PERSONAL GROWTH",
        color: "green"
      }
    ],
    title:
      "10 Simple Practices That Will Help You Get 1% Better Every Day",

    author: {
      image: erikaOliver,
      name: "Erika Oliver"
    },
    publishedAt: "2022-10-04T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_7.webp"),
    categories: [
      {
        title: "DESIGN",
        color: "blue"
      }
    ],
    title:
      "Every Artist has to see the Amazing Pictures on the Internet",
    author: {
      image: marioSanchez,
      name: "Mario Sanchez"
    },
    publishedAt: "2022-10-02T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_8.webp"),
    categories: [
      {
        title: "TECHNOLOGY",
        color: "blue"
      }
    ],
    title: "How Technology Evolved Under the Bright Sun of Universe",
    author: {
      image: erikaOliver,
      name: "Erika Oliver"
    },
    publishedAt: "2022-09-30T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_9.webp"),
    categories: [
      {
        title: "TRAVEL",
        color: "orange"
      }
    ],
    title: "Lessons Of Happiness I learned from a Mountain Village",
    author: {
      image: joshuaWood,
      name: "Joshua Wood"
    },
    publishedAt: "2022-09-25T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_10.webp"),
    categories: [
      {
        title: "LIFESTYLE",
        color: "purple"
      }
    ],
    title: "There’s Nothing New About Undermining Women’s Autonomy",
    author: {
      image: erikaOliver,
      name: "Erika Oliver"
    },
    publishedAt: "2022-09-23T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_11.webp"),
    categories: [
      {
        title: "TECHNOLOGY",
        color: "blue"
      }
    ],
    title: "Escape Fantasies of the Tech Billionaires",
    author: {
      image: erikaOliver,
      name: "Erika Oliver"
    },
    publishedAt: "2022-09-21T14:34:32.999Z"
  },
  {
    mainImage: require("../public/assets/images/secondaryPosts/secondaryPosts_12.webp"),
    categories: [
      {
        title: "PERSONAL GROWTH",
        color: "green"
      }
    ],
    title: "Four Ways to Find Meaning in Life",
    author: {
      image: marioSanchez,
      name: "Mario Sanchez"
    },
    publishedAt: "2022-09-14T14:34:32.999Z"
  }
];

export { mainPosts, secondaryPosts };
