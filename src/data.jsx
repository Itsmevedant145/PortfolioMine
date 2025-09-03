// data.js - All portfolio data centralized
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDatabase,
  FaNodeJs,
} from 'react-icons/fa';

export const skills = [
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, level: 85 },
  { name: 'React', icon: <FaReact className="text-cyan-500" />, level: 80 },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
  { name: 'Java', icon: <FaJava className="text-red-600" />, level: 70 },
  { name: 'SQL', icon: <FaDatabase className="text-gray-700" />, level: 65 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 50, learning: true },
];

export const projects = [
  {
    title: 'Finance Tracker',
    description: 'Full stack app to track income and expenses...',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    color: 'from-green-500 to-emerald-500',
    type: 'Full Stack Project',
    github: 'https://github.com/Itsmevedant145/Finance-Tracker-',
    live: 'https://finance-tracker-frontend-s41f.onrender.com'
  },
  {
    title: 'Habit & Goal Manager',
    description: 'Full stack habit and goal-setting app...',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    color: 'from-blue-500 to-indigo-500',
    type: 'Full Stack Project',
    github: 'https://github.com/Itsmevedant145/HABIT-AND-GOAL-MANAGER',
    live: 'https://habit-and-goal-manager-frontned.onrender.com'
  },
  {
    title: 'Basic E-commerce CRUD',
    description: 'Full stack product management app...',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    color: 'from-orange-500 to-red-500',
    type: 'Full Stack Project',
    github: 'https://github.com/Itsmevedant145/Web-Project'
    // ⛔ No live key here = no button will show
  }
];


export const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'University Name',
    period: '2020 - 2024',
    description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems'
  },
  {
    degree: 'Full Stack Web Development',
    school: 'Online Bootcamp',
    period: '2023 - 2024',
    description: 'Intensive 6-month program covering modern web technologies and frameworks'
  }
];

export const achievements = [
  {
    title: 'Dean\'s List',
    description: '3 consecutive semesters',
    icon: '🏆'
  },
  {
    title: 'Coding Bootcamp Graduate',
    description: 'Top 10% of class',
    icon: '🎓'
  },
  {
    title: 'Open Source Contributor',
    description: '5+ contributions',
    icon: '🌟'
  },
  {
    title: 'Personal Projects',
    description: '10+ completed projects',
    icon: '💻'
  }
];

export const personalInfo = {
  name: 'Vedant Bhuskat',
  title: 'Junior Developer Ready to Learn & Grow',
  description: 'A passion for coding and building amazing web experiences. Eager to contribute to innovative projects and grow with your team!',
  email: 'vedantbhuskat2@gmail.com',
  phone: '+91 9699857376',
  linkedin: 'https://www.linkedin.com/in/vedant-bhuskat-664804267/',
  github: 'https://github.com/Itsmevedant145',
  location: 'Open to Relocation',
  availability: 'Available Immediately'
};