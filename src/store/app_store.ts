import {GetterTree, ActionTree, MutationTree} from 'vuex'
import {Application, IRootState} from './interfaces/interfaces'
import _ from 'lodash'
import { CreateRequest, Ingredient, Sandwich, ListRequest, DisposeRequest } from '@/dist/sandwich_pb'
import { SandwichService } from '@/dist/sandwich_pb_service'
import { MethodDefinition } from '@improbable-eng/grpc-web/dist/typings/service'
import { grpc } from '@improbable-eng/grpc-web'
import { hostUrl, defaultImage } from '@/infrastructure/constants'
import { convertIngredient, convertIngredientBack } from '@/infrastructure/helpers'

const state: Application = {
    ingredients: [
        {
            id: 1,
            name: 'EGG',
            class: 'orange darken-1'
        },
        {
            id: 2,
            name: 'HAM',
            class: 'purple lighten-1'
        },
        {
            id: 3,
            name: 'CHEESE',
            class: 'yellow lighten-1'
        },
        {
            id: 4,
            name: 'LETTUCE',
            class: 'light-green '
        },
        {
            id: 5,
            name: 'TOMATO',
            class: 'red darken-1'
        },
    ],
    sandwichesList: [],
    currentSandwichName: '',
    currentSandwichId: '',
    currentSandwichIngredients: []
}

const getters: GetterTree<Application, IRootState> = {
    getIngredients(state: any): void {        
        return state.ingredients
    },
    getSandwichesList(state: any): void { 
        
        return state.sandwichesList
    },
    getCurrentSandwichIngredients(state: any): void {        
        return state.currentSandwichIngredients
    },
    getCurrentSandwichName(state: any): void {        
        return state.currentSandwichName
    },
    getCurrentSandwichId(state: any): void {        
        return state.currentSandwichId
    }
}

const mutations: MutationTree<Application> = {
    setIngredients(state: any, data: any) {
        state.ingredients = data
    },
    addNewIngredient(state: any, data: any) {
        
        state.currentSandwichIngredients.push({
            id: data.id,
            name: data.name,
            class: data.class,
            // index: new Date().valueOf()
            index: state.currentSandwichIngredients.length
        })
    },
    deleteIngredient(state: any, data: any) {
        state.currentSandwichIngredients =_.remove(state.currentSandwichIngredients, (i: any)=>{
            return i.index !== data.index
        })
    },
    moveUp(state: any, data: any){
        let whoIndex = _.findIndex(state.currentSandwichIngredients, (i: any)=>{
            return i.index === data.index
        })
        const move = function (collection: any, oldIndex: any, newIndex: any){
            while(oldIndex < 0) {
                oldIndex += collection.length
            }
            while(newIndex < 0) {
                newIndex += collection.length
            }
            if(newIndex >= collection.length){
                let k = newIndex - collection.length
                while((k--) + 1) {
                    collection.push(undefined)
                }
            }
            collection.splice(newIndex, 0, collection.splice(oldIndex, 1)[0])
        }
        move(state.currentSandwichIngredients, whoIndex, whoIndex - 1)
    },
    moveDown(state: any, data: any){
        let whoIndex = _.findIndex(state.currentSandwichIngredients, (i: any)=>{
            return i.index === data.index
        })
        const move = function (collection: any, oldIndex: any, newIndex: any){
            while(oldIndex < 0) {
                oldIndex += collection.length
            }
            while(newIndex < 0) {
                newIndex += collection.length
            }
            if(newIndex >= collection.length){
                let k = newIndex - collection.length
                while((k--) + 1) {
                    collection.push(undefined)
                }
            }
            collection.splice(newIndex, 0, collection.splice(oldIndex, 1)[0])
        }
        move(state.currentSandwichIngredients, whoIndex, whoIndex + 1)
    },
    saveSandwich(state: any, data: any){
        
        if(state.currentSandwichIngredients.length > 0 && _.find(state.sandwichesList, (i:any)=> {return i.name === data}) === undefined){
            state.sandwichesList.push({
                name: data,
                ingredients: state.currentSandwichIngredients,
                id: new Date().valueOf()
            })   
        }
        state.currentSandwichName = data;
    },
    removeSandwich(state: any, data: any){
        state.sandwichesList =_.remove(state.sandwichesList, (i: any)=>{
            return i.id !== data.id
        })
    },
    selectSandwich(state: any, data: any){
        state.currentSandwichIngredients = _.find(state.sandwichesList, (i:any)=>{
            return i.id === data.id
        }).ingredients
        state.currentSandwichName = _.find(state.sandwichesList, (i:any)=>{
            return i.id === data.id
        }).name
        state.currentSandwichId = _.find(state.sandwichesList, (i:any)=>{
            return i.id === data.id
        }).id
    },
    setSandwichList(state: any, data: any){
        state.sandwichesList = _.map(data.sandwichesList, (i: any) => {
            return {
                name: i.name,
                ingredients: _.map(i.ingredientsList, (j: any, index: number) => {
                    return convertIngredientBack(j, index);
                }),
                id: i.id,
            };
        });
    },
    cleanCurrentSandwich(state: any, data: any){
        state.currentSandwichIngredients = []
        state.currentSandwichName = ''
        state.currentSandwichId = ''
    }
}

const actions: ActionTree<Application, IRootState> = {
    async getSandwiches({commit, state}: any){
        // debugger
        const listRequest = new ListRequest();
        listRequest.setSearch('');
        await grpc.invoke(SandwichService.List as unknown as MethodDefinition<ListRequest, Sandwich>, {
            request: listRequest,
            host: hostUrl,
            onMessage: (message: Sandwich) => {
                
                commit('setSandwichList', message.toObject());
            },
            onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
                if (code == grpc.Code.OK) {
                console.log("all ok")
                } else {
                console.log("hit an error", code, msg, trailers);
                }
            }
        });
    },

    saveSandwichServer({commit, state}: any){
        // debugger
        const createRequest = new CreateRequest();

        createRequest.setName(state.currentSandwichName);

        for (let i = 0; i < state.currentSandwichIngredients.length; i++){
            createRequest.addIngredients(convertIngredient(state.currentSandwichIngredients[i].name));
        }
        
        createRequest.setImageUrl(defaultImage);

        grpc.invoke(SandwichService.Create as unknown as MethodDefinition<CreateRequest, Sandwich>, {
            request: createRequest,
            host: hostUrl,
            onMessage: (message: Sandwich) =>
            {
                console.log("saved: ", message.toObject());
            },
            onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
                if (code == grpc.Code.OK) {
                console.log("all ok")
                } else {
                console.log("hit an error", code, msg, trailers);
                }
            }
        });
    },

    deleteSandwich({commit, state}: any, id: string){
        const deleteRequest = new DisposeRequest();

        deleteRequest.setId(id);

        grpc.invoke(SandwichService.Dispose as unknown as MethodDefinition<DisposeRequest, Sandwich>, {
            request: deleteRequest,
            host: hostUrl,
            onMessage: (message: Sandwich) =>
            {
                console.log("saved: ", message.toObject());
            },
            onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
                if (code == grpc.Code.OK) {
                console.log("all ok")
                } else {
                console.log("hit an error", code, msg, trailers);
                }
            }
        });
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}