import { Image, SafeAreaView, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { LogOut } from "lucide-react-native";
import logoUser from "@/assets/images/no-user.jpg";
import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

const userImage = Image.resolveAssetSource(logoUser).uri;
import TextRoboto from "@/components/text-roboto";
import TextPoppins from "@/components/text-poppins";
import { ValueDrawerAdminItem, ValueDrawerUserItem } from "@/data/layout_home";
import Divider from "@/components/divider";
import { usePathname, useRouter } from "expo-router";

const Layout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerTintColor: colorScheme === "dark" ? "#fafafa" : "#18181b",
          sceneStyle: {
            backgroundColor: colorScheme === "dark" ? "#18181b" : "#fafafa",
          },
          headerBackground: () => (
            <View
              style={{
                backgroundColor: colorScheme === "dark" ? "#18181b" : "#fafafa",
              }}
            />
          ),
        }}
      >
        <Drawer.Screen
          name="post"
          options={{
            drawerLabel: "Publicaciones",
            title: "Publicaciones",
          }}
        />
        <Drawer.Screen
          name="(pet)"
          options={{
            drawerLabel: "Mascotas",
            title: "Mascotas",
          }}
        />
        <Drawer.Screen
          name="favorite"
          options={{
            drawerLabel: "Favoritos",
            title: "Favoritos",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Perfil",
            title: "Perfil",
          }}
        />
        <Drawer.Screen
          name="setting"
          options={{
            drawerLabel: "Configuración",
            title: "Configuración",
          }}
        />
      </Drawer>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </GestureHandlerRootView>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { colorScheme } = useColorScheme();
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const isDark = colorScheme === "dark";
  // const currentRoute2 = props.state.routeNames[props.state.index];
  const currentRoute = usePathname();

  const bgColor = isDark ? "#18181b" : "#fafafa";

  const activeBgColor = isDark ? "#818cf8" : "#818cf8";
  const activeTextColor = isDark ? "#e5e5e5" : "#e4e4e7";
  const inactiveTextColor = isDark ? "#9ca3af" : "#525252";
  return (
    <SafeAreaView
      className="flex-1"
      style={{
        paddingTop: top,
        backgroundColor: bgColor,
      }}
    >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flex: 1,
          backgroundColor: bgColor,
        }}
      >
        <View className="items-center rounded-md px-4 py-6 flex felx-col gap-4">
          <Image source={{ uri: userImage }} className="size-40 rounded-full" />
          <View className="flex justify-center items-center pt-4">
            <TextRoboto
              text="Juan Camilo Rojas Diaz"
              className="text-2xl font-bold text-gray-900 dark:text-indigo-500"
            />
            <TextPoppins
              text="juan.camilo@email.com"
              className="text-base text-gray-800 dark:text-indigo-300 font-semibold"
            />
          </View>
        </View>

        <View className="flex-1">
          <View className="my-2 ">
            {ValueDrawerUserItem.map((item) => (
              <DrawerItem
                key={item.label}
                label={item.label}
                onPress={() => router.replace(item.route)}
                icon={({ size }) => (
                  <item.icon
                    size={size}
                    color={
                      currentRoute === item.match
                        ? activeTextColor
                        : inactiveTextColor
                    }
                  />
                )}
                labelStyle={{
                  fontSize: 16,
                  fontWeight: "400",
                  color:
                    currentRoute === item.match
                      ? activeTextColor
                      : inactiveTextColor,
                }}
                style={{
                  borderRadius: 16,
                  marginVertical: 4,
                  paddingVertical: 0,
                  marginBottom: 8,
                  backgroundColor:
                    currentRoute === item.match ? activeBgColor : "transparent",
                }}
              />
            ))}
          </View>

          <Divider />

          <View className=" mt-4">
            {ValueDrawerAdminItem.map((item) => (
              <DrawerItem
                key={item.label}
                label={item.label}
                onPress={() => router.replace(item.route)}
                icon={({ size }) => (
                  <item.icon
                    size={size}
                    color={
                      currentRoute === item.match
                        ? activeTextColor
                        : inactiveTextColor
                    }
                  />
                )}
                labelStyle={{
                  fontSize: 16,
                  fontWeight: "400",
                  color:
                    currentRoute === item.match
                      ? activeTextColor
                      : inactiveTextColor,
                }}
                style={{
                  borderRadius: 16,
                  marginVertical: 4,
                  paddingVertical: 0,
                  marginBottom: 4,
                  backgroundColor:
                    currentRoute === item.match ? activeBgColor : "transparent",
                }}
              />
            ))}
          </View>
        </View>
        <View className="border-t border-gray-300 dark:border-zinc-600">
          <DrawerItem
            label="Cerrar sesión"
            onPress={() => router.replace("/login")}
            icon={({ size }) => (
              <LogOut size={size} color={inactiveTextColor} />
            )}
            labelStyle={{
              fontSize: 16,
              fontWeight: "400",
              color: inactiveTextColor,
            }}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default Layout;
