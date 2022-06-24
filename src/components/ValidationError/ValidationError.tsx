import ValidationErrorContainer from './styledComponents/ValidationErrorContainer';

interface IValidError {
  errorText: string;
}

const ValidationError: React.FC<IValidError> = ({ errorText }) => (
  <ValidationErrorContainer>
    <div>
      <h3>{errorText}</h3>
    </div>
  </ValidationErrorContainer>
);

export default ValidationError;
