import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-grid-system';
import { Result } from 'common/types';
import { Header } from 'common/components';
import { DashboardHeader, DashboardPlaceholder, DashboardResult, DashboardSearch } from '../components';
import { resetResults, selectCount, selectResults } from '../slice';
import header from './header';
import { StyledCol, StyledDashboardPage } from './styles';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const results = useSelector(selectResults);

  useEffect(() => {
    return () => {
      dispatch(resetResults());
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <StyledDashboardPage>
        <Row>
          <Col xs={12} sm={6}>
            <DashboardSearch />
          </Col>
        </Row>
        {count ? (
          <>
            <DashboardHeader count={count} />
            <Row>
              {header.map(({ label, width }: { label: string; width: number }) => (
                <StyledCol xs={width}>{label}</StyledCol>
              ))}
            </Row>
            {results.map((result: Result) => (
              <DashboardResult key={result.id} result={result} />
            ))}
          </>
        ) : (
          <DashboardPlaceholder />
        )}
      </StyledDashboardPage>
    </>
  );
};

export default DashboardPage;
