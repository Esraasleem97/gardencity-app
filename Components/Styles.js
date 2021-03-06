import React from 'react';
import styled from 'styled-components/native';
import Constants from "expo-constants";
import {Dimensions, PixelRatio, Platform} from "react-native";

export const StatusBarHeight = Constants.statusBarHeight;

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const Colors = {
    primary: '#1960d8',
    secondary: '#f1f5f5',
    tertiary: '#11270b',
    brown: '#9d551a',
    greenLight1: '#e6e7e6',
    darkLight: '#9CA3AF',
    white: '#FFFFFF',
    green1: '#10B981',
    green2: '#149623',
    green3: '#099567',
    greenLight2: '#d5f2e3',
    red: '#EF4444',
    orangeLight: '#FF7E68',
    redLight: '#ffd1d1',
    darkgray: '#555555',
};

const {
    primary,
    secondary,
    tertiary,
    darkLight,
    white,
    green1,
    green2,
    green3,
    greenLight1,
    greenLight2,
    red,
    redLight,
    darkgray,
    brown,
    brownLight,
    orangeLight
} = Colors;

let shadow = Platform.OS === 'ios'
    ? ` 
  shadow-opacity: 0.3;`
    : `elevation: 15;`;

let CheckPlatFormForCardDesign;

if (Platform.OS === 'ios') {
    CheckPlatFormForCardDesign = ` 
  shadow-opacity: 0.3;`;
} else {
    CheckPlatFormForCardDesign = `elevation: 5`;
}

export const Container = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  margin-top: ${StatusBarHeight - 10}px;
  margin-bottom: ${StatusBarHeight + 30}px;
`;
export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const HeaderOpacityStyle = styled.View`
  width: 100%;
  height: 90px;
  justify-content: flex-start;
  background-color: ${greenLight2};
  border-bottom-left-radius: 200px;
`;

export const HeaderStyle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  height: 80px;
  background-color: ${green3};
  ${shadow};
  align-items: center;
  border-bottom-left-radius: 200px;


`;
export const TitleStyle = styled.Text`
  margin-left: ${Platform.OS === 'ios' ? '150px' : '30px'};
  color: ${white};
  font-size: 22px;
  font-weight: bold;


`;
export const HeaderLogin = styled.View`

  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;


export const Shadow = styled.View`
  width: 100%;
  height: ${108}px;
  background-color: #ffbab0;
  border-bottom-left-radius: ${0}px;
  border-bottom-right-radius: ${100}px;
  ${shadow}
`;

export const HeaderShape = styled.View`
  width: 100%;
  height: ${100}px;
  background-color: ${orangeLight};
  border-bottom-left-radius: ${0}px;
  border-bottom-right-radius: ${100}px;
`;


export const Logo = styled.Image`
  width: ${200}px;
  height: ${250}px;


`;

export const Content = styled.View`
  width: 85%;
  height: 100%;
  flex: 1;
  justify-content: center;
  margin-bottom: ${StatusBarHeight + 70}px;



`;

export const FormArea = styled.View`
  width: 100%;
  height: 100%;


`;
export const TextInputStyled = styled.TextInput`
  background-color: ${secondary};
  padding: ${15}px ${40}px;
  height: ${50}px;
  border-radius: ${5}px;
  font-size: ${15}px;
  margin-top: ${3}px;
  margin-bottom: ${10}px;
  color: ${darkgray};
  text-align: right;



`;

export const Label = styled.Text`
  color: ${darkLight};
  font-size: 12px;

`;

export const LeftIcon = styled.TouchableOpacity`
  left: ${12}px;
  top: ${30}px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: ${12}px;
  top: ${30}px;
  position: absolute;
  z-index: 1;

`;

export const ForgetPassword = styled.Text`
  color: ${darkLight};
  text-align: left;
  margin: 0 ${5}px;
  font-size: ${14}px;
`;
export const Button = styled.TouchableOpacity`
  padding: ${15}px;
  background-color: ${green1};
  justify-content: center;
  border-radius: ${50}px;
  margin: ${5}px;
  height: ${40}px;
`;
export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${orangeLight};
  justify-content: center;
  border-radius: ${50}px;
  margin: ${5}px;
  height: ${60}px;
`;
export const ButtonText = styled.Text`
  color: ${white};
  font-size: 20px;
  text-align: center;

`;
export const TitleContainer = styled.View`
  width: 100%;
  background-color: #ACD876;
  ${shadow};
  height: ${90}px;
  border-bottom-left-radius: ${30}px;
  border-bottom-right-radius: ${30}px;
`;
export const TitlePage = styled.Text`
  color: ${tertiary};
  margin-top: ${30}px;
  text-align: center;
  font-size: ${30}px;
  font-weight: bold;
`;

export const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.TouchableOpacity`
  border-radius: ${5}px;
  padding: ${15}px;
  margin: ${10}px;
  background-color: ${white};
  justify-content: center;
  align-items: center;
  ${CheckPlatFormForCardDesign}
`;
export const CardText = styled.Text`
  font-size: ${12}px;
  color: ${tertiary};
`;
export const CardImage = styled.Image`
  width: ${90}px;
  height: ${90}px;
`;
export const Line = styled.View`
  width: 100%;
  height: 1px;
  margin-vertical: 10px;
  background-color: ${greenLight1};

`;
export const FlexStyled = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

`;
export const FlexEnd = styled.View`
  width: 100%;
  align-items: flex-end;
`;
export const FlexRow = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const ButtonAdd = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 10px;
  background-color: ${orangeLight};
  position: relative;
  top: 6px;
  margin-bottom: 12px;
  margin-left: 7px;
  border-radius: 5px;

`;
export const ContainerAddIcon = styled.View`
  position: absolute;
  bottom: ${StatusBarHeight + 50}px;
  right: 10px;
`;
export const AddIcon = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  border-radius: 100px;
  background-color: ${green3};
  justify-content: center;
  align-items: center;
`;
export const AddsText = styled.Text`
  color: ${darkLight};
  padding-horizontal: 25px;
  font-size: 20px;
  font-weight: bold;


`;
export const Scan = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const BtnIcon = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: ${orangeLight};
  justify-content: center;
  align-items: center;
  margin-left: 5px;

`;
export const BtnScan = styled.TouchableOpacity`
  padding: 6px 10px;
  background-color: ${orangeLight};
  border-radius: 3px;

`;
export const BtnUploadImg = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 5px;


`;
export const LabelIcon = styled.Text`
  color: ${darkLight};
  font-size: 12px;
  padding: 2px 2px;

`;

export const ViewSelect = styled.View`
  margin: 10px;
  width: 50%;
`;
export const ViewSelectScan = styled.View`
  width: 80%;
`;
export const TextInsideSelect = styled.Text`
  padding-horizontal: 2px;
  font-size: 15px;
`;

export const FlexWrap = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;