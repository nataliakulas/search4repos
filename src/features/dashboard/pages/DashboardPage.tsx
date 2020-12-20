import { Col, Row } from 'react-grid-system';
import { Header } from 'common/components';
import { DashboardPlaceholder, DashboardSearch } from '../components';
import { StyledDashboardPage } from './styles';

const DashboardPage = () => (
  <>
    <Header />
    <StyledDashboardPage>
      <Row>
        <Col xs={12} sm={6}>
          <DashboardSearch />
        </Col>
      </Row>
      <DashboardPlaceholder />
    </StyledDashboardPage>
  </>
);

export default DashboardPage;
