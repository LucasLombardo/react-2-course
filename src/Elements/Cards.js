import styled from 'styled-components';
/* eslint import/prefer-default-export: 0 */
// eslint-disable-next-line
import { elevation, transition, black } from "Utilities";

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  max-width: 320px;
  margin: 0 auto;
  color: ${black};
  ${elevation[3]};
  ${transition({
    property: 'box-shadow',
  })};
  &:hover {
    ${elevation[4]};
  }
`;
