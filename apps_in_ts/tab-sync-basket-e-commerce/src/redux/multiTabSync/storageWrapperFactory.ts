
/* const isStorageAvailable = (storage, storageType) => {
  let storageAvailable = false
  try {
    const key = 'isStorageAvailable'
    const value = 'test'
    storage.setItem(key, value)
    if (storage.getItem(key) === value) {
      storageAvailable = true
      storage.removeItem(key)
    }
  } catch (e) {
    /* console.log('storage', {
      loggerMessage: `${storageType} is not available. ${e.message}`,
    }) */
   /* storageAvailable = false
  }

  return storageAvailable
} */

/**
 * This wrapper unifies storage handling and will be used to gradually replace src/client/lib/storage.js
 * @param storageType
 * @returns {*}
 */
const isBrowser = typeof window !== 'undefined';

export const createStorageWrapper = (storageType = localStorage) => {
  const noop = () => {}
  const noopStorageWrapper = {
    setItem: noop,
    getItem: noop,
    removeItem: noop,
  }

  if (!isBrowser) {
    return noopStorageWrapper
  }
  
  return {
    setItem: (key:string, value:any) => {
      try {
        storageType.setItem(key, JSON.stringify(value))
      } catch (err) {
        console.log('storage', {
          loggerMessage: `Failed to setItem in ${storageType} for key ${key} and value ${value}`,
        })
      }
    },
    getItem: (key:string) => {
      try {
        const serializedState = localStorage.getItem(key) || ''
        console.log('storage.getItem(key)',serializedState)
        return JSON.parse(serializedState)
      } catch (err) {
        console.log('storage', {
          loggerMessage: `Failed to getItem from ${storageType} with key ${key}`,
        })
        return null
      }
    },

    // Storage API's removeItem is a no-op if the key does not exist.
    // It does not throw or return a failing status.
    removeItem: (key:string) => {
      storageType.removeItem(key)
    },
  }
}
