<template>
    <div>
        <q-form @submit="onSubmit" @reset="onReset" class="row">
            <q-input v-model="name" type="full name" class="col-xs-12 col-sm-6 q-py-md q-px-sm" filled fill-mask lazy-rules label="Your name" :rules="[val => (val && val.length > 0) || 'Please enter your name']" />

            <q-input v-model.number="zip" type="zip" mask="#####" class="col-xs-12 col-sm-6 q-py-md q-px-sm" filled fill-mask lazy-rules label="Your zip" :rules="[val => (val && val.length > 0) || 'Please enter your zip']" />

            <q-input v-model="email" type="email" class="col-xs-12 col-sm-6 q-py-md q-px-sm" filled fill-mask lazy-rules label="Your email" :rules="[val => (val && val.length > 0) || 'Please enter your email']" />

            <q-input v-model.number="phone" type="number" mask="(###) ### - ####" class="col-xs-12 col-sm-6 q-py-md q-px-sm" filled fill-mask lazy-rules label="Your number" :rules="[val => (val && val.length > 0) || 'Please enter your number']" />

            <div class="row q-py-md q-px-sm">
                <div class="col-9">
                    <q-btn label="Work with Richard" type="submit" class="full-width" color="primary" />
                </div>
                <div class="col-3">
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </div>
        </q-form>

        <p v-if="conciergeFormSuccess" class="q-my-md">Thank you! Richard will be in touch soon.</p>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',

    data() {
        return {
            name: '',
            zip: '',
            email: '',
            phone: '',
            conciergeFormSuccess: false
        }
    },

    methods: {
        onSubmit() {
            // email richard and steve
            let req = {
                name: this.name,
                zip: this.zip,
                email: this.email,
                phone: this.phone
            }

            this.api.post('https://richardelias.com/api/contact', req, res => {
                console.log('contact res: ', res)

                if (res.success) {
                    this.conciergeFormSuccess = true
                    this.onReset()
                } else {
                    // error
                }
            })
        },

        onReset() {
            this.name = ''
            this.zip = ''
            this.email = ''
            this.phone = ''
        },
    },
}
</script>

<style scoped>

</style>
