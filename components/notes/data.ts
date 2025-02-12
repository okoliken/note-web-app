export interface Note {
    id: string;
    title: string;
    tags: string[];
    date: string;
}

const notes: Note[] = [
    {
        id: "1",
        title: "React Performance Optimization",
        tags: ["React", "Dev"],
        date: "29 Oct 2024"
    },
    {
        id: "2",
        title: "Japan Travel Planning",
        tags: ["Travel", "Personal"],
        date: "28 Oct 2024"
    },
    {
        id: "3",
        title: "Favorite Pasta Recipes",
        tags: ["Cooking", "Recipes"],
        date: "27 Oct 2024"
    },
    {
        id: "4",
        title: "Weekly Workout Plan",
        tags: ["Fitness", "Health"],
        date: "25 Oct 2024"
    },
    {
        id: "5",
        title: "Meal Prep Ideas",
        tags: ["Cooking", "Health", "Recipes"],
        date: "12 Oct 2024"
    },
    {
        id: "6",
        title: "Reading List",
        tags: ["Personal", "Dev"],
        date: "05 Oct 2024"
    },
    {
        id: "7",
        title: "Reading List",
        tags: ["Personal", "Dev"],
        date: "05 Oct 2024"
    },
    {
        id: "8",
        title: "Reading List",
        tags: ["Personal", "Dev"],
        date: "05 Oct 2024"
    },
    {
        id: "9",
        title: "Reading List",
        tags: ["Personal", "Dev"],
        date: "05 Oct 2024"
    }
];

export default notes;