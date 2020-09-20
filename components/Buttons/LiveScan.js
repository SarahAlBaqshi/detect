import React from "react";

import { LiveScanButton, LiveScanButtonText } from "./styles";

const LiveScan = ({ setLive, screen }) => {
  return (
    <LiveScanButton onPress={() => setLive(screen ? true : false)}>
      <LiveScanButtonText>
        {screen ? "Start Scanning!" : "Stop Scanning!"}
      </LiveScanButtonText>
    </LiveScanButton>
  );
};

export default LiveScan;
