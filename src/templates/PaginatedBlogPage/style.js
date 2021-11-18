import styled from "styled-components";

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Post = styled.div`
  margin: 20px 0;
  a {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Pagination = styled.div`
  text-align: center;
  a {
    padding: 20px;
  }
  background: black;
  margin-right: 45%;
  margin-left: 43%;
  border-radius: 10px;
`;

export const NumberPage = styled.div`
  width: 80px;
  height: 80px;
  color: white;
  cursor: pointer;
  display: inline;
  font-size: ${({ isActivePage }) => (isActivePage ? "20px" : "16px")};
  font-weight: ${({ isActivePage }) => (isActivePage ? "bold" : "normal")};
`;
