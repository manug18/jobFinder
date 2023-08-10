import React from "react";
import {
  View,
  Text,
  GestureResponderEvent,
  ImageSourcePropType,
} from "react-native";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

type ScreenHeaderBtnProps = {
  iconUrl: ImageSourcePropType;
  dimension: number;
  handlePress: ((event: GestureResponderEvent) => void) | undefined;
};

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={[styles.btnImg, { width: dimension, height: dimension }]}

        // style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
