import styled from "styled-components";

export const SidebarContainer = styled.div`
  overflow: hidden;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100vh;
    position: absolute;
    opacity: 1;
    z-index: 1000;
    transition: all 0.5s ease;
    left: ${({ click }) => (click ? 0 : "-100%")};
    background-color: black;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3.5rem;

  & ul {
    padding: 0;
  }

  & li {
    margin-top: 2.2rem;
    list-style: none;
  }
`;

export const BackSidebar = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  height: 120%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;
