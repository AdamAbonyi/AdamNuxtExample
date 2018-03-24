<template>
  <div>
    <main role="main">

        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Tree Traverser Sample</h1>
                <p class="lead text-muted">
                    Try it yourself: the tree traversing sample is here to demonstrate the architecture and capabilities of the future
                    configurator.
                </p>
                <p>
                    <a href="#" class="btn btn-primary my-2" onclick="resetConfigurator('usd');">Start the Configurator (USD)</a>&nbsp;
                    <a href="#" class="btn btn-primary my-2" onclick="resetConfigurator('eur');">Start the Configurator (EUR)</a>&nbsp;
                    <a href="#" class="btn btn-secondary my-2" onclick="reloadPage();">Reload the Page</a>
                </p>
            </div>
        </section>

        <div class="album py-5 bg-light" :class="{ 'display-none': !configurator.__started }">
            <div id="tmplTarget" class="container">
              <p>ahoj: {{customer.environment}} ... {{configuratorData.answers[0].subTitle}}</p>
            </div>
        </div>

    </main>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  components: {},
  computed: {
    ...mapState(["customer", "configuratorData", "configurator"])
  },
  methods: {
    ...mapMutations(["resetConfigurator"])
  }
};
</script>

<style>
.display-none {
  display: none;
}

:root {
  --jumbotron-padding-y: 3rem;
}

.jumbotron {
  padding-top: var(--jumbotron-padding-y);
  padding-bottom: var(--jumbotron-padding-y);
  margin-bottom: 0;
  background-color: #fff;
}

@media (min-width: 768px) {
  .jumbotron {
    padding-top: calc(var(--jumbotron-padding-y) * 2);
    padding-bottom: calc(var(--jumbotron-padding-y) * 2);
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron-heading {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: 0.25rem;
}

.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

.card-title {
  text-transform: uppercase;
}

.card-subtitle {
  color: lightslategray;
}
</style>
