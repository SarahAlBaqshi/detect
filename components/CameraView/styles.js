import styled from "styled-components";
import { Spinner, View, Icon } from "native-base";

export const LiveScanScreen = styled(View)`
  border-radius: 10px;
  align-self: center;
  border: 5px red;
  width: 250px;
  height: 250px;
  position: absolute;
  top: 30%;
`;

export const ResultStyled = styled.Text`
  font-weight: bold;
  margin: 5px;
  align-self: center;
  font-size: 25px;
  margin-bottom: 25px;
  color: white;
  margin-top: 15px;
  text-align: center;
`;

export const SpinnerLoading = styled(Spinner)`
  position: absolute;
  align-self: center;
  top: 70%;
`;

export const FocusIcon = styled(Icon)`
  margin: auto;
  align-self: center;
  font-size: 350px;
  color: white;
`;
