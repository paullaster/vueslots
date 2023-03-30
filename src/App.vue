<template>
  <div>
    <HelloWorld>
      <h1>Paullaster Okoth</h1>
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
    TestVSlotComponent
  },
  data() {
    return {

    }
  }
}
</script>