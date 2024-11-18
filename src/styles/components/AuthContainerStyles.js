import styled from 'styled-components';

export const AuthWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: rgb(246,246,248); 
  overflow: hidden;
  position: relative;
`;

export const BigCircle = styled.div`
    background-color: rgb(246,246,248);
    border: 2px solid rgb(229,226,240);
    border-radius: 50%;
    height: 58vw;
    width: 58vw;
    position: absolute;
    bottom: -7rem; 
    left: 50%;
    transform: translateX(-12%);  
    z-index: 0;  
`;

export const SmallCircle = styled.div`
    background-color: rgb(246,246,248);
    border: 2px solid rgb(214,203,228);
    border-radius: 50%;
    height:43vw;
    width: 43vw;
    position: absolute;
    top: 2rem; 
    left: 50%;
    transform: translateX(1%);  
    z-index: 0;  
`;

export const AuthUp = styled.div`
    display: flex;  
    flex: 1;  
    position: relative;  
    z-index: 1;  
`;

export const AuthLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  
`;

export const AuthRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

`;

