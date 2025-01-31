"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginContainer, Input, Button, MainContainer, PasswordContainer, PasswordInputWrapper } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (password === "1234" && username === "teste") {
      localStorage.setItem("auth", "true");
      setTimeout(() => router.push("/dashboard"), 100);
    } else {
      let message = "";
      if (username !== "teste" || password !== "1234") {
        message += "Usuário ou senha incorreta. Tente novamente! ";
      }

      if (username === "" || password === "") {
        message += "Por favor preencha os campos corretamente. ";
      }
      toast.error(message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MainContainer>
      <LoginContainer>
        <h2>Acesse o DashCash</h2>
        <Input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PasswordContainer>
          <PasswordInputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={togglePasswordVisibility} className="password-toggle">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </PasswordInputWrapper>
        </PasswordContainer>
        <Button onClick={handleLogin}>Entrar</Button>
      </LoginContainer>
      <ToastContainer />
    </MainContainer>
  );
}