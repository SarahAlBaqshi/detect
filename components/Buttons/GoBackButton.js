import React from "react";

// Styles
import {
  GoBackIcon,
  GoBackIconDetailPage,
  IconWrapper,
  BackWrapper,
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const GoBackButton = ({ detailPage }) => {
  const navigation = useNavigation();
  if (!detailPage) {
    return (
      <BackWrapper onPress={() => navigation.goBack()}>
        <GoBackIcon name="arrow-back" />
      </BackWrapper>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          borderRadius: "50%",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={() => navigation.goBack()}
      >
        <IconWrapper>
          <GoBackIconDetailPage name="arrow-back" />
        </IconWrapper>
      </TouchableOpacity>
    );
  }
};

export default GoBackButton;
