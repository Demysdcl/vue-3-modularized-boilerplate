import mainStore from '@/store'
import localStore from '../home/store'

mainStore.registerModule('home', localStore)
