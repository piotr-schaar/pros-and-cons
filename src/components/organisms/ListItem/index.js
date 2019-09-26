import React from 'react';
import styled from 'styled-components'
import Paragraph from 'components/atoms/Paragraph';

const GridItem = styled.li`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const ListItem = ({ item }) => {
  return (
    <GridItem key={item.title}>
      <Paragraph bold>{item.title}</Paragraph>
      <Paragraph opacity={0.8}>value: {item.value}</Paragraph>
    </GridItem>
  );
};

export default ListItem;
