import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line
import { Portal, absolute } from "Utilities";
import { Transition } from 'react-spring';
import { Card } from './Cards';
import Icon from './Icon';

/* eslint react/prop-types: 0 */
// TODO: add prop-types for children if needed

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        <Transition
          from={{ opacity: 0, bgOpacity: 0, y: -50 }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
        >
          {on
            && (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    transform: `translate3d(0, ${styles.y}px, 0)`,
                    ...styles,
                  }}
                >
                  <CloseButton type="button" onClick={toggle}>
                    <Icon name="close" />
                  </CloseButton>
                  <div>{children}</div>
                </ModalCard>
                <Background
                  style={{ opacity: styles.bgOpacity }}
                  onClick={toggle}
                />
              </ModalWrapper>
            ))}
        </Transition>
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
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
  ${absolute({
    y: 'top',
    x: 'right',
  })};
  border: none;
  background: transparent;
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
