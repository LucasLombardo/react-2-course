import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line
import { Portal } from "Utilities";
import { Card } from './Cards';
import Icon from './Icon';

/* eslint react/prop-types: 0 */
// TODO: add prop-types for children if needed

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton type="button" onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = Card.extend`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 20px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;
