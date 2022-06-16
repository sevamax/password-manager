import styled from 'styled-components';

export const InputFieldContainer = styled.div`

  form {
      text-align: left;
      max-width: 450px;
      display: flex;
      flex-direction: column;
      margin: 0 auto; 
  }

  .pasman__field {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .input-wrapper {
      /* width: 100%;
      max-width: 100%; */

      @media screen and (max-width: 600px) {
        width: calc(100% - 20px);
        max-width: 100%;
        margin-top: 5px;
      }
    }
  }

  .pasman__field + .pasman__field {
    margin-top: 15px;
  }

  button[type="submit"] {
    margin-top: 20px;
    background-color: transparent;
    cursor: pointer;

    @media screen and (max-width: 600px) {
      height: 40px;
    }
  }
  button[type="submit"]:hover,
  button[type="submit"]:focus {
    background-color: #f8f9fa;
    cursor: pointer;
  }

  button[type="submit"]:active {
    transform: scale(0.97);
  }
`;