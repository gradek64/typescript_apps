import {useEffect,useState} from 'react'

//custom 
import {ApiStructureInterface} from './ApiInterface'
import apiService from "./apiService";

export const useFetch = (
  {url}:{url:string},
  ) => {

  const [data,setData] = useState<ApiStructureInterface[] | null >(null)
  const [loading,isLoading] = useState(true)
  const [error,setError] = useState<any>(null)
  
  useEffect(() => {

    let isCancelled = false;
      const callApi = async () => {
        try {
          if(!isCancelled){
            isLoading(true);
            //it is better to set structure here
            const responseData = await apiService.get(url) as ApiStructureInterface[] 
            responseData ? 
              setData(responseData) : setData(null)
            responseData ? setError(null) : setError('error'); 
              isLoading(false);
            }                    
        }
        catch (error:any) {
          if(!isCancelled){
            isLoading(false);
            setError(error) 
          }
        }
        } 
      callApi()

      //clean up function 
      return function cleanup(){
        isCancelled = true;
      }
  },[url])

  return { data,loading,error }

}