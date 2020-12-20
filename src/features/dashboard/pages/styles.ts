import styled from 'styled-components';
import { Col, Container } from 'react-grid-system';
import color from 'common/styles/colors';

export const StyledDashboardPage = styled(Container)`
  min-height: 100vh;

  padding: 10rem 0 5rem;
`;

export const StyledCol = styled(Col)`
  color: ${color.blue};
  text-transform: uppercase;

  margin-bottom: 2rem;
`;
