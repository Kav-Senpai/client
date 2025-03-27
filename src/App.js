import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [user, setUser] = useState(true);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      {user ? (
        <Container>
          <Navbar />
        </Container>
          ) : (
            <Container>
              <Authentication/>
            </Container>
          )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
