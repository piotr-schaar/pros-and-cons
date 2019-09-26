import React from "react";
import PropTypes from 'prop-types'

import styled, { css } from "styled-components";

const types = {
  fadeInOut: "fadeInOut"
};

const FadeAnimated = styled.div`
  position: relative;
  transform: translateX(0);
  opacity: 0;
  transition: all ${({ transition }) => (transition ? `${transition}s` : "2s")}
    ease-in-out;

  ${({ toggle }) =>
    toggle &&
    css`
      transform: translateX(-100vh);
      opacity: 0;
    `}
  ${({ toggle }) =>
    toggle === false &&
    css`
      opacity: 1;
    `}
`;

const Animation = ({ type, toggle, duration, children }) => {
  switch (type) {
    case types.fadeInOut:
      return (
        <FadeAnimated toggle={toggle} transition={duration}>
          {children}
        </FadeAnimated>
      );
    default:
      return null;
  }
};

Animation.propTypes = {
    type: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}


export default Animation;
