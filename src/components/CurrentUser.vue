<template>
    <div :user="userProfile">

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
            }
        }
    }
}
</script>