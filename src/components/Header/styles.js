import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0px;
    background-color: #111;
    color: #fff;
    text-transform: uppercase;
    overflow-x: hidden;

    @keyframes typing {
      from { width: 0% }
      to { width: 25% }
    }

    @keyframes blink-animation {
      from, to { border-color: transparent }
      50% { border-color: #FF851B }
    }

    & h1 {
    font-size: 30px;
    overflow: hidden;
    border-right: .15em solid #00d8ff;
    white-space: nowrap;
    margin: 0 auto;
    cursor: pointer;
    animation: 
    typing 3.5s steps(30, end),
    blink-animation .5s step-end infinite;
}
`;