<template>
<div class="container">
  <!-- Home Page

  <div class="row">
    <b-button variant="primary" size="sm" href="#technicals">
      Some Btn
    </b-button>
  </div> -->



  <section id="home">
    Home Stuff
    <section id="links">
    <nuxt-link to="/">Home</nuxt-link>&nbsp;
    <nuxt-link to="/configurator">Configurator</nuxt-link>
  </section>
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
  </section>

  <section id="rebreather" class="rebreathers" >
    <h2>Fault-tolerant Rebreather</h2>
    <p class="subText">The Liberty rebreather is designed to be fault-tolerant. No single malfunction in the electronic system could cause a breakdown of the whole apparatus. And even multiple malfunctions often do not lead to a complete breakdown.</p>
    <div class="row column">
      <Rebreather title="4 oxygen sensor" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 helium sensors patented technology" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 methods of ppO2 measurement" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 independent computers" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 solenoid valves" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="4 displays" link="4-oxygen-sensors"></Rebreather>
    </div>
  </section>

  <section id="technicals" class="technicals">
    <h2>Technicals</h2>
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
  </section>

  <section id="gallery" class="gallery">
    <h2>Gallery</h2>
    <Gallery></Gallery>
  </section>

  <section id="instructors" class="instructors">
    <h2>Instructors and Training</h2>
    <p class="text-center subText">Liberty CCR is distributed to end customers through an instructor network. Qualified divers and instructors, corporate and government customers can buy Liberty CCR directly. You can contact your chosen instructor or directly contact the Liberty team.</p>

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


  </section>

  <section id="testimonials" class="testimonials">
    <h2>Testimonials</h2>
    <div class="row columns">
      <Testimonial></Testimonial>
      <Testimonial></Testimonial>
      <Testimonial></Testimonial>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Contact</h2>
    <br />

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
  </section>
</div>

</template>

<script>
import Testimonial from "~/components/Testimonial";
import TechnicalBox from "~/components/TechnicalBox";
import Rebreather from "~/components/Rebreather";
import Gallery from "~/components/Gallery";

import scrollTo from "~/scripts/scroll-to";

export default {
  components: {
    Testimonial,
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
  mounted() {
    if (!this.$route.hash) return;
    scrollTo(this.$route.hash, { offset: -100, duration: 0 });
  }
};
</script>

<style lang="scss">
section {
  h2 {
    line-height: 58px;
    margin-bottom: 35px;
  }

  padding-top: 40px;
  padding-bottom: 40px;
}

.technicals > h2:first-child {
  text-align: center;
}

.rebreathers {
  text-align: center;

  h2,
  p {
    text-align: center;
  }
}

.testimonials,
.gallery,
.instructors,
.contact {
  text-align: center;

  // h2 {
  //   color: white;
  // }
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

.img-circle {
  border-radius: 50%;
  width: 100%;
}
</style>
