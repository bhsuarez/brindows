export default class DataService {
  _data = {
    projectRepo: 'https://github.com/bhsuarez/brindows',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'user',
        content: {
          paragraphs: [
            "Hi! My name is Brian and I am currently an IT Manager at SpotHero.",
            "You can find my resume, skills, and ways to contact me here.",
            "Also, you can take a listen to a song I wrote with my best friends in a group called Audiences. We are also available on all streaming services.",
            'Currently I live in Chicago and enjoy all types of music, art, and food!',
            'Salutations!',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad',
        content: {
  "resumeLink": "https://drive.google.com/file/d/1h57v4It1PIVqoLuZfP49AWnWmYDuyQAl/view?usp=share_link",
  "profile": "A security-focused and empathetic IT leader with over a decade of diverse experience in higher education, municipal, small business, health, and transportation startups. Skilled in aligning technology with business needs, driving cybersecurity initiatives, and leading teams in both strategic and hands-on roles. Passionate about implementing scalable IT solutions, fostering innovation, and delivering exceptionally secure user experiences.",
  "keyAchievements": [
    "Recognized as a 'Best Tech Manager' Finalist by Tech in Motion Chicago; featured speaker at the 'Best Places to Work Chicago' event, celebrating IT leadership and innovation.",
    "Directed a distributed IT team across the U.S. and Canada, achieving $30,000 in annual cost savings through vendor management and tool consolidation.",
    "Spearheaded a successful SOC 2 Type 2 audit implementation for a healthcare startup, overseeing security infrastructure, including SSO, MDM, and compliance policies.",
    "Automated manual IT processes, saving 3 hours per week in onboarding/offboarding tasks through script-driven workflows.",
    "Delivered technical support for C-level executives, managing critical security incidents and high-priority escalations with precision."
  ],
  "workExperience": [
    {
      "jobTitle": "IT Manager",
      "company": "SpotHero",
      "location": "Chicago",
      "period": "NOV 2023 – PRESENT",
      "accomplishments": [
        "Leads a distributed IT team across the U.S. and Canada, driving operational excellence and implementing automated workflows that helped reduce onboarding and offboarding time by 3 hours weekly.",
        "Spearheads IT strategy, aligning technology initiatives with company goals, focusing on security, scalability, and user satisfaction.",
        "Directs IT compliance efforts for PCI DSS, maintaining industry standards and certification.",
        "Contributes to drafting and refining SOC 2 Type 2 policies, aligning IT operations with compliance standards and enhancing the organization’s security posture.",
        "Developed and deployed a role-based access control (RBAC) system for company-wide SaaS platforms, enhancing security and streamlining access."
      ]
    },
    {
      "jobTitle": "IT Manager",
      "company": "CancerIQ",
      "location": "Chicago",
      "period": "MAR 2022 – NOV 2023",
      "accomplishments": [
        "Established the company’s IT infrastructure and processes as the first IT hire.",
        "Led critical components of SOC 2 Type 2 audit, including implementing MDM solutions, SSO configurations, and creating security policies.",
        "Developed and delivered HIPAA training content, improving compliance and staff awareness.",
        "Negotiated contract terms and secured favorable pricing with IT vendors."
      ]
    },
    {
      "jobTitle": "IT Squad Lead",
      "company": "SpotHero",
      "location": "Chicago",
      "period": "DEC 2021 – MAR 2022",
      "accomplishments": [
        "Directed a distributed team of IT engineers across Canada and the U.S., ensuring high performance and collaboration.",
        "Designed and implemented corporate IT strategy, focusing on operational efficiency and security.",
        "Delivered a web application using Python for SaaS account provisioning and established a robust RBAC system."
      ]
    },
    {
      "jobTitle": "Senior IT Engineer",
      "company": "SpotHero",
      "location": "Chicago",
      "period": "SEP 2019 – DEC 2021",
      "accomplishments": [
        "Enabled remote employees during COVID through accessible technology.",
        "Established baseline security policies and procedures.",
        "Migrated legacy Wordpress sites to SSO authentication."
      ]
    },
    {
      "jobTitle": "Senior Distributed Support Specialist",
      "company": "Northwestern University",
      "location": "Evanston, IL",
      "period": "2015 - 2019",
      "accomplishments": [
        "Provided white-glove technical support for university executives.",
        "Acted as the IT security liaison, responsible for incident response related to endpoints."
      ]
    }
  ],
   "speakingEngagements": [
      {
        "title": 'Best Places to Work Chicago',
        "description": 'Featured speaker at the "Best Places to Work Chicago" event, celebrating IT leadership and innovation.',
        "date": '3 October 2024',
        "link": 'https://www.youtube.com/watch?v=Bc6Lb1y1lr8'
      },
    ],
  "technicalSkills": [
    "Identity & Access Management: OneLogin SSO, AWS Identity Center, Google Cloud Identity",
    "Collaboration: Slack, Microsoft Teams, Google Workspace, Zoom Rooms",
    "Scripting: Python, Bash, PowerShell",
    "Compliance & Security: SOC 2, PCI DSS, Security awareness training"
  ],
  "certifications": [
    "CompTIA Security+",
    "CISSP (In Progress)"
  ],
  "education": [
    {
      "credit": "Bachelor of Information Systems",
      "place": "Northwestern University",
      "period": "2015-2020",
      "gpa": "3.7/4.0 GPA"
    }
  ],
  "citizenship": ["United States", "European Union"]
},
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'shell32_36',
        content: {
          hard: [
            {
              name: 'macOS',
              progress: 100,
            },
            {
              name: 'Windows',
              progress: 100,
            },
            {
              name: 'Mobile Device Management',
              progress: 90,
            },
            {
              name: 'Identity and Access Management',
              progress: 90,
            },
            {
              name: 'Single Sign On',
              progress: 90,
            },
            {
              name: 'Python',
              progress: 80,
            },
            {
              name: 'HTML/CSS',
              progress: 80,
            },
            {
              name: 'Javascript',
              progress: 80,
            },
            {
              name: 'Java',
              progress: 70,
            },
            {
              name: 'AWS',
              progress: 70,
            },
            {
              name: 'PostgreSQL',
              progress: 70,
            },
            {
              name: 'Docker',
              progress: 60,
            },
            {
              name: 'Terraform',
              progress: 60,
            },
          ],
          soft: 'Empathy, Leadership, Collaboration, Public Speaking, Creativity, Written and Verbal Communication',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'microsoft_exchange',
        content: {
          emailText:
            'If you want to contact me, please do not hesitate! ',
          email: 'me@bhsuarez.com',
          socialText: 'Or you can reach out through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/bhsuarez/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/bhsuarez',
            },
            {
              name: 'FaMastodon',
              link: 'https://suarez.social/@bh',
            }
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
