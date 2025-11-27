import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const NavButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: #45a049;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem;
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
  return (
    <>
      <Header>
        <Title>MovieDiary</Title>
        <NavButton to="/calendar">カレンダーを見る</NavButton>
      </Header>
      <HomeContainer>
        <WelcomeMessage>直近2-3年で観た映画の内容を覚えていますか？<br />内容を記録することで自身の考え方の変化が見えてくるかもしれません。</WelcomeMessage>
        <Description>
          あなたの映画体験を記録し、思い出を振り返るためのアプリです。
          カレンダーで日付を選択して、映画を追加しましょう。
        </Description>
      </HomeContainer>
    </>
  );
}

export default Home;