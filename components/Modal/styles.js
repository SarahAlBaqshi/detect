import styled from "styled-components";

export const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20;
  padding: 35px;
  align-items: center;
  height: 80%;
`;

export const OpenButton = styled.TouchableHighlight`
  align-self: center;
  margin-top: 10px;
  background-color: #588157;
  border-radius: 20;
  padding: 10px;
  margin-bottom: -15px;
`;

export const OpenButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;
