import React, { useEffect, useState, useMemo } from 'react';
import { updateShippingDestination } from '../../redux/actions/shippingDestinations_actions'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


//custom 
import ShippingDestinationCountrySelect from "../functional/SelectOptions/SelectOptions";
interface RootState {
  shippingCountry: {
    destination: string,
    language: string,
  }
}
const SelectCountryDestinationContainer = () => {
  //set default shipping country
  const shippingCountries = useMemo(() => ['UK', 'France', 'Poland', 'Germany', 'Belgium'], [])
  //const [country, setCountry] = useState<string>(destination)
  /*  useEffect(() => {
     updateShippingDestination(destination)
   }, [updateShippingDestination, destination])
  */


  const { destination, language } = useSelector(
    (state: RootState) => ({
      destination: state.shippingCountry.destination,
      language: state.shippingCountry.language,
    }),
    shallowEqual //this allows to update property if needed by shallow comparison of value
  );
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <span>country:{destination} </span>
        <span>language:{language}</span>
      </div>
      <ShippingDestinationCountrySelect
        eventHandler={(e: React.ChangeEvent) => {
          const { value } = e.target as HTMLOptionElement
          dispatch(updateShippingDestination(value))
          //set localStorage with shippingCountry destination
          localStorage.setItem('shippingCountry', value)
          //setCountry(value)
        }
        }
        defaultV={destination}
        options={shippingCountries} />
    </>
  )
}

/* const mapDispatchToProps = {
  updateShippingDestination,
}; */
/* const mapStateToProps = ({ shippingCountry }: { shippingCountry: any }) => {
  const { destination, language } = shippingCountry;
  return { destination, language };
}; */
//const connector = connect(mapStateToProps, mapDispatchToProps)
//const WrapperSelectCountryDestinationContainer = connector(SelectCountryDestinationContainer);
//type PropsFromRedux = ConnectedProps<typeof connector>

export default SelectCountryDestinationContainer;
