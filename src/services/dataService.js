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
            "Hi! My name is Brian and I am currently an IT Manager at CancerIQ.",
            "You can find my resume, skills, and ways to contact me by using the Explorer program here.",
            "Also, you can take a listen to a song I wrote with my best friends in a group called Audiences. We are also available on all streaming services.",
            'Currently I live in Chicago and enjoy all types of music, art, and food! Go Bulls!',
            'Salutations!',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad',
        content: {
          resumeLink:
            'https://drive.google.com/file/d/1WpFyhLs4jOX9czxFhyHmmT1mVKrarfe8/view?usp=sharing',
          workExperience: [
            {
              jobTitle: 'IT Manager',
              company: 'CancerIQ',
              location: 'Chicago',
              period: 'MAR 2022 – PRESENT',
              accomplishments: [
                'Matured IT onboarding and offboarding workflows for remote employees',
                'Established an IT ticketing helpdesk system using Jira',
                'Migrated critical business applications from username/password authentication to SAML',
                'Authors and reviews data and information technology policies and procedures',
                'Enforced HIPAA compliance endpoint security controls',
                'Technologies used: Slack, Dropbox, Office 365, Jamf, InTune, Azure',
              ],
            },
            {
              jobTitle: 'IT Squad Lead',
              company: 'SpotHero',
              location: 'Chicago',
              period: 'DEC 2021 – MAR 2022',
              accomplishments: [
                'Wrote IT an onboarding off boarding web app using Python and Postgres to enable People Team to drive IT workflows',
                'Collaborated on executing IT security initiatives for entire company',
                'Contributed to the integrations squad by troubleshooting product issues for parking operators',
                'Mentored and trained junior staff',
                'Negotiated contracts with third-party SaaS',
                'Technologies used: Python, PostgreSQL, retool, Javascript, Concourse'
              ],
            },
            {
              jobTitle: 'Senior IT Engineer',
              company: 'SpotHero',
              location: 'Chicago',
              period: 'SEP 2019 – DEC 2021',
              accomplishments: [
                'Provided world class IT support to entire company during high growth',
                'Enabled remote employees during COVID through the use of accessible technology',
                'Established baseline security policies and procedures',
                'Migrated legacy Wordpress sites to SSO authentication',
                'Acted as a contributor to the SecOps and DevOps squads',
                'Technologies used: Wordpress, Confluence, Jira, Workspace ONE, Zoom, Google Workspace'
              ],
            },
            {
              jobTitle: 'Sr. Distributed Support Specialist',
              company: 'Northwestern University',
              location: 'Evanston, IL',
              period: '2015 - 2019',
              accomplishments: [
                'Managed office technology in university offices',
                'Provided white-glove technical support for Univerity executives',
                'Acted as the IT security liason, responsible for incident response related to endpoints',
                'Technologies used: Cisco, Active Directory, Qualys'
              ],
            },
          ],
          education: [
            {
              credit: 'Bachelor of Information Systems',
              place: 'Northwestern University',
              gpa: '3.7/4.0 GPA',
              period: '2015-2020',
            },
          ],
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
              name: 'Cloud Networking',
              progress: 90,
            },
            {
              name: 'iOS & Android',
              progress: 90,
            },
            {
              name: 'Python',
              progress: 90,
            },
            {
              name: 'Django',
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
            'If you want to contact me, please do not hesistate! ',
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
              link: 'https://infosec.exchange/@bhsuarez',
            },
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
