import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from 'styled-components'
import { AppContext } from "context/App.context";
import Heading from "components/atoms/Heading";
import Card from "components/molecules/Card";
import Input from "components/atoms/Input";
import Form from "components/atoms/Form";
import Button from "components/atoms/Button";
import Animation from "components/organisms/Animation";
import Logo from "../components/atoms/Logo";

const FlexWrapper = styled.div`
  display:flex;
  flex-direction: column;
`


const SubjectView = () => {
  const [store, setStore] = useContext(AppContext);
  const [textValue, setTextValue] = useState("");
  const [redirect, setRedirect] = useState(null);

  const transitionDuration = 1;
  useEffect(() => {
    setTimeout(() => {
      setRedirect(false);
    }, transitionDuration * 500);
  }, []);

  const handleChange = e => setTextValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setRedirect(true);
    setTimeout(() => {
      setStore({ ...store, subject: textValue, isSubSelected: true });
    }, transitionDuration * 1000);
  };

  if (store.isSubSelected) return <Redirect to="/main" />;
  return (
    <Animation type="fadeInOut" toggle={redirect} duration={transitionDuration}>
      <Logo />
      <Card p={40}>
        <Form onSubmit={handleSubmit}>
          <FlexWrapper>
            <Heading>Is</Heading>
            <Input name="name" type="text" value={textValue} onChange={handleChange} />
            <Button hidden type="submit">
              Submit
            </Button>
            <Heading pt={20}>worth it?</Heading>
          </FlexWrapper>
        </Form>
      </Card>
    </Animation>
  );
};

export default SubjectView;
