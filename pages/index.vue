<template>
<div>
  <Section id="home"
    type="dark"
    :full-height="true"
    :full-width="false"
    bgImage="/pcs/pcs_layout/top-background.jpg"
    class="text-center topSection"
    style="padding-top:180px; min-height:730px">
    <h1>
      Liberty
    </h1>
    <h2>
      The best equipped rebreather.
    </h2>
      CE certified.
    <h2>

    </h2>
    <section id="links">
      <nuxt-link to="/">Home</nuxt-link>&nbsp;
      <nuxt-link to="/configurator">Configurator</nuxt-link>
    </section>
  </Section>

  <Section id="rebreather"
      class="rebreathers"
      type="dark"
      title="Fault-tolerant Rebreather"
      subtitle="The Liberty rebreather is designed to be fault-tolerant. No single malfunction in the electronic system could cause a breakdown of the whole apparatus. And even multiple malfunctions often do not lead to a complete breakdown.">
    <div class="row column">
      <Rebreather title="4 oxygen sensor" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 helium sensors patented technology" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 methods of ppO2 measurement" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 independent computers" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 solenoid valves" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="4 displays" link="4-oxygen-sensors"></Rebreather>
    </div>
  </Section>

  <Section id="technicals"
      type="light"
      class="technicals"
      title="Technicals">
      <div class="row column">
        <TechnicalBox number="01" title="Something something" link="/"></TechnicalBox>
        <TechnicalBox number="02" title="Something something" link="/"></TechnicalBox>
        <TechnicalBox number="03" title="Something something" link="/"></TechnicalBox>
        <TechnicalBox number="04" title="Something something" link="/"></TechnicalBox>
        <TechnicalBox number="05" title="Something something" link="/"></TechnicalBox>
        <TechnicalBox number="06" title="Something something" link="/"></TechnicalBox>
        <TechnicalBox number="07" title="Something something" link="/"></TechnicalBox>
        <TechnicalBox number="08" title="Something something" link="/"></TechnicalBox>
      </div>
  </Section>

  <Section id="gallery"
    class="gallery"
    title="Gallery"
    type="dark">
      <Gallery></Gallery>
  </Section>

  <Section id="instructors"
      class="instructors"
      title="Instructors and Training"
      subtitle="Liberty CCR is distributed to end customers through an instructor network. Qualified divers and instructors, corporate and government customers can buy Liberty CCR directly. You can contact your chosen instructor or directly contact the Liberty team."
      type="light">
    <div class="text-center">
      <b-button to="instructors"
                variant="danger"
                class="buttonCenter"
                style="width: 300px">
        Find your Instructor
      </b-button>
    </div>
    <br />

    <div class="odd"></div>

    <div class="priceInfo">
        <div class="row">
            <div class="col-sm-8" style="text-align:left">
                <h3>Price</h3>
                <p>
                    Liberty CCR price is <strong>7,500 EUR</strong> (excl. VAT).<br>
                    Recommended US retail price is <strong>8,999 USD</strong>.
                </p>
                <p>The price includes the complete unit packed in two cardboard boxes. Just fill tanks and scrubber, charge batteries and it is ready to dive. We supply only complete Liberty units (not stripped). All spare parts or accessories must be ordered separately.</p>
                <p>Additionaly it is possible to pack Liberty to the Peli Storm Case type iM2975  <br>(<a href="//www.pelican.com/us/en/product/watertight-storm-hard-cases/large-case/travel-case/iM2975/" target="_blank" class="red">More info</a>). This option also depends on transport availability. Peli case price is 300 EUR (VAT excluded). If you are interested in having the Liberty sent to you in the Peli case, do not forget to specify it when ordering.
            </p></div>

            <div class="col-sm-4">
                <br>
                <img src="/pcs/pcs_layout/instructor-image.png" class="imgCenter img-responsive">
            </div>
        </div>

        <br />
        <div class="text-center">
          <b-button to="conversion-kits"
                    variant="danger"
                    class="buttonCenter"
                    style="width: 300px">
              Interested in Conversion Kits?
          </b-button>
        </div>
        <br />
    </div>
  </Section>

  <Section id="testimonials"
    class="testimonials"
    title="Testimonials"
    type="dark">
    <Testimonials :data="testimonialPicks"></Testimonials>
  </Section>

  <Section id="contact"
    class="contact"
    title="Contact"
    type="light">
    <div class="row" style="text-align:left">
      <div class="col-sm-2">
        <img src="/pcs/pcs_layout/liberty-systems-sro.jpg" class="img-circle imgCenter img-responsive">
      </div>
      <div class="col-sm-4">
        <h3>Liberty Systems, s.r.o.</h3>
        <p>
            Hálkova 2495 <br>
            Roudnice nad Labem, 413 01 <br>
            Czech Republic
        </p>
        <p>
            phone: <strong>+420 416 857 057</strong> <br>
            e-mail: <a href="mailto:info@ccrliberty.com">info@ccrliberty.com</a>
        </p>
        <p class="smallerText">
            ID: 24289914 <br>
            VAT ID: CZ24289914
        </p>
        <p class="smallerText">
            Incorporated in the Commercial Register kept by the
            Municipal Court in Prague: C 89580
        </p>
      </div>
      <div class="col-sm-2">
        <img src="/pcs/pcs_layout/divesoft-llc.jpg" class="img-circle imgCenter img-responsive">
      </div>
      <div class="col-sm-4">
        <h3>Divesoft, LLC</h3>
        <p>
            7850 Ulmerton Rd <br>
            Royal Square - Suite 3B <br>
            Largo, Florida, 33771 <br>
            USA
        </p>
        <p>
            phone: <strong>+1 (813) 389-7911</strong> <br>
            e-mail: <a href="mailto:info@divesoftus.com">info@divesoftus.com</a>
        </p>
        <p class="smallerText">TIN/EIN: 38-3981686</p>
      </div>
    </div>
  </Section>
</div>
</template>

<script>
import Testimonials from "~/components/Testimonials";
import TechnicalBox from "~/components/TechnicalBox";
import Rebreather from "~/components/Rebreather";
import Gallery from "~/components/Gallery";

import scrollTo from "~/scripts/scroll-to";

import testimonials from "~/data/testimonials";

import { mapState } from 'vuex';

export default {
  components: {
    Testimonials,
    Rebreather,
    TechnicalBox,
    Gallery
  },
  created() {
    if (process.isBrowser && "serviceWorker" in navigator) {
      const updatesChannel = new BroadcastChannel("my-update-channel");
      updatesChannel.addEventListener("message", async event => {
        console.log("some change");
        console.log(event);
      });
    }
  },
  computed: {
    ...mapState("testimonials", ["testimonialPicks"])
  },
  fetch({ store }) {
    return store.dispatch("testimonials/initialize", testimonials );
  },
  mounted() {
    if (!this.$route.hash) return;
    scrollTo(this.$route.hash, { offset: -100, duration: 0 });
  },
  methods: {

  }
};
</script>

<style lang="scss">
.topSection {
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-color: #0c0c0c !important;
}

@media only screen and (min-width: 768px) {
  .topSection {
    min-height: 586px !important;
  }
}

@media only screen and (min-width: 992px) {
  .topSection {
    min-height: 686px !important;
  }
}

@media only screen and (min-width: 1200px) {
  .topSection {
    min-height: 986px !important;
  }
}

.technicals > h2:first-child {
  text-align: center;
}

.rebreathers {
  p {
    text-align: center;
  }
}

.odd {
  border-bottom: 1px solid #eaeaea;
  margin-top: 30px;
  margin-bottom: 30px;
}

@media only screen and (min-width: 1070px) {
  .odd,
  .oddInstructor {
    width: 920px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (min-width: 1070px) {
  .priceInfo,
  .odd,
  .oddInstructor {
    width: 920px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
