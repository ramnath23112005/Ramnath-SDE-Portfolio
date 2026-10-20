/**
 * Central profile configuration.
 *
 * EDIT THIS FILE to personalize the site.
 * Leave any link as an empty string ("") to hide its action — components
 * validate every URL, so nothing on the site will ever be a dead or fake link.
 */
export interface CodingProfile {
  label: string
  url: string
}

export interface Profile {
  name: string
  monogram: string
  siteName: string
  headline: string
  location: string
  college: string
  degree: string
  academicYear: string
  summary: string
  email: string
  githubUrl: string
  linkedinUrl: string
  codingProfiles: CodingProfile[]
  availability: string
  resumeUrl: string
  currentFocus: string[]
}

export const profile: Profile = {
  name: 'Ramnath G.K',
  monogram: 'RG',
  siteName: 'Ramnath G.K',
  headline: 'EE Student · Software Engineering · Delhi, India',
  location: 'Delhi, India',
  college: "Bharati Vidyapeeth's College of Engineering (BVCOE), Delhi",
  degree: 'Electrical Engineering',
  academicYear: 'Third year',
  summary:
    'Electrical Engineering student building a foundation in software engineering and computer systems — from algorithms and operating systems to parallel computing and GPU performance.',
  email: 'Ramnathgk60@gmail.com',
  githubUrl: 'https://github.com/ramnath23112005',
  linkedinUrl: 'https://www.linkedin.com/in/ramnathgk/',
  codingProfiles: [
    { label: 'NeetCode', url: 'https://neetcode.io/user/FierceHutt516' },
    { label: 'LeetCode · RamNathGK', url: 'https://leetcode.com/u/RamNathGK/' },
    {
      label: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/profile/ramnatxtw1?tab=activity',
    },
  ],
  availability: 'Open to SDE Internships',
  resumeUrl: '',
  currentFocus: [
    'Problem solving in C++',
    'Core computer science',
    'Systems-level understanding',
    'Parallel programming',
  ],
}
