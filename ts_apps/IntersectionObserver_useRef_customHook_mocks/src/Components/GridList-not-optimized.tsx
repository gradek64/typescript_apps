import React, { useState, useEffect, useMemo } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//custom
import Card from './Card';

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
let previousObserver: IntersectionObserver;
const TitlebarGridList = (props: iProps) => {
  const classes = useStyles();
  const { dataSet, updatePage } = props;

  /*
    by default useRef keeps its reference throuh lifecycle of the component
    so event when component re-render it keeps the track of the Dom element that is reffered
  */

  //last card refference is stored here cause we want to change once we get to the bottom of the page
  const [refElement, setRefElement] = useState<HTMLDivElement | null>(null);

  /*
   * react hooks update by re-rendering entire component what is reflected in useEffect method(it will run on every re-render
   * unless dependency array is specify as [refElement] that would run on refElement value change). Nethertheless if anything changes
   * in the hook body component it will re-render entire component. Thefore our below Observer
   * is being re-created every single time when component re-render. That could cause serious load
   * on computer memory and on overall perfomance. The solution would be to either limit the amounf
   * obsever reaction by React.memo() or creat just one and keep it refference by React.useRef() => the most optimal
   * solution.
   *
   */
  const observer = new IntersectionObserver( //React.useRef(
    (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        updatePage();
      }
    },
    //start loading when 70% of last card is visible 1
    //{ threshold: 1 } means 100% fully visible
    { threshold: 0.7 }
  );

  useEffect(() => {
    const currentElement = refElement;
    if (currentElement) {
      observer.observe(currentElement);
    }
    //simple test checks if we created new Observer or we still using the same one
    //in this example we keep creating a new one since no optimazation is implemented
    if (previousObserver) {
      console.log('previousObserver===observer', previousObserver === observer);
    }

    previousObserver = observer;
    console.log('GridList updated');

    //return mehtod will run when component is dismouted or before being updated
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
        console.log('GridList dismouted or updated');
      }
    };
    //try to limit the list of dependencies for useEfect
    //if observer was set in UseRef(new observer) then it doesnt need to be set
    //as dependency cause is persistant for whole cicle of the component
  }, [refElement, observer]);

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
