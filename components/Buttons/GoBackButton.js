import React from "react";
import { useNavigation } from "@react-navigation/native";

// Styles
import { GoBackIcon, GoBackIconDetailPage, IconWrapper } from "./styles";

const GoBackButton = ({ detailPage }) => {
  const navigation = useNavigation();
  if (!detailPage) {
    return (
      <GoBackIcon
        onPress={() => navigation.goBack()}
        type="Entypo"
        name="chevron-thin-left"
      />
    );
  } else {
    return (
      <IconWrapper>
        <GoBackIconDetailPage
          onPress={() => navigation.goBack()}
          type="Entypo"
          name="chevron-thin-left"
        />
      </IconWrapper>
    );
  }
};

export default GoBackButton;
