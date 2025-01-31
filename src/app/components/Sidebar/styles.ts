import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 250px;
  background: #2c3e50;
  color: white;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

export const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 30px;

  .profile-pic {
    width: 80px;
    height: 80px;
    background: #7f56d9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 10px;
  }

  h3 {
    margin: 10px 0 5px;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #bdc3c7;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #34495e;
  }

  span {
    margin-left: 10px;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  width: 100%;
  padding: 12px;
  background: #7f56d9;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #6f42c1;
  }

  span {
    margin-left: 10px;
    font-size: 1rem;
  }
`;