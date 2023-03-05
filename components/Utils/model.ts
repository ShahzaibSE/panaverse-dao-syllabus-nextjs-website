export interface Course {
    name: string;
    description: string;
    imageUrl?: string;
    route?: string;
    course_outline?: Array<CourseOutline>
}

export interface CourseOutline {
    title?: string;
    cardTitle: string;
    cardSubtitle?: string;
    cardDetailedText?: string;
    url?: string;
}

export interface AboutProfile {
    title: string;
    description: string;
    imageUrl: string;
    [x: string]:string;
}