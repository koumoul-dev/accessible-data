<template>
  <v-list two-line>
    <template v-for="(dataset, i) in datasets">
      <v-list-item :key="`tile-${dataset.id}`">
        <v-list-item-content>
          <v-list-item-title>
            <a
              :href="dataset.page"
              target="_top"
            >{{ dataset.title || dataset.id }}</a>
            <span v-if="dataset.storage">({{ dataset.storage.size | displayBytes }})</span>
            <span v-else>(pas d'information de stockage)</span>
          </v-list-item-title>
          <template v-if="dataset.storage">
            <v-list-item-subtitle v-if="dataset.storage.fileSize">
              {{ dataset.storage.fileSize | displayBytes }} de fichier de données
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="dataset.storage.attachmentsSize">
              {{ dataset.storage.attachmentsSize | displayBytes }} de pièces jointes
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="dataset.storage.collectionSize">
              {{ dataset.storage.collectionSize | displayBytes }} de lignes en base de données
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="dataset.storage.revisionsSize">
              {{ dataset.storage.revisionsSize | displayBytes }} de révisions historisées
            </v-list-item-subtitle>
          </template>
        </v-list-item-content>
      </v-list-item>
      <v-divider
        v-if="i < datasets.length - 1"
        :key="`divider-${dataset.id}`"
      />
    </template>
  </v-list>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    props: ['datasets', 'urlTemplate'],
    computed: {
      ...mapState(['env']),
    },
    watch: {
      datasets() {
        this.datasets.forEach(dataset => {
          dataset.link = (this.urlTemplate || `${this.env.publicUrl}/dataset/{id}`).replace('{id}', dataset.id)
        })
      },
    },
  }
</script>

<style lang="css" scoped>
</style>
