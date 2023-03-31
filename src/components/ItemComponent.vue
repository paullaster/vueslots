<template>
        <li :item="item">
            <slot :item="item">
                {{item.name}}
            </slot>
        </li>
</template>
<script>
export default {
    name: "ItemComponent",
    props: {
        item: Object
    }
}
</script>

