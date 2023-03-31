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

        <h2>Testing user profile</h2>
        <CurrentUser v-slot:default="slotProps">
          {{ slotProps.user.lastName }}
        </CurrentUser>
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
import CurrentUser from "./components/CurrentUser.vue";
export default {
  name: "App",
  components: {
    RenderItem,
    TestVSlotComponent,
    BaseLayout,
    CurrentUser
},
  data() {
    return {

    }
  }
}
</script>