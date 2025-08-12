import * as React from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export default function useSetLandscape() {
  React.useEffect(() => {
    async function changeScreenOrientation() {
      try {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );
      } catch (error) {
        console.log("Error occured during landscape screen lock");
      }
    }
    changeScreenOrientation();
    return () => ScreenOrientation.unlockAsync();
  }, []);
}
