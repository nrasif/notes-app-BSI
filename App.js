import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "./src/theme/colors";

import NotesListScreen from "./src/screens/NotesListScreen";
import AddNoteScreen from "./src/screens/AddNoteScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer
        theme={{
          colors: {
            background: colors.textColors.white, // Corrected 'backgroundColor' to 'background'
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.textColors.white,
            },
          }}
        >

          <Stack.Screen
            name = "NotesListScreen"
            component = {NotesListScreen}
            options = {({ navigation }) => ({
              headerTitle: 'Notes',
              headerRight: () => (
                <Ionicons
                name = 'add-circle-sharp'
                size = {24}
                color = {colors.primary.blue}
                onPress = {() => navigation.navigate('AddNoteScreen')} 
                />
              ),
            })}
            />

          <Stack.Screen
            name = "AddNoteScreen"
            component = {AddNoteScreen}
            options = {({ navigation }) => ({
              headerTitle: 'Add New Note',
              headerLeft: () => (
                <Ionicons
                name = 'arrow-back-circle'
                size = {24}
                color = {colors.primary.blue}
                onPress = {() => navigation.goBack()} 
                />
              ),
            })}
            />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}