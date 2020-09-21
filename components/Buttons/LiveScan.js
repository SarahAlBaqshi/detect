import React from "react";

import {
  LiveScanButton,
  LiveScanButtonText,
  RecordIcon,
  ImageButtonTextStyled,
} from "./styles";
import { Row } from "native-base";

const LiveScan = ({ setLive, screen }) => {
  return (
    <LiveScanButton onPress={() => setLive(!!screen)}>
      <Row>
        <RecordIcon
          name="record-circle-outline"
          type="MaterialCommunityIcons"
        />
        <LiveScanButtonText>
          {screen ? "Scan Live" : "Stop Scanning!"}
        </LiveScanButtonText>
      </Row>
    </LiveScanButton>
  );
};

export default LiveScan;
