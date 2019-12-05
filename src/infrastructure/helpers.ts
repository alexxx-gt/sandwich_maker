import { EGG_NAME, HAM_NAME, CHEESE_NAME, LETTUCE_NAME, TOMATO_NAME } from './constants';
import { Ingredient } from '@/dist/sandwich_pb';

export function convertIngredient(ingredient: string){
    switch (ingredient){
        case EGG_NAME:
            return Ingredient.EGG;
        case HAM_NAME:
            return Ingredient.HAM;
        case CHEESE_NAME:
            return Ingredient.CHEESE;
        case LETTUCE_NAME:
            return Ingredient.LETTUCE;
        case TOMATO_NAME:
            return Ingredient.TOMATO;
        default:
            return Ingredient.INVALID;
    }
}

export function convertIngredientBack(ingredient: number, index: number){
    switch (ingredient){
        case Ingredient.EGG:
            return {
                id: 1,
                name: 'EGG',
                class: 'orange darken-1',
                index: index
            };
        case Ingredient.HAM:
            return {
                id: 2,
                name: 'HAM',
                class: 'purple lighten-1',
                index: index
                };
        case Ingredient.CHEESE:
            return {
                id: 3,
                name: 'CHEESE',
                class: 'yellow lighten-1',
                index: index
                };
        case Ingredient.LETTUCE:
            return {
                id: 4,
                name: 'LETTUCE',
                class: 'light-green ',
                index: index
                };
        case Ingredient.TOMATO:
            return {
                id: 5,
                name: 'TOMATO',
                class: 'red darken-1',
                index: index
            };
        default:
            return;
    }
}