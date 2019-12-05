<template>
  <v-layout fill-height align-center justify-center>
    
      
          <v-card class="ma-5 sandwichCard">
              <v-text-field
                class="ma-3"
                v-model="sandWichName"
                placeholder="Enter sandwich name"
            ></v-text-field>
            <v-layout column justify-center pa-3>
                <v-flex class="topRoll brown darken-1" mb-2></v-flex>
                <!-- <v-flex v-for='(ingredient, index) in customSandwich' :key="index" mt-2 mb-2> -->
                <v-flex v-for='(ingredient, index) in getCurrentSandwichIngredients' :key="index" mt-2 mb-2>
                    <v-layout>
                        <v-flex :class="ingredient.class" class="ingredient" text-xs-center>
                            <v-layout align-center justify-center fill-height>
                                {{ingredient.name}}
                            </v-layout>
                            
                        </v-flex>
                        <v-flex style="max-width: 90px" ml-2>
                            <v-layout>
                                <v-flex>
                                    <v-layout align-center justify-center class="iconWraper cursorPointer">
                                        <i class="material-icons" @click='moveUp(ingredient)'>arrow_upward</i>
                                    </v-layout>
                                </v-flex>
                                <v-flex>
                                    <v-layout align-center justify-center class="iconWraper cursorPointer">
                                        <i class="material-icons" @click='moveDown(ingredient)'>arrow_downward</i>
                                    </v-layout>
                                </v-flex>
                                <v-flex>
                                    <v-layout align-center justify-center class="iconWraper cursorPointer">
                                        <i class="material-icons red--text" @click='deleteIngredient(ingredient)'>close</i>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                            
                            
                            
                        </v-flex>
                    </v-layout>
                    
                </v-flex>
                <v-flex class="bottomRoll brown darken-2" mt-2></v-flex>
            </v-layout>
            <v-btn class='mb-3 mt-3' @click='saveCurrentSandwich(sandWichName)'>Save sandwich</v-btn>
          </v-card>
  </v-layout>
</template>

<script lang="ts">
/* tslint:disable */
import {SandwichServiceClient, ServiceError} from "../dist/sandwich_pb_service"
import {ListRequest, ListResponse, Ingredient} from "../dist/sandwich_pb"
import {Component, Watch, Vue} from "vue-property-decorator"
import {mapGetters,mapMutations ,mapState, mapActions} from "vuex"

@Component({
  name: 'Sandwich-layout',
  computed: {    
    ...mapGetters('app', {
      getIngredients: 'getIngredients',
      getCurrentSandwichName: 'getCurrentSandwichName',
      getCurrentSandwichIngredients: 'getCurrentSandwichIngredients',
      getCurrentSandwichId: 'getCurrentSandwichId'
    })
  }, 
  methods: {
      ...mapMutations('app', {
          deleteIngredient: 'deleteIngredient',
          moveUp: 'moveUp',
          moveDown: 'moveDown',
          saveSandwich: 'saveSandwich',
          cleanCurrentSandwich: 'cleanCurrentSandwich'
      }),
    ...mapActions('app', [
      'saveSandwichServer',
      'getSandwiches',
      'deleteSandwich'
    ])
  }
})

export default class SandwichLayout extends Vue{
  private sandWichName: string = ''


    @Watch('getCurrentSandwichName')
    onSandwhichChanged(){
        this.sandWichName = this.getCurrentSandwichName
    }

    async saveCurrentSandwich(){
        if(this.sandWichName.length >= 3 && (this.sandWichName !== this.getCurrentSandwichName)){
            this.saveSandwich(this.sandWichName)
            await this.saveSandwichServer()
            await this.getSandwiches()
            await this.cleanCurrentSandwich()
            this.sandWichName = ''
        } else if(this.sandWichName.length >= 3 && (this.sandWichName === this.getCurrentSandwichName)){
            await this.deleteSandwich(this.getCurrentSandwichId)
            await this.saveSandwichServer()
            await this.getSandwiches()
            await this.cleanCurrentSandwich()
        }
    }

  callBackend() {
    
  
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sandwichCard {
    max-width: 350px;
    min-width: 350px;
}
.topRoll {
    height: 50px;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
}
.bottomRoll{
    height: 50px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}
.ingredient {
    height: 30px;
    border-radius: 5px;
}
.cursorPointer{
  cursor: pointer
}
.iconWraper {
    height: 30px;
    border-radius: 50%;
}
.iconWraper:hover {
    background: lightblue;
}
</style>
