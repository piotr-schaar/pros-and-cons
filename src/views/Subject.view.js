import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from 'context/App.context';
import Heading from 'components/atoms/Heading';
import Card from 'components/molecules/Card';

const SubjectView = () => {
  const [store, setStore] = useContext(AppContext);
  const [textValue, setTextValue] = useState('');

  const handleValue = e => setTextValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setStore({ ...store, subject: textValue, isSubSelected: true });
  };

  if (store.isSubSelected) return <Redirect to="/main" />;

  return (
    <Card>
      <Heading pb={20}>Whats your problem?</Heading>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" value={textValue} onChange={handleValue} />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default SubjectView;
