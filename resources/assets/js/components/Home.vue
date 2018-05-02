<template>

    <div>

        <nav class="panel column is-8 is-offset-2">
            <p class="panel-heading">
                Vuejs Phonebook
                <button class="button is-link is-outlined" v-on:click="showAddModal">
                    Add New
                </button>
            </p>
            <div class="panel-block">
                <p class="control has-icons-left">
                    <input class="input is-small" type="text" placeholder="search">
                    <span class="icon is-small is-left">
        <i class="fa fa-search" aria-hidden="true"></i>
      </span>
                </p>
            </div>
            <a class="panel-block" v-for="(list,key) in lists">
            <span class="column is-9">
                {{ list.name }}
            </span>
                <span class="column is-1">
               <span class="panel-icon">
                    <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
                </span>
            </span>

                <span class="column is-1">
               <span class="panel-icon">
                    <i class="has-text-info fa fa-edit" aria-hidden="true"></i>
                </span>
            </span>

                <span class="column is-1">
               <span class="panel-icon">
                    <i class="has-text-primary fa fa-eye" aria-hidden="true" v-on:click="showDetailModal(key)"></i>
                </span>
            </span>

            </a>
        </nav>

        <add-modal v-bind:addModal="addModal" v-on:closeAddModal="closeAddModal"></add-modal>
        <show-modal v-bind:showModal="showModal" v-on:closeAddModal="closeAddModal"></show-modal>

    </div>

</template>

<script>
import addModal from './addModal.vue';
import showModal from './showModal.vue';

    export default {
        components: {
            'add-modal' : addModal,
            'show-modal': showModal
        },
        data() {
            return {
                addModal: '',
                showModal: '',
                lists: {}
            }
        },
        methods: {
            showAddModal: function () {
                this.addModal = 'is-active';
            },
            showDetailModal: function (key) {
                this.$children[1].list = this.lists[key];
              this.showModal = 'is-active';
            },
            closeAddModal: function () {
                this.addModal = '';
                this.showModal = '';
            }
        },
        created() {
            axios.post('/getData').then((response) => {
                this.lists = response.data;
            }).catch((error) => {
                cosole.log(error.response.data.errors);
            });
        }
    }
</script>