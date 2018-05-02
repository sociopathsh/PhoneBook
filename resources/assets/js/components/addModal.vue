<template>

    <div class="modal" v-bind:class="addModal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close" v-on:click="closeAddModal"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label>Name</label>
                    <input v-bind:class="{'is-danger': errors.name}" class="input" type="text" placeholder="Name" v-model="list.name">
                    <span v-if="errors.name" class="has-text-danger">{{ errors.name[0] }}</span>
                </div>
                <div class="field">
                    <label>Email</label>
                    <input v-bind:class="{'is-danger': errors.email}" class="input" type="text" placeholder="Email" v-model="list.email">
                    <span v-if="errors.email" class="has-text-danger">{{ errors.email[0] }}</span>
                </div>
                <div class="field">
                    <label>Phone</label>
                    <input v-bind:class="{'is-danger': errors.phone}" class="input" type="text" placeholder="Phone" v-model="list.phone">
                    <span v-if="errors.phone" class="has-text-danger">{{ errors.phone[0] }}</span>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" v-on:click="save">Save changes</button>
                <button class="button" v-on:click="closeAddModal">Cancel</button>
            </footer>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['addModal'],
        data() {
            return {
                list: {
                    name: '',
                    email: '',
                    phone: ''
                },
                errors: {},
            }
        },
        methods: {
            closeAddModal: function () {
                this.$emit('closeAddModal');
            },
            save: function () {
                axios.post('/phonebook', this.$data.list).then((response) => {
                    console.log(response);
                    this.$emit('closeAddModal');
                }).catch((error) => {
                    console.log(error.response.data.errors);
                    this.errors = error.response.data.errors;
                });
            }
        }
    }
</script>