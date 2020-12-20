import { Header } from 'common/components';
import { ResultDetails } from '../components';
import { StyledResultPage } from './styles';

const ResultPage = () => (
  <>
    <Header />
    <StyledResultPage>
      <ResultDetails />
    </StyledResultPage>
  </>
);

export default ResultPage;
