<template>
  <div class="col-md-4">
    <b-modal v-if="!!answer.detail" v-model="modalShown" :title="answer.title" centered>
      <h4 v-if="!!answer.subTitle" class="card-subtitle" style="margin-bottom: 15px">{{answer.subTitle}}</h4>
      <p v-if="answer.detail.mainText" class="card-text">{{answer.detail.mainText}}</p>
      <p v-if="answer.detail.secondaryText" class="card-text small">{{answer.detail.secondaryText}}</p>
      <p class="card-text">Price: {{configuratorFormatPrice(answer.price)}}</p>
      <img v-for="img in answer.detail.gallery" :key="img.url" :src="img.url" :alt="img.alt" :title="img.alt" class="border" style="min-width: 50px; width: 50px; min-height: 50px; height: 50px; object-fit: contain;" />
      <div slot="modal-footer">
        <b-btn variant="primary" :class="{'disabled': !answer.id, 'backcolor-lightgreen': isAnswerSelected}"
               @click="modalShown = false; selectAnswerDelayed();">
          Select this option
        </b-btn>&nbsp;
        <b-btn variant="secondary" @click="modalShown = false">Close</b-btn>
       </div>
    </b-modal>
    <div class="card mb-4 box-shadow">
      <div class="card-body">
        <h2 class="card-title">{{answer.title}}</h2>
        <h3 v-if="answer.subTitle" class="card-subtitle">{{answer.subTitle}}</h3>
      </div>
      <img v-if="!!answer.mainPicture" class="card-img-top" :src="answer.mainPicture.url" :alt="answer.mainPicture.alt" :title="answer.mainPicture.alt"
           style="height: 255px; object-fit: contain;" />
      <div class="card-body">
        <p v-if="!!answer.text" class="card-text">{{answer.text}}</p>
        <p class="card-text">Price: {{configuratorFormatPrice(answer.price)}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <b-btn v-if="!!answer.detail" class="btn-outline-secondary" @click="modalShown = !modalShown">
              Details
            </b-btn>
            <b-btn :class="{'btn-outline-secondary': true, 'disabled': !answer.id, 'back-color-lightgreen': isAnswerSelected}" @click="selectAnswer()">
              Select
            </b-btn>
          </div>
          <!-- <small class="text-muted">9 mins</small> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  props: {
    data: undefined
  },
  data() {
    return {
      modalShown: false
    };
  },
  components: {},
  computed: {
    ...mapGetters(["configuratorFormatPrice"]),

    answer() {
      return this.data.answer;
    },
    questionId() {
      return !!this.data.question
        ? this.data.question.id
        : this.data.selection.id;
    },
    isAnswerSelected() {
      var t = this.$store.getters.configuratorIsAnswerSelected({
        answerId: this.answer.id,
        questionId: this.questionId
      });
      return t;
    },
    modalId() {
      return "modal-" + this.data.answer.id;
    },
    modalIdInclSingleQuotes() {
      return "'" + this.modalId + "'";
    },
    modalTitleId() {
      return this.modalId + "-title";
    }
  },
  methods: {
    ...mapMutations(["resetConfigurator", "configuratorSelectAnswer"]),

    selectAnswer() {
      this.configuratorSelectAnswer({
        answerId: this.answer.id,
        questionId: this.questionId
      });
    },
    selectAnswerDelayed() {
      if (!!window) window.setTimeout(() => this.selectAnswer(), 500);
    }
  }
};
</script>

<style>
.back-color-lightgreen {
  background-color: lightgreen;
}
</style>
