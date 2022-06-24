import styled from 'styled-components';

const ValidationErrorContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  & > div {
    position: relative;
    font-size: 14px;
    line-height: 0.85;
    letter-spacing: 0.01071em;
    background-color: #d32f2f;
    border-radius: 8px;
    display: flex;
    padding: 3px 16px;
    color: #ffffff;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjZmZmIj4KICA8cGF0aCBkPSJtNDA2LjkxIDQ2My40MmMtNTcuOTEgMC0xMDUuMS00Ny4xOTEtMTA1LjEtMTA1LjEgMC01Ny45MSA0Ny4xOTEtMTA1LjEgMTA1LjEtMTA1LjFzMTA1LjEgNDcuMTkxIDEwNS4xIDEwNS4xYzAgNTcuOTEtNDcuMTkxIDEwNS4xLTEwNS4xIDEwNS4xem0wLTE5Ny4yNWMtNTAuODA5IDAtOTIuMTU2IDQxLjM0NC05Mi4xNTYgOTIuMTU2IDAgNTAuODA5IDQxLjM0NCA5Mi4xNTYgOTIuMTU2IDkyLjE1NiA1MC44MDkgMCA5Mi4xNTYtNDEuMzQ0IDkyLjE1Ni05Mi4xNTYtMC4wMDM5MDYtNTAuODEyLTQxLjM0OC05Mi4xNTYtOTIuMTU2LTkyLjE1NnoiLz4KICA8cGF0aCBkPSJtNDQxLjcxIDMzMi43MS05LjE4NzUtOS4xODc1LTI1LjYxMyAyNS42MTMtMjUuNjEzLTI1LjYxMy05LjE4NzUgOS4xODc1IDI1LjYxMyAyNS42MTMtMjUuNjEzIDI1LjYxNyA5LjE4NzUgOS4wNDY5IDI1LjYxMy0yNS42MTMgMjUuNjEzIDI1LjYxMyA5LjE4NzUtOS4wNDY5LTI1LjYxMy0yNS42MTd6Ii8+CiA8L2c+Cjwvc3ZnPgo=');
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    animation: fade 1500ms ease-in;
    animation-delay: 6000ms;
    animation-fill-mode: forwards;
  }


  h3 {
    padding-left: 30px;
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default ValidationErrorContainer;
