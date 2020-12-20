import { Col } from 'react-grid-system';
import { Result } from '../../types';
import { StyledDashboardResult } from './styles';

const DashboardResult = ({ result: { repo, owner, stargazers, language } }: { result: Result }) => (
  <StyledDashboardResult>
    <Col xs={4}>{repo}</Col>
    <Col xs={3}>{owner}</Col>
    <Col xs={2}>{stargazers}</Col>
    <Col xs={3}>{language || '-'}</Col>
  </StyledDashboardResult>
);

export default DashboardResult;
