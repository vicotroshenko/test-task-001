import GetWorking from "../GetWorking/GetWorking";
import HeaderWrapper from "../Header/HeaderWrapper/HeaderWrapper";
import Hero from "../Hero/Hero";
import PostWorking from "../PostWorking/PostWorking";
import { MainContainer } from "./App.styled";

function App() {
  return (
    <MainContainer>
      <HeaderWrapper/>
      <Hero/>
      <GetWorking/>
      <PostWorking/>
    </MainContainer>
  );
}

export default App;

