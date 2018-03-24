<template>
  <div>
    <div style="text-align: center; margin-bottom: 30px">
      <h1>CONFIGURATION SUMMARY</h1>
      <h4>MAIN LEVELS</h4>
      <span v-for="mainLevels in summary.mainLevels" :key="mainLevels" >
        {{mainLevels}}<br />
      </span>
      <br />
      <h4>MULTISELECT LEVEL</h4>
      <span v-for="multiselectLevel in summary.multiSelectLevel" :key="multiselectLevel" >
        {{multiselectLevel}}<br />
      </span>
      <br />
      <h4>ACCESSORY LEVEL</h4>
      <span v-for="accLevel in summary.accessoryLevel" :key="accLevel" >
        {{accLevel}}<br />
      </span>
      <br />
      <h4>TOTAL PRICE</h4>
      {{configuratorFormatPrice(summary.totalPrice)}}
    </div>
    <div style="text-align: center">
      <b-btn @click="configuratorPopAny();">One step back</b-btn>&nbsp;
      <b-btn @click="resetConfigurator();">Start over</b-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters(["configuratorGetPrice", "configuratorFormatPrice", "configuratorFindQuestion", "configuratorFindAnswer"]),

    summary() {
        var totalPrice = 0;
        var data = {
            mainLevels: [],
            multiSelectLevel: [],
            accessoryLevel: [],
            totalPrice: {}
        };

        var c = this.$store.state.configurator;
        var env = this.$store.state.customer.environment;
        var getPrice = this.configuratorGetPrice;
        var formatPrice = this.configuratorFormatPrice;
        var findQuestion = this.configuratorFindQuestion;
        var findAnswer = this.configuratorFindAnswer;

        for (var i = 0; i < c.selStack.length; i++) {
            var price = getPrice(c.selStack[i].answer.price);
            var priceText = (!!price ? (" (" + ((price > 0) ? "+" : "") + formatPrice(c.selStack[i].answer.price) + ")") : "");

            data.mainLevels.push(c.selStack[i].answer.title.toUpperCase() + priceText);
            totalPrice += price;
        }

        for (var qId in c.multiSelectionChoices) {
            if (!c.multiSelectionChoices.hasOwnProperty(qId)) continue;

            var q = findQuestion(qId);
            var ans = findAnswer(c.multiSelectionChoices[qId]);
            var price = getPrice(ans.price);
            var priceText = (!!price ? (" (" + ((price > 0) ? "+" : "") + formatPrice(ans.price) + ")") : "");

            if (!q || !ans) continue;

            data.multiSelectLevel.push(q.title.toUpperCase() + ": " + ans.title.toUpperCase() + priceText);
            totalPrice += price;
        }

        for (var qId in c.accessoryListChoices) {
            if (!c.accessoryListChoices.hasOwnProperty(qId)) continue;

            var q = findQuestion(qId);
            var ans = findAnswer(c.accessoryListChoices[qId]);
            var price = getPrice(ans.price);
            var priceText = (!!price ? (" (" + ((price > 0) ? "+" : "") + formatPrice(ans.price) + ")") : "");

            if (!q || !ans || !price) continue;

            data.accessoryLevel.push(q.title.toUpperCase() + ": " + ans.title.toUpperCase() + priceText);
            totalPrice += price;
        }

        data.totalPrice[env] = totalPrice;
        
        return data;
    }
  },
  methods: {
    ...mapMutations(["resetConfigurator", "configuratorPopAny"]),
  }
};
</script>

<style>

</style>
