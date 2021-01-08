<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/3 text-center px-5">
        <img src="/avatar.jpg" class="rounded-full shadow-lg inline" alt="avatar"/>
        <div class="text-3xl mb-2">Shaunn Barron</div>
        <div class="text-lg mb-1">Full Stack Developer</div>
        <div class="text-lg mb-4">Favorite Tools</div>

        <div class="flex mb-4">
          <tech-logo-link class="w-1/3" src="/gopher.png" name="Go" href="https://golang.org/"/>
          <tech-logo-link class="w-1/3" src="/vue_logo.png" name="Vue" href="https://vuejs.org/"/>
          <tech-logo-link class="w-1/3" src="/flutter_logo.png" name="Flutter" href="https://flutter.io/"/>
        </div>
        <div>{{education.studyType}} - {{education.area}}</div>
        <div class="mb-6">{{education.institution}}</div>
      </div>

      <div class="w-full lg:w-2/3 text-center px-4">
        <section-title title="Experience"/>

        <template v-for="job in resume.work">
          <job-card
            class="avoid-page-break mb-5"
            :company="job.company"
            :position="job.position"
            :start-date="job.startDate"
            :end-date="job.endDate"
            :highlights="job.highlights"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import TechLogoLink from "../components/TechLogoLink";
import JobCard from "../components/JobCard";
import resume from "../static/resume.json";
import SectionTitle from "../components/SectionTitle";

export default {
  name: "ResumePage",
  components: { SectionTitle, JobCard, TechLogoLink },
  fetch() {
    this.resume = resume;
  },
  data() {
    return {
      resume: {}
    }
  },
  computed: {
    education() {
      return resume.education[0];
    }
  }
};
</script>

<style scoped>
@media print {
  @page {
    margin: 0;
  }

  .inline {
    display: inline;
  }

  .avoid-page-break {
    page-break-inside: avoid;
  }
}
</style>
