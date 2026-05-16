export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: "skincare" | "haircare" | "formulation" | "business";
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  lessons: number;
  image: string;
  price: {
    naira: number;
    dollar: number;
  };
  instructor: {
    name: string;
    title: string;
    bio: string;
  };
  modules: Module[];
  certification: {
    title: string;
    description: string;
    validFor: string;
  };
  bookSource?: string;
  isPublished: boolean;
  launchDate?: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  practicalLab?: boolean;
}

export const courses: Course[] = [
  {
    id: "glow-from-within-foundation",
    slug: "glow-from-within-foundation",
    title: "Glow From Within",
    subtitle: "A Clean Beauty Journey to Confidence and Care",
    description: "Your foundational course in understanding skin science, building effective routines, and embracing your natural beauty. Based on Elizabeth's bestselling book, this course takes you from confusion to confidence.",
    category: "skincare",
    level: "beginner",
    duration: "4 weeks",
    lessons: 24,
    image: "/images/courses/glow-from-within.jpg",
    price: {
      naira: 25000,
      dollar: 55
    },
    instructor: {
      name: "Elizabeth Aderibigbe",
      title: "Founder, Zabeth Botanical House of Beauty",
      bio: "Content writer, educator, and natural beauty entrepreneur with a passion for healing, honesty, and helping women glow from within."
    },
    modules: [
      {
        id: 1,
        title: "Understanding Your Skin",
        description: "The foundation of all skincare - knowing what you're caring for",
        topics: [
          "The 4 basic skin types and how to identify yours",
          "Common skin concerns for African women",
          "Skin typing test and analysis",
          "Myth-busting: Oily skin doesn't need moisturizer"
        ],
        duration: "3 days"
      },
      {
        id: 2,
        title: "The Foundations of Skincare",
        description: "The three essential steps that form the foundation of solid skincare",
        topics: [
          "Cleanse: Choosing the right cleanser for your skin type",
          "Moisturize: Why every skin type needs hydration",
          "Protect: SPF is non-negotiable, even for melanin-rich skin",
          "Building your simple daily routine"
        ],
        duration: "4 days"
      },
      {
        id: 3,
        title: "Ingredients That Work",
        description: "Understanding powerful natural ingredients and their benefits",
        topics: [
          "Turmeric, Honey, Aloe Vera, Shea Butter",
          "Natural oils that balance and nourish",
          "Reading ingredient labels like a pro",
          "Zabeth Glow Recipes - DIY treatments"
        ],
        duration: "5 days",
        practicalLab: true
      },
      {
        id: 4,
        title: "The African Woman & Her Skin",
        description: "Celebrating and caring for melanin-rich skin",
        topics: [
          "Why melanin-rich skin needs special care",
          "Common struggles: hyperpigmentation, hormonal acne, sensitivity",
          "Natural ingredients that support African skin",
          "What to avoid: harmful ingredients and practices"
        ],
        duration: "4 days"
      },
      {
        id: 5,
        title: "Building Confidence Through Skincare",
        description: "The emotional journey of self-care",
        topics: [
          "Your skin, your pace - no rush to perfection",
          "How skincare builds confidence",
          "Glow affirmations and mindset shifts",
          "Creating your personal glow ritual"
        ],
        duration: "4 days"
      },
      {
        id: 6,
        title: "Your Glow Journal",
        description: "Documenting your journey and maintaining results",
        topics: [
          "Tracking your skin's progress",
          "Adjusting routines seasonally",
          "Building long-term habits",
          "Final certification project"
        ],
        duration: "4 days"
      }
    ],
    certification: {
      title: "Certified Glow Guide",
      description: "Recognition of completion of foundational skincare education",
      validFor: "Lifetime"
    },
    bookSource: "Glow From Within",
    isPublished: true,
    launchDate: "2024-03-01"
  },
  {
    id: "crowned-in-confidence",
    slug: "crowned-in-confidence",
    title: "Crowned in Confidence",
    subtitle: "A Natural Hair Care Journey for African Women",
    description: "A comprehensive guide to understanding, loving, and caring for natural African hair. From science to soul, learn to crown yourself with confidence.",
    category: "haircare",
    level: "beginner",
    duration: "6 weeks",
    lessons: 36,
    image: "/images/courses/crowned-in-confidence.jpg",
    price: {
      naira: 30000,
      dollar: 65
    },
    instructor: {
      name: "Elizabeth Aderibigbe",
      title: "Founder, Zabeth House of Beauty",
      bio: "Natural beauty entrepreneur who transformed her own hair struggles into a mission to help African women love their crowns."
    },
    modules: [
      {
        id: 1,
        title: "Understanding African Hair",
        description: "The science and beauty of textured hair",
        topics: [
          "Key characteristics of African hair",
          "Hair typing vs. Hair needs",
          "Porosity, density, and texture",
          "Myth check: African hair DOES grow"
        ],
        duration: "5 days"
      },
      {
        id: 2,
        title: "The Hair-Scalp Connection",
        description: "Healthy hair starts at the roots",
        topics: [
          "Your scalp is skin - treat it like it matters",
          "Understanding the follicle",
          "Common scalp issues and solutions",
          "Natural scalp care techniques"
        ],
        duration: "5 days"
      },
      {
        id: 3,
        title: "Moisture, Oils & Sealing",
        description: "The art of keeping natural hair hydrated",
        topics: [
          "What is moisture, really?",
          "The LCO/LOC method",
          "Best oils and butters for African hair",
          "Sealing techniques for length retention"
        ],
        duration: "6 days",
        practicalLab: true
      },
      {
        id: 4,
        title: "Hair Growth from the Inside Out",
        description: "Nutrition, wellness, and holistic hair care",
        topics: [
          "What your hair is made of",
          "Nutrients that feed your hair",
          "Herbal hair boosters",
          "Stress, sleep, and hair health"
        ],
        duration: "5 days"
      },
      {
        id: 5,
        title: "Routines & Protective Styling",
        description: "Building consistency and protecting your crown",
        topics: [
          "The 3 key routine pillars",
          "Weekly wash day mastery",
          "Protective styles that work",
          "Children's natural hair care"
        ],
        duration: "6 days",
        practicalLab: true
      },
      {
        id: 6,
        title: "DIY Recipes & Product Breakdown",
        description: "Create your own hair care products",
        topics: [
          "Shea Butter Deep Moisture Cream",
          "Avocado Hair Mask",
          "Aloe Vera Leave-In Spray",
          "Fenugreek Growth Oil"
        ],
        duration: "5 days",
        practicalLab: true
      },
      {
        id: 7,
        title: "Building Confidence in Your Crown",
        description: "The emotional and cultural journey",
        topics: [
          "Healing hair insecurity",
          "From comparison to curiosity",
          "Your hair confidence checklist",
          "Affirmations for your crown"
        ],
        duration: "4 days"
      }
    ],
    certification: {
      title: "Certified Crown Care Specialist",
      description: "Recognition of expertise in natural African hair care",
      validFor: "Lifetime"
    },
    bookSource: "Crowned in Confidence",
    isPublished: true,
    launchDate: "2024-06-01"
  },
  {
    id: "organic-cosmetology-phase1",
    slug: "organic-cosmetology-phase1",
    title: "Organic Cosmetology - Phase 1",
    subtitle: "Foundations of Skin Science",
    description: "The first phase of professional organic cosmetology training. Understand skin biology, barrier function, and African skin considerations to begin your journey as a formulator.",
    category: "formulation",
    level: "beginner",
    duration: "2 weeks",
    lessons: 12,
    image: "/images/courses/organic-cosmetology-p1.jpg",
    price: {
      naira: 35000,
      dollar: 75
    },
    instructor: {
      name: "Elizabeth Aderibigbe",
      title: "Lead Formulator, Zabeth Organics",
      bio: "Professional formulator and educator helping serious skincare creators understand the science behind organic beauty."
    },
    modules: [
      {
        id: 1,
        title: "Skin as a Living Organ",
        description: "Understanding the largest organ of the human body",
        topics: [
          "What skin really is - beyond decoration",
          "Layers of the skin: Epidermis and Dermis",
          "The skin barrier - your best friend",
          "African skin considerations"
        ],
        duration: "3 days"
      },
      {
        id: 2,
        title: "Skin Types vs. Skin Conditions",
        description: "The critical difference every formulator must know",
        topics: [
          "Skin types (genetic): Dry, Oily, Combination, Normal",
          "Skin conditions (changeable): Acne, Hyperpigmentation, Sensitivity",
          "Why treating conditions as types is a mistake",
          "Organic care principles"
        ],
        duration: "3 days"
      },
      {
        id: 3,
        title: "Basic Ingredient Categories",
        description: "Understanding functions, not just names",
        topics: [
          "Oils: Seal moisture, support barrier",
          "Humectants: Attract water into skin",
          "Emollients: Soften and smooth",
          "Balanced formulation thinking"
        ],
        duration: "4 days",
        practicalLab: true
      },
      {
        id: 4,
        title: "Phase 1 Practice",
        description: "Applying knowledge through observation",
        topics: [
          "Observe your own skin type and condition",
          "Read ingredient lists like a professional",
          "Write notes in your own words",
          "Turn knowledge into authority"
        ],
        duration: "2 days"
      }
    ],
    certification: {
      title: "Organic Cosmetology Phase 1 Graduate",
      description: "Foundation level certification in skin science",
      validFor: "2 years"
    },
    isPublished: true,
    launchDate: "2024-09-01"
  },
  {
    id: "organic-cosmetology-phase2",
    slug: "organic-cosmetology-phase2",
    title: "Organic Cosmetology - Phase 2",
    subtitle: "Ingredient Science & Formulation Thinking",
    description: "Move beyond trends and start formulating with intention, safety, and confidence. Learn carrier oils, butters, herbs, and the mindset of a professional formulator.",
    category: "formulation",
    level: "intermediate",
    duration: "3 weeks",
    lessons: 18,
    image: "/images/courses/organic-cosmetology-p2.jpg",
    price: {
      naira: 45000,
      dollar: 95
    },
    instructor: {
      name: "Elizabeth Aderibigbe",
      title: "Lead Formulator, Zabeth Organics",
      bio: "Professional formulator teaching intentional, safe, and confident formulation practices."
    },
    modules: [
      {
        id: 1,
        title: "Ingredient Categories Deep Dive",
        description: "Every ingredient has a job",
        topics: [
          "Carrier oils: Nourish and protect",
          "Butters: Deep nourishment and barrier repair",
          "Humectants: Drawing water in",
          "Emollients: Smoothing and softening"
        ],
        duration: "5 days"
      },
      {
        id: 2,
        title: "Herbs & Botanicals",
        description: "Organic power in plants",
        topics: [
          "Anti-inflammatory and antimicrobial herbs",
          "Proper infusion and extraction methods",
          "Aloe, Neem, Hibiscus, Turmeric",
          "Safety and efficacy"
        ],
        duration: "4 days",
        practicalLab: true
      },
      {
        id: 3,
        title: "Essential Oils",
        description: "Potent allies requiring respect",
        topics: [
          "Purpose and benefits",
          "Safety rules: Always dilute",
          "Lavender, Tea Tree, Rosemary",
          "Avoiding overuse and damage"
        ],
        duration: "4 days",
        practicalLab: true
      },
      {
        id: 4,
        title: "Formulation Philosophy",
        description: "Thinking like a formulator",
        topics: [
          "Shades of natural: Pure, Derived, Nature-Identical",
          "Simple, purpose-driven, balanced formulations",
          "Questions to ask before formulating",
          "Professional approach marking"
        ],
        duration: "4 days"
      },
      {
        id: 5,
        title: "Basic Product Types",
        description: "Understanding formulation categories",
        topics: [
          "Oil-based products: Easy, long shelf life",
          "Water-based products: Hydrating, need preservation",
          "Emulsions: Advanced combination",
          "Hygiene & Safety: Non-negotiable"
        ],
        duration: "5 days",
        practicalLab: true
      }
    ],
    certification: {
      title: "Organic Cosmetology Phase 2 Graduate",
      description: "Intermediate certification in ingredient science",
      validFor: "2 years"
    },
    isPublished: true,
    launchDate: "2024-10-01"
  },
  {
    id: "organic-cosmetology-complete",
    slug: "organic-cosmetology-complete",
    title: "Organic Cosmetology Complete",
    subtitle: "Phases 1-5: From Science to Mastery",
    description: "The complete professional certification covering all 5 phases of organic cosmetology. From skin science to teaching authority, become a master formulator and educator.",
    category: "formulation",
    level: "advanced",
    duration: "12 weeks",
    lessons: 72,
    image: "/images/courses/organic-cosmetology-complete.jpg",
    price: {
      naira: 150000,
      dollar: 325
    },
    instructor: {
      name: "Elizabeth Aderibigbe",
      title: "Master Formulator & Educator",
      bio: "Founder of Zabeth Botanical House of Beauty and creator of the Organic Cosmetology curriculum."
    },
    modules: [
      {
        id: 1,
        title: "Phase 1: Foundations of Skin Science",
        description: "Understanding how skin truly functions",
        topics: ["Skin biology", "Barrier function", "African skin", "Skin types vs conditions"],
        duration: "2 weeks"
      },
      {
        id: 2,
        title: "Phase 2: Ingredient Science",
        description: "Beyond trends to intentional formulation",
        topics: ["Carrier oils & butters", "Herbs & botanicals", "Essential oils", "Formulation thinking"],
        duration: "3 weeks"
      },
      {
        id: 3,
        title: "Phase 3: Skin Conditions & Routine Design",
        description: "Addressing real concerns safely and effectively",
        topics: ["Hyperpigmentation", "Acne", "Dryness", "Sensitive skin", "Routine design"],
        duration: "3 weeks"
      },
      {
        id: 4,
        title: "Phase 4: Product Development & Brand Professionalism",
        description: "Turning knowledge into trusted products",
        topics: ["Product development thinking", "Safety & testing", "Brand professionalism", "Documentation & ethics"],
        duration: "2 weeks"
      },
      {
        id: 5,
        title: "Phase 5: Teaching, Authority & Legacy",
        description: "Becoming a trusted voice",
        topics: ["From learner to educator", "Teaching simply", "Building authority", "Community & impact"],
        duration: "2 weeks"
      }
    ],
    certification: {
      title: "Certified Organic Cosmetologist (COC)",
      description: "Professional certification in organic skincare formulation and education",
      validFor: "3 years"
    },
    isPublished: false,
    launchDate: "2025-01-15"
  }
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};

export const getCoursesByCategory = (category: Course["category"]): Course[] => {
  return courses.filter(course => course.category === category);
};

export const getPublishedCourses = (): Course[] => {
  return courses.filter(course => course.isPublished);
};

export const categories = [
  { id: "all", name: "All Courses", count: courses.filter(c => c.isPublished).length },
  { id: "skincare", name: "Skincare", count: courses.filter(c => c.category === "skincare" && c.isPublished).length },
  { id: "haircare", name: "Hair Care", count: courses.filter(c => c.category === "haircare" && c.isPublished).length },
  { id: "formulation", name: "Formulation", count: courses.filter(c => c.category === "formulation" && c.isPublished).length }
] as const;