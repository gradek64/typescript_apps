import storageHandlers from '../multiTabSync/handlers/index'
import { syncState } from './syncState'

const isBrowser = typeof window !== 'undefined';

type HiddenPropertyBrowser = Document & {msHidden: string,webkitHidden:string}

const getHiddenDocumentPropertyName = () => {
  if (isBrowser && document) {
    if (typeof (document as HiddenPropertyBrowser).hidden !== 'undefined') {
      return 'hidden'
    } else if (typeof (document as HiddenPropertyBrowser).msHidden !== 'undefined') {
      return 'msHidden'
    } else if (typeof (document as HiddenPropertyBrowser).webkitHidden !== 'undefined') {
      return 'webkitHidden'
    }
  }
   //default
   return 'hidden'
}

const getVisibilityChangeEventName = () => {
  if (isBrowser && document) {
    
    if (typeof document.hidden !== 'undefined') {
      return 'visibilitychange'
    } else if (typeof (document as HiddenPropertyBrowser).msHidden !== 'undefined') {
      return 'msvisibilitychange'
    } else if (typeof (document as HiddenPropertyBrowser).webkitHidden !== 'undefined') {
      return 'webkitvisibilitychange'
    }
  }
    //default
    return 'visibilitychange'
  
}

const listenToVisibilityEvents = (dispatch:Function, getState:Function) => {
  const hiddenDocumentPropertyName = getHiddenDocumentPropertyName()
  if (hiddenDocumentPropertyName !== undefined) {
    //register visibility event change
    document.addEventListener(getVisibilityChangeEventName(), () => {
      if (! (document as HiddenPropertyBrowser)[hiddenDocumentPropertyName]) {
        syncState()(dispatch, getState)
      }
    })
  }
}

const listenToStorageEvents = (dispatch:Function, getState:Function) => {
  const hiddenDocumentPropertyName = getHiddenDocumentPropertyName()
  if (hiddenDocumentPropertyName !== undefined) {
    window.addEventListener('storage', (e) => {
      if (! (document as HiddenPropertyBrowser)[hiddenDocumentPropertyName]) {
        console.log('what is the storage key ?',e.key)
        if (e.key && Object.keys(storageHandlers).includes(e.key)) {
          syncState([e.key])(dispatch, getState)
        }
      }
    })
  }
}

export const setUpMultiTabSyncListeners = (dispatch:Function, getState:Function) => {
  //register and listener for localStorage changes and tab/window visibility changes
  listenToVisibilityEvents(dispatch, getState)
  listenToStorageEvents(dispatch, getState)
}
