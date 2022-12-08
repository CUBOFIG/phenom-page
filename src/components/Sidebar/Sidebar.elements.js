import styled from "styled-components";

export const SidebarContainer = styled.div`
  overflow-y: hidden;
  display: flex;

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
    background-color: #858c69;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;

  & ul {
    padding: 0;
  }

  & li {
    margin-top: 2.2rem;
    list-style: none;
  }

  & > div {
    display: flex;
    background-color: #73473d;
    justify-content: center;

    & > a {
      margin: 1rem;
      color: #f2a488;
    }
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
