<template>
  <div>
    <BaseLayout>
      <template v-slot:header>
        <h1>Paullaster Okoth</h1>
        <p>This is the heading of this page</p>
      </template>
      <template v-slot:main>
        <h2>Main section of the page:</h2>
        <RenderItem>

          <TestVSlotComponent />
        </RenderItem>
      </template>
      <template v-slot:footer>
        <h2>Footer section of the page:</h2>
      </template>
    </BaseLayout>
  </div>
</template>
<script>
import RenderItem from "./components/RenderItems.vue";
import TestVSlotComponent from "./components/TestVSlotComponent.vue";
import BaseLayout from "./components/BaseLayout.vue";
export default {
  name: "App",
  components: {
    RenderItem,
    TestVSlotComponent,
    BaseLayout
  },
  data() {
    return {

    }
  }
}
</script>