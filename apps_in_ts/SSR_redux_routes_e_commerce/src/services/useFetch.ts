import {useEffect,useState} from 'react'

//custom 
import {ApiStructureInterface} from './ApiInterface'

export const useFetch = ({url}:{url:string}) => {

  const [data, setData] = useState<ApiStructureInterface[] | null>(null)
  const [loading,isLoading] = useState(true)
  const [error,setError] = useState<any>(null)

  useEffect(() => {

    let isCancelled = false;
      const callApi = async () => {
        try {
          if(!isCancelled){
            isLoading(true);
            let responseData:ApiStructureInterface[] | null
            const dataBack = await fetch(url)
            const singleLocation = await dataBack.json()
            responseData = singleLocation
              responseData ? setData(responseData) : setData(null)
              responseData ? setError(null) : setError('error')  
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

  return { data,loading,error}

}