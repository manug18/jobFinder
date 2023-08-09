import { useRouter } from "expo-router";
import { View, Text, Button, SafeAreaView, ScrollView } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { Stack } from "expo-router";
import {
  Nearbyjobs,
  Popularjobs,
  Welcome,
  ScreenHeaderBtn,
} from "../components";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleClick={() => {
              if (searchValue) {
                router.push(`/search/${searchValue}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
