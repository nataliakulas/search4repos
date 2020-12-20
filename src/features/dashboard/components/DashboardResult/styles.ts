import styled from 'styled-components';
import { Row } from 'react-grid-system';
import color from 'common/styles/colors';
import { PanelMixin } from 'common/styles/mixins';
import arrow from 'common/assets/arrow.svg';

export const StyledDashboardResult = styled(Row)`
  ${PanelMixin};

  width: unset;
  height: 6rem;

  color: ${color.black};

  margin-bottom: 2rem;
  padding: 2rem;
`;

export const StyledLink = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  border-radius: 50%;
  background-color: ${color.blue};
  background-repeat: no-repeat;
  background-image: url(${arrow});
  background-position: 0.1rem center;

  margin-left: auto;

  :hover {
    background-color: ${color.violet};
  }
`;
