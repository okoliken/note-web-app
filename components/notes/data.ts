import { Note } from "@/types/notes";

const notes: Note[] = [
    {
        id: "1",
        title: "React Performance Optimization",
        tags: ["ReactOptimization", "DevTechniques"],
        date: "29 Oct 2024",
        description: "Deep dive into memoization techniques, analyzing React.memo, useMemo, and useCallback to reduce unnecessary re-renders and improve application performance. Includes benchmarking strategies and real-world optimization patterns."
    },
    {
        id: "2",
        title: "Japan Travel Planning",
        tags: ["TravelJapan", "PersonalTrip"],
        date: "28 Oct 2024",
        description: "Comprehensive itinerary for a 14-day trip to Japan, covering Tokyo, Kyoto, and Osaka. Detailed plans for cultural experiences, must-visit restaurants, budget tracking, and off-the-beaten-path attractions."
    },
    {
        id: "3",
        title: "Favorite Pasta Recipes",
        tags: ["CookingPasta", "RecipeCuisine"],
        date: "27 Oct 2024",
        description: "Collection of authentic Italian pasta recipes from different regions, including handmade pasta techniques, sauce variations, and wine pairing recommendations. Includes vegetarian and gluten-free adaptations."
    },
    {
        id: "4",
        title: "Weekly Workout Plan",
        tags: ["FitnessRoutine", "HealthWellness"],
        date: "25 Oct 2024",
        description: "Structured 6-day workout routine combining strength training, HIIT, and flexibility exercises. Includes progressive overload strategy, nutrition guidelines, and recovery techniques for optimal fitness progression."
    },
    {
        id: "5",
        title: "Meal Prep Ideas",
        tags: ["CookingPrep", "HealthyEating", "MealPlanning"],
        date: "12 Oct 2024",
        description: "Efficient meal preparation strategies for a busy lifestyle. Features 10 make-ahead recipes, nutritional breakdown, cost-effective shopping tips, and storage recommendations for maximum freshness."
    },
    {
        id: "6",
        title: "Tech Book Exploration",
        tags: ["PersonalDevelopment", "TechLearning"],
        date: "05 Oct 2024",
        description: "Curated reading list of cutting-edge technology books, including software architecture, machine learning, and emerging programming paradigms. Notes on key insights, implementation strategies, and personal reflections."
    },
    {
        id: "7",
        title: "Startup Ecosystem Insights",
        tags: ["StartupTrends", "TechInnovation"],
        date: "05 Oct 2024",
        description: "Comprehensive analysis of current startup trends, focusing on AI, blockchain, and sustainable tech innovations. Includes funding patterns, emerging technologies, and potential investment opportunities."
    },
    {
        id: "8",
        title: "Personal Development Roadmap",
        tags: ["CareerGrowth", "ProfessionalSkills"],
        date: "05 Oct 2024",
        description: "Strategic 12-month personal growth plan covering skill development, networking strategies, online courses, and professional certifications to accelerate career growth in tech industry."
    },
    {
        id: "9",
        title: "Open Source Contribution Guide",
        tags: ["OpenSourceDev", "GitHubContribution"],
        date: "05 Oct 2024",
        description: "Detailed guide to effectively contributing to open-source projects, including GitHub etiquette, finding beginner-friendly projects, writing quality pull requests, and building a strong developer portfolio."
    }
];

export default notes;