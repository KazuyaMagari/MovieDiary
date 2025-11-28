import { Link } from "react-router-dom";
import { signOut, useAuthState } from "./LoginWithFirebase/firebase";
import styled from "styled-components";

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavButton = styled(Link)`
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.2rem;
  &:hover {
    background-color: #45a049;
  }
`;

const LoginButton = styled(Link)`
  background-color: #2196f3;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.2rem;
  &:hover {
    background-color: #1976d2;
  }
`;

const RecordButton = styled(Link)`
  background-color: #ff9800;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.2rem;
  &:hover {
    background-color: #f57c00;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserName = styled.span`
  color: white;
  font-size: 1rem;
`;

const LogoutButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const WelcomeMessage = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

function Home() {
  const { user } = useAuthState();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <Header>
        <Title>MovieDiary</Title>
        <NavButtons>
          <NavButton to="/calendar">カレンダーを見る</NavButton>
          {user ? (
            <UserProfile>
              <UserName>{user.displayName || user.email}</UserName>
              <LogoutButton onClick={handleSignOut}>ログアウト</LogoutButton>
            </UserProfile>
          ) : (
            <LoginButton to="/login">ログイン</LoginButton>
          )}
        </NavButtons>
      </Header>
      <HomeContainer>
        <WelcomeMessage>
          直近2-3年で観た映画の内容を覚えていますか？
          <br />
          内容を記録することで自身の考え方の変化が見えてくるかもしれません。
        </WelcomeMessage>
        <Description>
          あなたの映画体験を記録し、思い出を振り返るためのアプリです。
          カレンダーで日付を選択して、映画を追加しましょう。
        </Description>
        <ButtonContainer>
          <NavButton to="/calendar">カレンダーを見る</NavButton>
          <RecordButton to="/calendar">自分の記録を見る</RecordButton>
        </ButtonContainer>
      </HomeContainer>
    </>
  );
}

export default Home;
