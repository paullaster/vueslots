<template>
    <button :type="buttonType">
        <slot>Button</slot>
    </button>
</template>
<script>
export default {
    name: 'Button',
    props: {
        buttonType: {
            type: String,
            default: 'button',
        }
    }
    
}
</script>