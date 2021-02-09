export interface RecipeData {
    aggregateLikes: number;
    analyzedInstructions: Instructions[];
    cheap: boolean;
    creditsText: string;
    cuisines: string[];
    dairyFree: boolean;
    diets: string[];
    dishTypes: string[];
    extendedIngredients: Ingredients[];
    gaps: boolean;
    glutenFree: boolean;
    healthScore: number;
    id: number;
    image: string;
    imageType: string;
    instructions: string;
    license: string;
    lowFodmap: boolean;
    occasions: string[];
    originalId: number | null;
    pricePerServing: number;
    readyInMinutes: number;
    servings: number;
    sourceName: string;
    sourceUrl: string;
    spoonacularScore: number;
    spoonacularSourceUrl: string;
    summary: string;
    sustainable: boolean;
    title: string;
    vegan: boolean;
    vegetarian: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    weightWatcherSmartPoints: number;
};

export interface ExtendedRecipeData extends RecipeData {
    winePairing?: Wine | {};
};

export interface Ingredients {
    aisle: string;
    amount: number;
    consistency: string;
    id: number;
    image: string;
    measures: {
        metric: {
        amount: number;
        unitShort: string;
        unitLong: string;
        };
        us: {
        amount: number;
        unitShort: string;
        unitLong: string;
        };
    };
    meta: any[];
    metaInformation: any[];
    name: string;
    original: string;
    originalName: string;
    originalString: string;
    unit: string;
};

export interface Instructions {
    name: string | undefined;
    steps: {
        equipment: StepsMeta[];
        ingredients: StepsMeta[];
        number: number;
        step: string;
    }[];
};

// (INFO) Helpers

type StepsMeta = {
    id: number;
    image: string;
    localizedName: string;
    name: string;
};

type Wine = {
    pairedWines: string[];
    pairingText: string;
};

export enum Units {
    TABLESPOON = "tablespoon",
    TABLESPOON_PL = "tablespoons",
    TEASPOON = "teaspoon",
    TEASPOON_PL = "teaspoons",
    LITER = "liter",
    LITER_PL = "liters",
    GRAM = "gram",
    GRAM_PL = "grams",
    MILILITER = "milliliter",
    MILILITER_PL = "milliliters",
    CUP = "cup",
    CUP_PL = "cups",
    INCH = "inch",
    INCH_PL = "inches",
    CLOVE = "clove",
    CLOVE_PL = "cloves",
    SERVING = "serving",
    SERVING_PL = "servings",
    OUNCE = "ounce",
    OUNCE_PL = "ounces",
};