import styled from 'styled-components';
import { Row } from 'react-grid-system';
import color from 'common/styles/colors';
import { PanelMixin } from 'common/styles/mixins';

export const StyledDashboardResult = styled(Row)`
  ${PanelMixin};

  width: unset;
  height: 6rem;

  color: ${color.black};

  margin-bottom: 2rem;
  padding: 2rem;
`;
