import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/background.jpg');
  background-size: 66%;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: black;
  color: white;
  text-align: center;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 450px;
  position: absolute;
  right: 0;

  h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
    color: #7f56d9;
  }
`;

export const Input = styled.input`
  padding: 14px;
  margin: 12px 0;
  border: 1px solid #fff;
  border-radius: 50px;
  width: 100%;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #fff;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 12px 0;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Button = styled.button`
  padding: 14px;
  margin-top: 20px;
  background-color: #fff;
  color: #7f56d9;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;
  font-size: 1.1rem;
  transition: all 0.3s;

  &:hover {
    background-color: #7f56d9;
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 12px rgba(127, 86, 217, 0.7);
  }

  &.password-toggle {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    width: auto;
    color: #7f56d9;

    &:hover {
      color: #fff;
    }
  }
`;