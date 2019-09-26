import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from 'context/App.context';
import Animation from 'components/organisms/Animation';
import Card from 'components/molecules/Card';
import Heading from 'components/atoms/Heading';
import ListItem from 'components/organisms/ListItem';
import Form from 'components/atoms/Form';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Select from 'components/atoms/Select';

const SubjectHeading = styled(Heading)`
  padding: 30px;
  text-align: center;
  span {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      bottom: -10px;
      background: ${({ theme }) => theme.yellow};
    }
  }
`;

const MainWrapper = styled.div`
  min-height: 80vh;
  width: 700px;
`;

const BoxInput = styled(Input)`
  width: 60%;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const GridItem = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  align-items: center;
`;

const MainView = () => {
    const [redirect, setRedirect] = useState(null);
    const transitionDuration = 1;
  const [store, setStore] = useContext(AppContext);
  const [newPro, setNewPro] = useState({
    title: '',
    value: 1,
  });
  const [newCon, setNewCon] = useState({
    title: '',
    value: 1,
  });

  useEffect(() => {
    setTimeout(() => {
      setRedirect(false);
    }, transitionDuration * 500);
  }, []);

  const handleProChange = e => {
    setNewPro({
      ...newPro,
      [e.target.name]: e.target.value,
    });
  };
  const handleConChange = e => {
    setNewCon({
      ...newCon,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name;
    const newItem = name === 'pros' ? newPro : newCon;
    setStore({
      ...store,
      [name]: [...store[name], newItem],
    });
  };

  return (
    <Animation type="fadeInOut" toggle={redirect} duration={transitionDuration}>
    <Card>
      <MainWrapper>
        <SubjectHeading as="h3">
          <span>{store.subject}</span>
        </SubjectHeading>
        <GridWrapper>
          <GridItem>
            <Form onSubmit={handleSubmit} name="pros">
              <BoxInput
                name="title"
                value={newPro.title}
                onChange={handleProChange}
                type="text"
                placeholder="type here..."
              />
              <Select
                value={newPro.value}
                handleChange={handleProChange}
                name="value"
                options={4}
              />
              <Button hidden type="submit" />
            </Form>
            <List>
              {store.pros.map(item => (
                <ListItem key={item.title} item={item} />
              ))}
            </List>
          </GridItem>

          <GridItem>
            <Form onSubmit={handleSubmit} name="cons">
              <BoxInput
                name="title"
                value={newCon.title}
                onChange={handleConChange}
                type="text"
                placeholder="type here..."
              />
              <Select
                value={newCon.value}
                handleChange={handleConChange}
                name="value"
                options={4}
              />
              <Button hidden type="submit" />
            </Form>
            <List>
              {store.cons.map(item => (
                <ListItem key={item.title} item={item} />
              ))}
            </List>
          </GridItem>
        </GridWrapper>
      </MainWrapper>
    </Card>
    </Animation>
  );
};

export default MainView;
