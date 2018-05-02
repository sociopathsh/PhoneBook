<template>

    <div class="modal" v-bind:class="addModal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close" v-on:click="closeAddModal"></button>
            </header>
            <section class="modal-card-body">
                <label>Name</label>
                <input class="input" type="text" placeholder="Name" v-model="list.name">
                <label>Email</label>
                <input class="input" type="text" placeholder="Email" v-model="list.email">
                <label>Phone</label>
                <input class="input" type="text" placeholder="Phone" v-model="list.phone">
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
                }
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
                    console.log(error);
                });
            }
        }
    }
</script>