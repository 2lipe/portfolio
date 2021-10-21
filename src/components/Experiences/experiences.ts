import { Experience } from 'models/interfaces';

export const experiences: Experience[] = [
  {
    company: 'Itaú Unibanco',
    jobTitle: 'Backend Software Engineer',
    startDate: 'Sep/21',
    description: 'Development .NET Core, and .NET Framework',
    techs: [{ title: '.NET' }, { title: 'AWS' }, { title: 'SQLServer' }],
  },
  {
    company: 'Medicine Innovation Lab - MedSênior',
    jobTitle: 'Full-Stack Developer',
    startDate: 'Sep/20',
    endDate: 'Sep/21',
    description: 'Development in React.js, .NET, and React Native.',
    techs: [
      { title: 'React.js' },
      { title: 'Styled Components' },
      { title: 'NextJS' },
      { title: '.NET' },
      { title: 'React Native' },
      { title: 'Typescript' },
      { title: 'MongoDB' },
      { title: 'Docker' },
      { title: 'Azure' },
      { title: 'SQLServer' },
    ],
  },
  {
    company: 'uDNA',
    jobTitle: 'Frontend Developer',
    startDate: 'Mar/20',
    endDate: 'Sep/20',
    description: 'Development in React.js, Gatsby, React Native.',
    techs: [{ title: 'React.js' }, { title: 'React Native' }, { title: 'Gatsby' }],
  },
];
