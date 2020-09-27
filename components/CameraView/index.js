// import React, { useState, useEffect, useRef } from "react";

// // Libraries
// import { Camera } from "expo-camera";
// import * as FileSystem from "expo-file-system";

// // Buttons
// import LiveScan from "../Buttons/LiveScan";

// // Styles
// import { Text, View } from "react-native";
// import { LiveScanScreen, SpinnerLoading } from "./styles";
// import { TouchableOpacity } from "react-native-gesture-handler";

// const CameraView = ({
//   identifyImage,
//   setLoading,
//   loading,
//   result,
//   setImageUrl,
//   setLive,
//   setOpenModal,
//   setResult,
//   setNutrition,
//   navigation,
// }) => {
//   const [hasPermission, setHasPermission] = useState(null);

//   const cam = useRef();

// const handleLiveScan = () => {
//   if (cam.current) {
//     setTimeout(async () => {
//       const picture = await cam.current.takePictureAsync({ quality: 1 });
//       setImageUrl(picture.uri);
//       const base64 = await FileSystem.readAsStringAsync(picture.uri, {
//         encoding: "base64",
//       });
//       identifyImage(base64, {
//         setResult,
//         setLoading,
//         setLive,
//         setOpenModal,
//         setNutrition,
//         navigation,
//       });
//       setLoading(true);
//     }, 2000);
//   }
// };
//   //TODO: CLEAN THIS MESS
//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <>
//       {/* <LiveScanScreen> */}
//       <View>
//         <Camera style={{ flex: 1 }}>
//           <View
//             style={{
//               flex: 1,
//               backgroundColor: "transparent",
//               flexDirection: "row",
//             }}
//           >
//             <TouchableOpacity
//               style={{
//                 flex: 0.1,
//                 alignSelf: "flex-end",
//                 alignItems: "center",
//               }}
//               onPress={() => {
//                 setType(
//                   type === Camera.Constants.Type.back
//                     ? Camera.Constants.Type.front
//                     : Camera.Constants.Type.back
//                 );
//               }}
//             >
//               <Text
//                 style={{ fontSize: 18, marginBottom: 10, color: "white" }}
//               ></Text>
//             </TouchableOpacity>
//           </View>
//         </Camera>
//       </View>
//       {/* <Camera style={{ flex: 1 }} ref={cam} onCameraReady={handleLiveScan}>
//         <Text>this is a test</Text>
//       </Camera> */}
//       {/* </LiveScanScreen> */}
//       {loading && <SpinnerLoading color="white" />}
//       {result !== "" && loading === false && <LiveScan setLive={setLive} />}
//     </>
//   );
// };

// export default CameraView;

import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import LiveScan from "../Buttons/LiveScan";

// Libraries

import * as FileSystem from "expo-file-system";

// Styles

import { LiveScanScreen, SpinnerLoading } from "./styles";

const CameraView = ({
  identifyImage,
  setLoading,
  loading,
  result,
  setImageUrl,
  setLive,
  setOpenModal,
  setResult,
  setNutrition,
  navigation,
}) => {
  const cam = useRef();
  const handleLiveScan = () => {
    if (cam.current) {
      setTimeout(async () => {
        const picture = await cam.current.takePictureAsync({ quality: 1 });
        setImageUrl(picture.uri);
        const base64 = await FileSystem.readAsStringAsync(picture.uri, {
          encoding: "base64",
        });
        identifyImage(base64, {
          setLoading,
          setResult,
          setLive,
          setOpenModal,
          setNutrition,
          navigation,
        });
        setLoading(true);
      }, 2000);
    }
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cam}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 40, marginBottom: 10, color: "white" }}>
              Flips
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => handleLiveScan()}
          >
            <Text style={{ fontSize: 18, marginBottom: 20, color: "white" }}>
              test
            </Text>
          </TouchableOpacity>
          {loading && <SpinnerLoading color="white" />}
          {result !== "" && loading === false && <Text>{result}</Text>}
        </View>
      </Camera>
    </View>
  );
};
export default CameraView;
