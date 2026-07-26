import {Subject} from "@/Types";


export const MOCK_SUBJECTS: Subject[] = [

    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        description: "An introductory course covering the fundamental concepts of computer science and programming.",
        department: "CS",
        createdAt: new Date(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        description: "Advanced study of integration, sequences, series, and power series.",
        department: "Math",
        createdAt: new Date(),
    },
    {
        id: 3,
        code: "ENG102",
        name: "Literature and Composition",
        description: "A course focused on critical reading and writing through the study of various literary genres.",
        department: "English",
        createdAt: new Date(),
    }
];