<template>
    <ul>
        <li :item="item">
            <slot :item="item">
                {{item.name}}
            </slot>
        </li>
    </ul>
</template>
<script>
export default {
    name: "ItemComponent",
    props: {
        item: Object
    }
}
</script>

