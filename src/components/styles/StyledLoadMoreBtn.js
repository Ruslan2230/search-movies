import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
  background: #e15;
  width: 15%;
  min-width: 200px;
  height: 70px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-family: 'Abel', sans-serif;
  font-size: 28px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: 0;

  :hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4,
                0 0 50px #03e9f4, 0 0 100px #03e9f4;
  }
`;
