import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  GestureResponderEvent,
} from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES, icons } from "../../../constants";
import { Href } from "expo-router/build/link/href";

const jobTypes = ["Full Time", "Part Time", "Contractor"];

type WelcomeProps = {
  searchValue: string;
  setSearchValue: (text: string) => void;
  handleClick: (event: GestureResponderEvent) => void;
};

const Welcome = ({
  searchValue,
  setSearchValue,
  handleClick,
}: WelcomeProps) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full Time");
  const tabContainerStyle = (item: string) => ({
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  });

  const tabTextStyle = (item: string) => ({
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  });
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Manas</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchValue}
            onChangeText={(text) => {
              setSearchValue(text);
            }}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.tabContainer, tabContainerStyle(item)]}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={[styles.tabText, tabTextStyle(item)]}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Welcome;
