<template>
  <v-list
    v-if="catalog"
    dense
    class="list-actions"
  >
    <v-list-item
      v-if="can('delete')"
      @click="showDeleteDialog = true"
    >
      <v-list-item-icon>
        <v-icon color="warning">
          mdi-delete
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title>Supprimer</v-list-item-title>
    </v-list-item>

    <v-list-item
      v-if="can('delete')"
      @click="showOwnerDialog = true"
    >
      <v-list-item-icon>
        <v-icon color="warning">
          mdi-account
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title>Changer de propriétaire</v-list-item-title>
    </v-list-item>

    <v-dialog
      v-model="showDeleteDialog"
      max-width="500"
    >
      <v-card outlined>
        <v-card-title primary-title>
          Suppression de la configuration du catalogue
        </v-card-title>
        <v-card-text v-if="nbPublications > 0">
          <v-alert
            :value="nbPublications === 1"
            type="error"
            outlined
          >
            Attention ! Ce catalogue est référencé dans un lien de publication. Si vous le supprimez ce lien sera invalide.
          </v-alert>
          <v-alert
            :value="nbPublications > 1"
            type="error"
            outlined
          >
            Attention ! Ce catalogue est référencé dans ${nbPublications} liens de publication. Si vous le supprimez ces liens seront invalides.
          </v-alert>
        </v-card-text>
        <v-card-text>
          Voulez vous vraiment supprimer la configuration du catalogue "{{ catalog.title }}" ? La suppression est définitive et le paramétrage ne pourra pas être récupéré.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="showDeleteDialog = false">
            Non
          </v-btn>
          <v-btn color="warning" @click="confirmRemove">
            Oui
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="showOwnerDialog"
      max-width="900"
      outlined
    >
      <v-card>
        <v-card-title primary-title>
          Changer le propriétaire du catalogue
        </v-card-title>
        <v-card-text>
          <owner-pick v-model="newOwner" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="showOwnerDialog = false">
            Annuler
          </v-btn>
          <v-btn
            :disabled="!newOwner"
            color="warning"
            @click="changeOwner(newOwner); showOwnerDialog = false;"
          >
            Confirmer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-list>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
    data: () => ({
      showDeleteDialog: false,
      showOwnerDialog: false,
      newOwner: null,
    }),
    computed: {
      ...mapState('catalog', ['catalog', 'nbPublications']),
      ...mapGetters('catalog', ['can']),
    },
    methods: {
      ...mapActions('catalog', ['patch', 'remove', 'changeOwner']),
      async confirmRemove() {
        this.showDeleteDialog = false
        await this.remove()
        this.$router.push({ path: '/catalogs' })
      },
    },
  }
</script>

<style lang="css" scoped>
</style>
