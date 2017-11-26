import Home from './pages/Home.vue'
import Dataset from './pages/Dataset.vue'
import ApiDoc from './ApiDoc.vue'

export default [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/dataset/:datasetId',
  name: 'Dataset',
  component: Dataset
}, {
  path: '/api-doc',
  name: 'ApiDoc',
  component: ApiDoc
}, {
  path: '/signin',
  name: 'Signin',
  redirect: to => {
    localStorage.setItem('id_token', to.query.id_token)
    return {
      path: '/',
      query: null
    }
  }
}]
