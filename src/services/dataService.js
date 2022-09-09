export default class DataService {
  _data = {
    projectRepo: 'https://github.com/bhsuarez/brindows',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Hi! My name is Brian and I am currently an IT Manager at CancerIQ. I made this website to showcase my skills as a full stack engineer.",
            "This is the first React app I have ever made, so I hope you like it! I plan to include not just my professional work, but also my personal work. Take a listen to a song I wrote with my best friends in a group called Audiences.",
            'Currenly I live in Chicago and enjoy all types of music, art, and food!',
            'Salutations!',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
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
                'Maturing IT onboarding and offboarding workflows for remote employees',
                'Established an IT ticketing helpdesk',
                'Migrated critical business applications from username/password authentication to SAML',
                'Authored data and information technology policies and procedures',
                'Set up HIPAA compliance security control enforcement',
                'Technologies used: Jira, Slack, Dropbox, Office 365, Jamf, InTune',
              ],
            },
            {
              jobTitle: 'IT Squad Lead',
              company: 'SpotHero',
              location: 'Chicago',
              period: 'DEC 2021 – MAR 2022',
              accomplishments: [
                'Maturing IT onboarding and offboarding workflows for remote employees',
                'Established an IT ticketing helpdesk',
                'Migrated critical business applications from username/password authentication to SAML',
                'Authored data and information technology policies and procedures',
                'Set up HIPAA compliance security control enforcement',
                'Technologies used: Jira, Slack, Dropbox, Office 365, Jamf, InTune',
              ],
            },
            {
              jobTitle: 'Senior IT Engineer',
              company: 'SpotHero',
              location: 'Chicago',
              period: 'SEP 2019 – DEC 2021',
              accomplishments: [
                'One',
                'Two',
                'Three',
                'Four',
              ],
            },
            {
              jobTitle: 'Sr. Distributed Support Specialist',
              company: 'Northwestern University',
              location: 'Evanston, IL',
              period: '2015 - 2019',
              accomplishments: [
                'One',
                'Two',
                'Three',
                'Four',
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
        icon: 'progman_11',
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
              name: 'Linux',
              progress: 80,
            },
            {
              name: 'Python',
              progress: 70,
            },
            {
              name: 'AWS/Azure',
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
          ],
          soft: 'Empathy, Leadership, Public Speaking, Written and Verbal Communication',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
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
              name: 'FaInstagram',
              link: 'https://www.instagram.com/bhsuarez',
            },
            {
              name: 'FaTwitter',
              link: 'https://twitter.com/bhsuarez',
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
