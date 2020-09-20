import React from "react";

import { LiveScanButton, LiveScanButtonText } from "./styles";

const LiveScan = ({ setLive, screen }) => {
  return (
    // this condition below can be simplified. How can you do that? Think about it.
    <LiveScanButton onPress={() => setLive(screen ? true : false)}>
      <LiveScanButtonText>
        {screen ? "Start Scanning!" : "Stop Scanning!"}
      </LiveScanButtonText>
    </LiveScanButton>
  );
};

export default LiveScan;
