
export interface FCourse {
    idx: string,
    id:string;
    titles: {
        description:string;
        longDescription: string;
    };
    iconUrl: string;
    uploadedImageUrl:string;
    courseListIcon: string;
    categories:string[];
    lessonsCount?:number;
    url: string;
    
}