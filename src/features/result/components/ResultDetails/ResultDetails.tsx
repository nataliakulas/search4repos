import { useSelector } from 'react-redux';
import renderPlaceholder from 'common/utils/presenters/renderPlaceholder';
import { renderDate } from 'features/result/utils/presenters';
import { selectResult } from 'features/result/slice';
import { StyledResultDetails, StyledResultDetail, StyledResultHeader } from './styles';

const ResultDetails = () => {
  const result = useSelector(selectResult);

  return (
    <StyledResultDetails>
      <StyledResultHeader>Result Details:</StyledResultHeader>
      <StyledResultDetail>
        Owner: <span>{renderPlaceholder(result.owner)}</span>
      </StyledResultDetail>
      <StyledResultDetail>
        Repository: <span>{renderPlaceholder(result.repo)}</span>
      </StyledResultDetail>
      <StyledResultDetail>
        Description: <span>{renderPlaceholder(result.description)}</span>
      </StyledResultDetail>
      <StyledResultDetail>
        Last updated: <span>{renderDate(result.updated)}</span>
      </StyledResultDetail>
      <StyledResultDetail>
        Primary language: <span>{renderPlaceholder(result.language)}</span>
      </StyledResultDetail>
      <StyledResultDetail>
        Stargazers: <span>{renderPlaceholder(result.stargazers)}</span>
      </StyledResultDetail>
      <StyledResultDetail>
        Subscribers: <span>{renderPlaceholder(result.subscribers)}</span>
      </StyledResultDetail>
    </StyledResultDetails>
  );
};

export default ResultDetails;
