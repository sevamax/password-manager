import styled from 'styled-components';

export const PasswordsListContainer = styled.div`
  margin-top: 50px;

  .password-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  input:checked + .pasman__name {
    text-decoration: line-through;
  }

  .pasman__name,
  .pasman__password {
    font-size: 25px;
  }

  .pasman__password {
    border: none;
    font-size: 25px;
    height: 36px;
    padding-left: 15px;
  }

  .pasman__name + input {
    margin-left: 10px;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
  }

  
  .pasman__item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    max-width: 1100px;
    align-items: center;
  }

  .pasman__text {
    margin-right: 20px;
    word-wrap: break-word;
  }

  .pasman__text input {
    font-size: 25px;
  }

  .btns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    min-width: 120px;
  }

  .loader {
    margin-top: 100px;
  }

`;