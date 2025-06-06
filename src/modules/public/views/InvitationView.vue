<template>
  <div>
    <component
      v-if="templateComponent"
      :is="templateComponent"
      :names="invitationData.names"
    />
    <div v-else>
      <h1>Invitación no encontrada 😢</h1>
      <p>Verifica el enlace o contacta a los anfitriones.</p>
    </div>
  </div>
</template>

<script>
import invitationConfig from "../data/invitations.js";
import Template1 from "@/components/templates/TemplateOne.vue";
import Template2 from "@/components/templates/TemplateTwo.vue";
import Template3 from "@/components/templates/TemplateThree.vue";
import Template4 from "@/components/templates/TemplateFour.vue"
import Template5 from "@/components/templates/TemplateFive.vue"

const templates = {
  Template1,
  Template2,
  Template3,
  Template4,
  Template5
};

export default {
  props: ["name"],
  computed: {
    invitationData() {
      return invitationConfig[this.name];
    },
    templateComponent() {
      if (!this.invitationData) return null;
      return templates[this.invitationData.template];
    },
  },
};
</script>
