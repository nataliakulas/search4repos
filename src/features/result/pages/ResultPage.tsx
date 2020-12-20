import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Header } from 'common/components';
import { methods } from 'common/methods';
import { result } from 'features/result/enums/result';
import { Details } from 'features/dashboard/types';
import { ResultDetails } from '../components';
import { resetResult, resultRequest } from 'features/result/slice';
import { StyledResultPage } from './styles';

const ResultPage = () => {
  const dispatch = useDispatch();
  const { owner, repo } = useParams<Details>();

  useEffect(() => {
    dispatch(resultRequest({ route: `${methods.get} /${result.repos}/${owner}/${repo}`, owner, repo }));

    return () => {
      dispatch(resetResult());
    };
  }, [dispatch, owner, repo]);

  return (
    <>
      <Header />
      <StyledResultPage>
        <ResultDetails />
      </StyledResultPage>
    </>
  );
};

export default ResultPage;
