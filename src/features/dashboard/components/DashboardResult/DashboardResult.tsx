import { Link } from 'react-router-dom';
import { Col } from 'react-grid-system';
import { repoPath } from 'app/Router/utils';
import { Result } from 'common/types';
import renderPlaceholder from 'common/utils/presenters/renderPlaceholder';
import { StyledDashboardResult, StyledLink } from './styles';

const DashboardResult = ({ result: { repo, owner, stargazers, language } }: { result: Result }) => (
  <StyledDashboardResult>
    <Col xs={4}>{repo}</Col>
    <Col xs={3}>{owner}</Col>
    <Col xs={2}>{stargazers}</Col>
    <Col xs={2}>{renderPlaceholder(language)}</Col>
    <Col xs={1}>
      <Link to={repoPath({ owner, repo })}>
        <StyledLink />
      </Link>
    </Col>
  </StyledDashboardResult>
);

export default DashboardResult;
