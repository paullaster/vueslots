<template>
    <div >
        <slot :user="userProfile" :otherData="metaData" name="primaryData">
            {{ user.firstName }}
        </slot>
    </div>
</template>
<script>
export default {
    name: 'CurrentUser',
    data() {
        return {
            userProfile: {
                firstName: 'John',
                lastName: 'Doe',
                role: 'Admin',
                email: 'envkt@example.com',
                password: '123456',
                lastLoginDate: new Date(),
            },
            metaData: {
                language: "en",
                country: "US",
                currency: "USD"
            }
        }
    }
}
</script>