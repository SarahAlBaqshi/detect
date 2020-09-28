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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconWrapper>
          <GoBackIconDetailPage name="arrow-back" />
        </IconWrapper>
      </TouchableOpacity>
    );
  }
};

export default GoBackButton;
