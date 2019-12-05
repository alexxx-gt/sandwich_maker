<template>
  <v-layout grey darken-3 fill-height align-center pt-3 column class="leftMenu">
    <h3 class="headline text-lowercase white--text">ingridients:</h3>
      <v-list v-for="(ingredient, index) in getIngredients" :key="index" dark>
        <v-layout align-center justify-center>
          <span>{{ingredient.name}}</span>
          <i class="material-icons ml-2 cursorPointer" @click='addNewIngredient(ingredient)'>add_circle_outline</i>
        </v-layout>
      </v-list>
      
      <h3 class="headline text-lowercase white--text mt-5">Sandwiches:</h3>
      <v-list v-for="(sandwich, index) in getSandwichesList" :key="index" dark @click="selectSandwich(sandwich)">
        <v-layout align-center justify-center>
          <v-chip @click='selectSandwich(sandwich)' class='cursorPointer'>{{sandwich.name}}</v-chip>
          <i class="material-icons ml-2 cursorPointer" @click='deleteSandwichHandler(sandwich.id)'>close</i>        </v-layout>
      </v-list>
    
  </v-layout>
</template>

<script lang="ts">
import {Component, Watch, Vue} from "vue-property-decorator"
import {mapGetters, mapState, mapActions, mapMutations} from "vuex"

@Component({
  name: 'Menu',
  computed: {    
    ...mapGetters('app', {
      getIngredients: 'getIngredients',
      getSandwichesList: 'getSandwichesList'
    }),
  },
  created() {
    this.getSandwiches();
  },
  methods: {
    ...mapMutations('app', [
      'addNewIngredient',
      'selectSandwich'
    ]),
    ...mapActions('app', [
      'getSandwiches',
      'deleteSandwich'
    ])
  }
})

export default class Menu extends Vue{
  async deleteSandwichHandler(id: string){
    await this.deleteSandwich(id);
    await this.getSandwiches();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leftMenu {
  max-width: 300px;
  width: 300px;
}
.cursorPointer{
  cursor: pointer
}
</style>
