export interface Course {
    name: string;
    description: string;
    imageUrl?: string;
    route?: string;
    course_outline?: CourseOutline
}

export interface CourseOutline {
    discipline_details: {};
}