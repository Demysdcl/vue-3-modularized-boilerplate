import mainStore from '@/store'
import localStore from './store'

mainStore.registerModule('shop', localStore)
