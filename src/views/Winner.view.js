import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import { AppContext } from 'context/App.context';
import Card from 'components/molecules/Card'
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph'
import Animation from 'components/organisms/Animation'

const WinnerParagraph = styled(Paragraph)`
  font-size: 34px;
  font-weight: 700;
  padding-top: 24px;
`


const ResultView = () => {
  const [redirect, setRedirect] = useState(null);
  const transitionDuration = 1;

  const [store] = useContext(AppContext);
  
  useEffect(() => {
    setTimeout(() => {
      setRedirect(false);
    }, transitionDuration * 500);
  }, []);

  if(store.winner === '') return <Redirect to="/subject" />


  return (
    <Animation type="fadeInOut" toggle={redirect} duration={transitionDuration}>
      <Card p={30}>
        <Heading>{store.subject}</Heading>
        {store.winner === 'pros' && <WinnerParagraph>Just do it!</WinnerParagraph>}
        {store.winner === 'cons' && <WinnerParagraph>Hell no!</WinnerParagraph>}
      </Card>
    </Animation>
  );
};

export default ResultView;
