import styled from "styled-components";
import { Firebase, provider } from "../../firebase";
import LoginNavBar from "./LoginNavBar";
import {useHistory} from 'react-router-dom'

const Login = (props) => {
  
  const history = useHistory()
  const login = ()=>{
    Firebase.auth().signInWithRedirect(provider)
  }
  Firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      history.push('/home')
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user.photoURL)
    }
  })

  return (
    <Container>
        <LoginNavBar/>
      <Content>
        <CTA>
          <Description2>
          Unlimited movies, TV shows and more.
          </Description2>
          <Description1>
          Watch anywhere. Cancel anytime.
          </Description1>
          <Description>
          Ready to watch? Enter your email to create or restart your membership.
          </Description>
          <SignUp onClick={login}>GET STARTED</SignUp>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/login-background.jpg?raw=true");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;


const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #e50914;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #d9343c;
    cursor:pointer;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 15px;
  font-weight : bold;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const Description1 = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 35px;

  margin: 0 0 24px;
  line-height: 1.5;
  max-width: 640px;
`;

const Description2 = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 50px;
  font-weight : bold;
  margin: 0 0 24px;
  line-height :1;
  max-width: 640px;
`;



export default Login;
