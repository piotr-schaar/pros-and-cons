import React, { useState, useContext } from 'react';
import { AppContext } from 'context/App.context';

const SubjectView = () => {
  const [store, setStore] = useContext(AppContext);
  const [textValue, setTextValue] = useState('');

  const handleValue = e => setTextValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setStore({ ...store, subject: textValue });
  };
  console.log(store);
  return (
    <div>
      <h1>subject</h1>
      {store.isSubSelected}
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" value={textValue} onChange={handleValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubjectView;
