export interface ResultData {
    baseUri: string;
    expires: number;
    isStale: boolean;
    number: number;
    offset: number;
    processingTimeMs: number;
    results: SearchRecipeData[];
    totalResults: number;
};

export interface SearchRecipeData {
    id: number;
    title: string;
    readyInMinutes: number; 
    servings: number;
    sourceUrl: string;
    openLicense: boolean;
    image: string;
};