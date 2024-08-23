import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/rodrigorgtic.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>André Zambroni</strong>
        </div>
      </Profile>
    </Container>
  );
}
