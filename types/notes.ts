export interface Note {
    id: string | number;
    title: string;
    tags: string[];
    date: string | Date | null;
    description: string;
}
