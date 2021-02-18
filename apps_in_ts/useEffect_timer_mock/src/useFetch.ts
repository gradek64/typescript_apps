import { useState,useEffect }from "react";

//mock Api
import {get} from './mockApi'

export const useFetch = ({id}={id:0})=>{
  const [loading,isLoading]=useState(true);
  const [data,setData]=useState<{[key:string]:any} | null>(null)
  const [error,hasError]=useState<string | null>(null)
  const [currentId,setCurrentId]=useState(id)


  /**
   * useEffect [] dependency will dictated when the useEffect refresh
   * any other state change inside wont cause it to refresh 
  */

  useEffect(()=>{
    const mockApi = async () => {
      try{
          //loading has crucial of detecting state before and after change 
          //for next successful load for timer useEffect(),[loading] dependency
          isLoading(true)
          const response = await get({id:currentId})
          //don t update if there is an error and terminate
          //if(error){hasError(null);return}
          hasError(null)
          isLoading(false)
          setData((prevData=>Array.isArray(prevData)?[response,...prevData]:[response]))
        }
      catch(e) {
        isLoading(false)
        hasError(e)
      }
    }
    mockApi()
   //call useEffect on currentId change and error change
  },[currentId])



  return {loading,data,setCurrentId,currentId,error}
}