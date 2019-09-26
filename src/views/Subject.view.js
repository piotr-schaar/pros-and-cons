import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "context/App.context";
import Heading from "components/atoms/Heading";
import Card from "components/molecules/Card";
import Input from "components/atoms/Input";
import Form from "components/atoms/Form";
import Button from "components/atoms/Button";
import Animation from "components/organisms/Animation";

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
      <Card>
        <Heading pb={20}>What&apos;s your problem?</Heading>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            value={textValue}
            onChange={handleChange}
          />
          <Button hidden type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Animation>
  );
};

export default SubjectView;
