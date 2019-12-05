export interface Application {
    ingredients: any[],
    sandwichesList: any[],
    currentSandwichIngredients: any[],
    currentSandwichName: string,
    currentSandwichId: string
}

export interface IRootState {
    application: Application;
}


    