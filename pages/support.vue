<template>
  <div>
    <Section type="dark"
      title="Support"
      :top-title="true"
      bg-image="/pcs/pcs_layout/top-background-continue.jpg">
    </Section>

    <Section type="light">
      <h2 class="text-center">Select Support Category</h2>
      <br>

      <div class="row text-center">
          <div class="col-sm-3">
              <a href="manuals/"><img src="/pcs/pcs_layout/support-icon-manuals.png" class="imgCenter img-responsive"></a>
              <h3><a href="manuals/">Manuals</a></h3>
              <p class="supportText">Liberty manuals in different languages</p>
              <a href="manuals/" class="button buttonCenter buttonSupport">See all</a>
          </div>
          <div class="col-sm-3">
              <a href="firmware/"><img src="/pcs/pcs_layout/support-icon-firmware.png" class="imgCenter img-responsive"></a>
              <h3><a href="firmware/">Firmware</a></h3>
              <p class="supportText">All firmware versions including patch notes</p>
              <a href="firmware/" class="button buttonCenter buttonSupport">See all</a>
          </div>
          <div class="col-sm-3">
              <a href="videos/"><img src="/pcs/pcs_layout/support-icon-videos.png" class="imgCenter img-responsive"></a>
              <h3><a href="videos/">Videos</a></h3>
              <p class="supportText">Liberty in 3D animation, Liberty tutorials</p>
              <a href="videos/" class="button buttonCenter buttonSupport">See all</a>
          </div>
          <div class="col-sm-3">
              <a href="others/"><img src="/pcs/pcs_layout/support-icon-others.png" class="imgCenter img-responsive"></a>
              <h3><a href="others/">Others</a></h3>
              <p class="supportText">Liberty component catalogue, service info and other technical information</p>
              <a href="others/" class="button buttonCenter buttonSupport buttonSupportLast">See all</a>
          </div>
          <div class="clearfix"></div>
      </div>

      <br>
      <div class="oddItem"></div>
      <br>

      <p class="itemDesc">Service inspection must be performed every year. After a five-year inspection, the second three-year inspection will follow (unit age 6 years), then one-year inspection (unit age 7 years), again one-year inspection (unit age 8 years), third three-years inspection (unit age 9 years), second five-years inspection (unit age 10 years) etc.</p>
      <p class="itemDesc">It is always necessary to send the entire unit (cylinders included) to make a service. Please <a href="mailto:info@ccrliberty.com">contact us</a> in case of interest in a service inspection of your unit. </p>
    </Section>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>

</style>
