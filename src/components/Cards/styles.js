import styled from 'styled-components';

export const CardsSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 50px 0px;
    background-color: #001f3f;
    color: #fff;

    & h2 {
      color: #FF851B; text-transform: uppercase;
    }
`;

export const CardsContainer = styled.div`
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 100px;
  width: 100px;
  height: 100px;
  margin: 30px 30px;

  &:hover {
    opacity: 0.8;
  }

  & ul li {
    list-style: circle;
  }

  @media (max-width: 768px) {
    & {
      font-size: 5em;
      justify-content: center;
      width: 70px;
      margin: 30px 18px;
    }
  }
`;