import { createStorageWrapper } from './storageWrapperFactory'


export const MERGE_ACTION_SUFFIX = '_MERGE_STATE'

const throwError = (message:any) => {
  throw new Error(`State sync with storage: ${message}`)
}

interface syncHandlerInt {
  key:string,
  storedActions:string[],
  storageType?:typeof sessionStorage |  typeof localStorage,
}

export const createSyncHandler = ({
  key, // used as a key in local storage
  storedActions, // an array of actions when should trigger persisting to local storage
  storageType, // localStorage or sessionStorage
}:syncHandlerInt) => {
  if (!key) throwError('Missing key')
  if (!Array.isArray(storedActions) || !storedActions.length)
    throwError('Missing storedActions')

  const mergeActionType = `${key.toUpperCase()}${MERGE_ACTION_SUFFIX}`

  console.log('mergeActionType',mergeActionType)

  //deal with storage either make entry or read entry start from here
  const storage = createStorageWrapper(storageType= localStorage)

  console.log('storage key', key)
  

  return {
    key,
    storage,
    storedActions,
    mergeActionType,
    retrieve: () => storage.getItem(key),
    persist: (obj:any) => storage.setItem(key,obj),
    merge: (state:object, data:object) => (true ? { ...state, ...data } : data),
  }
}
