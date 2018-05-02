<template>

    <div class="modal" v-bind:class="showModal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close" v-on:click="closeAddModal"></button>
            </header>
            <section class="modal-card-body">
                <li class="panel-block">
                    <label class="column is-2">Name</label> {{ list.name }}
                </li>

                <li class="panel-block">
                    <label class="column is-2">Email</label> {{ list.email }}
                </li>

                <li class="panel-block">
                    <label class="column is-2">Phone</label> {{ list.phone }}
                </li>
            </section>
            <footer class="modal-card-foot">
                <button class="button" v-on:click="closeAddModal">Cancel</button>
            </footer>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['showModal'],
        data() {
            return {
                list: {}
            }
        },
        methods: {
            closeAddModal: function () {
                this.$emit('closeAddModal');
            }
        }
    }
</script>