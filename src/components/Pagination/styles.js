import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #38444d;
  color: #8899a6;
  padding: 1.5rem 3rem;

  a {
    color: #38444d;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #1fa1f2;
    }
  }
`;
