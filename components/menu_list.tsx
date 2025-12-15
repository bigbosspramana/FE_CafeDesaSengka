import { ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import MenuCard from "@/components/menu_card";
import { menuData } from "@/src/data/menu_data";

export default function MenuList() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 500;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={[styles.list, isSmallScreen && styles.listMobile]}>
      {menuData.map((m) => (
        <MenuCard key={m.id} item={m} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingBottom: 20,
  },
  listMobile: {
    marginTop: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingBottom: 10,
  },
});
