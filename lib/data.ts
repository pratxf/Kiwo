import {
  Atom,
  Bot,
  BrainCircuit,
  BookOpenText,
  ChartNoAxesCombined,
  Compass,
  Gift,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Subjects", href: "#subjects" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Parents", href: "#parents" },
];

export const trustItems = [
  { title: "Safe for Kids", icon: ShieldCheck },
  { title: "AI Guided", icon: Bot },
  { title: "Parent Dashboard", icon: ChartNoAxesCombined },
  { title: "Game-Based Learning", icon: Trophy },
];

export const subjectCards = [
  {
    title: "Math",
    description: "Snack-size number games, quizzes, and confidence-building practice.",
    image: "/images/panda-mascot.png",
    icon: Puzzle,
    accent: "from-cyan-100 to-blue-100",
  },
  {
    title: "Reading",
    description: "Story quests, read-aloud prompts, and phonics adventures that stick.",
    image: "/images/cat-mascot.png",
    icon: BookOpenText,
    accent: "from-violet-100 to-fuchsia-100",
  },
  {
    title: "Science",
    description: "Hands-on STEM missions that turn curiosity into experiments.",
    image: "/images/bear-mascot.png",
    icon: Atom,
    accent: "from-lime-100 to-emerald-100",
  },
  {
    title: "Logic",
    description: "Pattern puzzles and brain games that build problem-solving skills.",
    image: "/images/fox-mascot.png",
    icon: BrainCircuit,
    accent: "from-orange-100 to-amber-100",
  },
  {
    title: "Creativity",
    description: "Drawing, making, and mini-projects that spark expression and confidence.",
    image: "/images/rabbit-mascot.png",
    icon: Sparkles,
    accent: "from-teal-100 to-cyan-100",
  },
  {
    title: "AI Tutor",
    description: "A friendly guide that adapts hints, pacing, and encouragement in real time.",
    image: "/images/owl-mascot.png",
    icon: Bot,
    accent: "from-sky-100 to-indigo-100",
  },
];

export const appBullets = [
  "Adaptive quizzes and checkpoints",
  "Rewards, stars, and surprise badges",
  "Story-led reading missions",
  "STEM games and science challenges",
  "Progress streaks for kids and parents",
];

export const stemTopics = [
  { title: "Chemistry", blurb: "Mix colors, reactions, and mini-labs.", icon: Atom },
  { title: "Robotics", blurb: "Build logic through guided coding tasks.", icon: Bot },
  { title: "Math", blurb: "Visual puzzles that make concepts click.", icon: ChartNoAxesCombined },
  { title: "Space", blurb: "Explore planets, stars, and curious facts.", icon: Rocket },
];

export const steps = [
  {
    title: "Choose a subject",
    description: "Pick math, reading, science, or creativity based on your child's mood and goals.",
    icon: Compass,
  },
  {
    title: "Play learning missions",
    description: "Kids complete quick quests filled with stories, games, hints, and AI support.",
    icon: Star,
  },
  {
    title: "Earn rewards and track progress",
    description: "Celebrate streaks, unlock badges, and watch skill growth in the parent dashboard.",
    icon: Gift,
  },
];

export const testimonials = [
  {
    quote:
      "Kiwo is the first app my daughter opens without being reminded. The reading missions feel like stories, not homework.",
    name: "Maya R.",
    role: "Parent of a 7-year-old",
    color: "from-pink-100 to-orange-100",
  },
  {
    quote:
      "The parent dashboard gives us real insight into where our son is improving, especially in math confidence.",
    name: "David L.",
    role: "Parent of a 9-year-old",
    color: "from-cyan-100 to-blue-100",
  },
  {
    quote:
      "Kiwo balances play and structure beautifully. The AI hints keep frustration low and motivation high.",
    name: "Sara K.",
    role: "Parent of twins",
    color: "from-violet-100 to-fuchsia-100",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "$0",
    description: "A playful first step for curious learners.",
    features: ["2 subjects", "Limited weekly missions", "Parent snapshot", "7-day free access to Plus"],
    featured: false,
  },
  {
    name: "Plus",
    price: "$19",
    description: "Full access for one child with daily progress tools.",
    features: ["All subjects", "AI tutor guidance", "Rewards and streaks", "Detailed parent dashboard"],
    featured: true,
  },
  {
    name: "Family",
    price: "$29",
    description: "Built for households learning together.",
    features: ["Up to 4 child profiles", "Shared family dashboard", "Priority new content", "Weekly learning recaps"],
    featured: false,
  },
];
