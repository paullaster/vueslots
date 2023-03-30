<template>
  <div>
    <BaseLayout>
      <template v-slot:header>
        <h1>Paullaster Okoth</h1>
        <p>This is the heading of this page</p>
      </template>
    </BaseLayout>
    <HelloWorld>
      
      <TestVSlotComponent/>
    </HelloWorld>
  </div>
</template>
<script>
import HelloWorld from "./components/RenderItems.vue";
import TestVSlotComponent from "./components/TestVSlotComponent.vue";
import BaseLayout from "./components/BaseLayout.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    TestVSlotComponent,
    BaseLayout
  },
  data() {
    return {

    }
  }
}
</script>