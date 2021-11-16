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
`;

export const NumberPage = styled.div`
    width: 80px;
    height: 80px;
    background: ${({ isActivePage }) => (isActivePage ? "#333" : "black")};
    color: white;
    cursor: pointer;
    display: inline;
    font-size: ${({ isActivePage }) => (isActivePage ? "20px" : "16px")};
    font-weight: ${({ isActivePage }) => (isActivePage ? "bold" : "normal")};
    > a {
        color: white;
        text-align: center;
        line-height: 50px;
        text-decoration: none;
        display: block;
        height: 100%;
        width: 100%;
    }
    &:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    &:hover {
        background: #333;
    }

`;