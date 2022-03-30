/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect, useCallback } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import UserContext from "../context/User";
import { ui, text } from "../theme";
import ActivitiesList from "../containers/ActivitiesList";
import CustomButton from "../components/ui/CustomButton";
import Separator from "../components/ui/Separator";
import UserDropdown from "../components/UserDropdown";

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);
  console.log(user.name);

  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(user);
  }, [user]);

  console.log(render);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  console.log("rendering...");

  return (
    <ScrollView>
      <View style={ui.profileHeaderContainer}>
        <View style={ui.centerAlign}>
          <Text style={text.body}>Welcome Back</Text>
          <Text style={text.sectionTitle}>{user.name}</Text>
          <View>
            <Text>Not you?</Text>
            <Button title="update" onPress={forceUpdate} />
            <UserDropdown />
          </View>
          <Image
            style={ui.avatar}
            source={{
              uri: user.avatarUrl,
            }}
            accessibilityLabel="Profile Picture"
          />

          <CustomButton
            title="Create New Activity"
            type="primary"
            onPress={() => navigation.navigate("Create New Activity")}
          />
        </View>
      </View>

      <View style={ui.activityProfileContainer}>
        <ActivitiesList
          heading="Organised Activities"
          props={{
            query: "==",
            collection: "activities",
            key: "organiser",
            value: user.name,
          }}
        />
        <ActivitiesList
          heading="Upcoming Activities"
          props={{
            query: "array-contains",
            collection: "activities",
            key: "attendees",
            value: user.name,
          }}
        />
        <ActivitiesList
          heading="Past Activities"
          props={{
            query: "array-contains",
            collection: "activities",
            key: "attendees",
            value: user.name,
            time: "<",
            order: "desc",
          }}
        />
      </View>
    </ScrollView>
  );
}
