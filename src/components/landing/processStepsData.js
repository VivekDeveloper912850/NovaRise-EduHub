import { BadgeCheck, BookOpen, ClipboardPen, FolderKanban, MousePointerClick, Search } from 'lucide-react'

const processSteps = [
  {
    id: 'explore-programs',
    step: 1,
    title: 'Explore Programs',
    description: 'Browse available programs and discover the skills you want to develop.',
    icon: Search,
  },
  {
    id: 'choose-a-program',
    step: 2,
    title: 'Choose a Program',
    description: 'Review the program details, topics, and learning approach before choosing.',
    icon: MousePointerClick,
  },
  {
    id: 'apply-now',
    step: 3,
    title: 'Apply Now',
    description: 'Submit your interest through the simple application process.',
    icon: ClipboardPen,
  },
  {
    id: 'start-learning',
    step: 4,
    title: 'Start Learning',
    description: 'Begin your structured learning journey with organized resources and guidance.',
    icon: BookOpen,
  },
  {
    id: 'build-practical-projects',
    step: 5,
    title: 'Build Practical Projects',
    description: 'Apply your knowledge by working on practical projects and real-world tasks.',
    icon: FolderKanban,
  },
  {
    id: 'complete-your-program',
    step: 6,
    title: 'Complete Your Program',
    description: 'Complete the learning requirements and move forward with your developed skills.',
    icon: BadgeCheck,
  },
]

export default processSteps