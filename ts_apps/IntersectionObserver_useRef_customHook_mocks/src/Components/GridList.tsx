import React, { useState, useEffect, useMemo } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//custom
import Card from './Card';


/*
    steps how this works ?

    1. {dataSet.length > 1 && <Grid dataSet={dataSet} updatePage={updatePage} />}
    is being loaded with the first batch

    2.
     2a.useRef(new  IntersectionObserver) is created as initial
     2b.useState is crated as 
      const [refElement, setRefElement] = useState<HTMLDivElement | null>(null);

    3.useEffect is called with:
      const currentObserver = observer.current;
      if (currentElement) {
        currentObserver.observe(currentElement);
      }
    3a. render method crates cards and set useRef to the last element in method
       ref={setRefElement}

    4. user scrolls the page, observer checks if last element is visible at least
    70%
         { threshold: 0.7 }

    5. Last element is intersecting with currentElement and that calls 
      4.a props.updatePage() this updates data and makes data change what 
          caused update in useEffect() hook

        return () => {
          if (currentElement) {
            currentObserver.unobserve(currentElement);
            console.log('GridList dismounted or updated');
          }
        };
     above will stop observing last registered useRef()

     6. render methods renders updated data and assign new last Element
        
        ref={setRefElement}

    that causes update to useState() hook 
        
      const [refElement, setRefElement] = useState<HTMLDivElement | null>(null);

     7. useEffect has dependency to [refElement]  what causes useEffect to be called again 
        and we simply go from points 3 to 7. Cycles continues from point 3 to 7.

*/


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '10px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);
interface iProps {
  updatePage: () => void;
  dataSet: {
    imgURL: string;
    title: string;
    century: string;
    division: string;
  }[];
}
let previousObserver: React.MutableRefObject<IntersectionObserver>;
const TitlebarGridList = (props: iProps) => {
  const classes = useStyles();
  const { dataSet, updatePage } = props;

  //last card refference is stored here cause we want to change once we get to the bottom of the page
  const [refElement, setRefElement] = useState<HTMLDivElement | null>(null);

  /*
   * react hooks update by re-rendering entire component what is reflected in useEffect method(it will run on every re-render
   * unless dependency array is specify as [refElement] that would run on refElement value change). Nethertheless if anything changes
   * in the hook body component it will re-render entire component. To avoid this we should wrap
   * our Observer with React.useRef() and what it does it keeps its reference to the object
   * for the entire lifecyle (when hook re-render it stays the same) it it wasnt wrapper in useRef()
   * observer would keep becoming new object making it a significant load on computer memomory.
   *
   */
  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          updatePage();
        }
      },
      //start loading when 70% of last card is visible
      //{ threshold: 1 } means 100% fully visible
      { threshold: 0.7 }
    )
  ); //observer is NOT re-created it keeps it object refference with whole hook cycle with useRef() wrapper

  useEffect(() => {
    const currentElement = refElement;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    //simple test checks if we created new Observer or we still using the same one
    //in this example we hold one instance of observer so it alwaye returns true!
    if (previousObserver) {
      console.log('previousObserver===observer', previousObserver === observer);
    }

    previousObserver = observer;
    console.log('GridList updated');

    //return mehtod will run when component is dismouted or before being updated
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
        console.log('GridList dismouted or updated');
      }
    };
    //try to limit the list of dependencies for useEfect
    //if observer was set in UseRef(new observer) then it doesnt need to be set
    //as dependency cause is persistant for whole cicle of the component
  }, [refElement]);

  return (
    <Container maxWidth="lg" className={classes.root}>
      {dataSet.map((set: any, index) =>
        //refference to last card another way  index === dataSet.length-1
        dataSet.length === index + 1 ? (
          <div
            ref={setRefElement}
            key={`${set.title}${index}`}
            data-ref={`ref${index}`}
          >
            <Card {...set} />
          </div>
        ) : (
            <div key={`${set.title}${index}`}>
              <Card {...set} />
            </div>
          )
      )}
    </Container>
  );
};
export default TitlebarGridList;
