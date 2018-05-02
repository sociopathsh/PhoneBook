<template>

    <div class="modal" v-bind:class="addModal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <!-- Content ... -->
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button" v-on:click="closeAddModal">Cancel</button>
            </footer>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['addModal'],
        methods: {
            closeAddModal: function () {
                this.$emit('closeAddModal');
            }
        }
    }
</script>