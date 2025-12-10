import { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { GlobalText as Text } from "@/components/text/text_Regular";

import OrderOnIcon from "@/assets/icon/addmenuon.svg";
import ResepOffIcon from "@/assets/icon/resepoff.svg";
import InventoryOffIcon from "@/assets/icon/inventoryoff.svg";
import OrderOffIcon from "@/assets/icon/addmenuoff.svg";
import ResepOnIcon from "@/assets/icon/resepon.svg";
import InventoryOnIcon from "@/assets/icon/inventoryon.svg";
import ProfilToko from "@/assets/icon/profiltoko.svg";

export default function Sidebar() {
  const [active, setActiveMenu] = useState<"order" | "resep" | "inventory">(
    "order"
  );

  const [mobileActive, setMobileActive] = useState<
    "order" | "resep" | "inventory"
  >("order");

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 500;

  return (
    <View style={[styles.sidebar, isSmallScreen && styles.navbar]}>
      <View>
        {!isSmallScreen && <Text style={styles.title}>Cafe K-Ritz</Text>}

        <View style={[styles.list, isSmallScreen && styles.listMobile]}>
          {/* --- LEFT (Order) --- */}
          <TouchableOpacity
            style={
              isSmallScreen
                ? styles.mobileItem
                : [styles.menuItem, active === "order" && styles.activeMenu]
            }
            onPress={() => {
              isSmallScreen ? setMobileActive("resep") : setActiveMenu("order");
            }}
          >
            {isSmallScreen ? (
              mobileActive === "resep" ? (
                <ResepOffIcon width={44} height={44} fill="#BE802F" />
              ) : (
                <ResepOffIcon width={44} height={44} />
              )
            ) : active === "order" ? (
              <OrderOnIcon width={44} height={44} fill="#fff" />
            ) : (
              <OrderOffIcon width={44} height={44} />
            )}

            {!isSmallScreen && (
              <Text
                style={[
                  styles.menuText,
                  active === "order" && styles.activeMenuText,
                ]}
              >
                Order Menu
              </Text>
            )}
          </TouchableOpacity>

          {/* --- CENTER FIXED (Resep) --- */}
          <TouchableOpacity
            style={
              isSmallScreen
                ? styles.mobileCenterItem
                : [styles.menuItem, active === "resep" && styles.activeMenu]
            }
            onPress={() => {
              isSmallScreen ? setMobileActive("order") : setActiveMenu("resep");
            }}
          >
            {isSmallScreen ? (
              mobileActive === "order" ? (
                <OrderOnIcon width={44} height={44} fill="#fff" />
              ) : (
                <OrderOnIcon width={44} height={44}fill="#BE802F" />
              )
            ) : active === "resep" ? (
              <ResepOnIcon width={44} height={44} />
            ) : (
              <ResepOffIcon width={44} height={44} />
            )}

            {!isSmallScreen && (
              <Text
                style={[
                  styles.menuText,
                  active === "resep" && styles.activeMenuText,
                ]}
              >
                Resep
              </Text>
            )}
          </TouchableOpacity>

          {/* --- RIGHT (Inventory) --- */}
          <TouchableOpacity
            style={
              isSmallScreen
                ? styles.mobileItem
                : [styles.menuItem, active === "inventory" && styles.activeMenu]
            }
            onPress={() => {
              isSmallScreen
                ? setMobileActive("inventory")
                : setActiveMenu("inventory");
            }}
          >
            {isSmallScreen ? (
              mobileActive === "inventory" ? (
                <InventoryOffIcon width={44} height={44} fill="#BE802F" />
              ) : (
                <InventoryOffIcon width={44} height={44} />
              )
            ) : active === "inventory" ? (
              <InventoryOnIcon width={44} height={44} />
            ) : (
              <InventoryOffIcon width={44} height={44} />
            )}

            {!isSmallScreen && (
              <Text
                style={[
                  styles.menuText,
                  active === "inventory" && styles.activeMenuText,
                ]}
              >
                Inventory
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {!isSmallScreen && (
        <View style={styles.profileRow}>
          <ProfilToko width={44} height={44} style={{ borderRadius: 50 }} />
          <Text style={styles.profileName}>Kevin</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    height: "100%",
    width: 260,
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    position: "fixed",
    shadowColor: "#4b4b4b",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 28,
    color: "#BE802F",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 40,
  },
  activeMenu: {
    backgroundColor: "#BE802F",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  activeMenuText: { fontSize: 20, color: "#fff", marginLeft: 10 },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: { fontSize: 20, marginLeft: 10, color: "#000" },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileName: {
    fontSize: 20,
    marginLeft: 10,
  },
  list: {
    gap: 20,
  },

  // Responsive Mobile
  navbar: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#4b4b4b",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 6,
    zIndex: 999,
  },
  titleMobile: { overflow: "hidden" },
  menuTextMobile: { overflow: "hidden" },
  activeMenuTextMobile: { overflow: "hidden" },
  profileRowMobile: { overflow: "hidden" },
  listMobile: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 30,
  },
  mobileItem: {
    padding: 10,
  },
  mobileCenterItem: {
    backgroundColor: "#BE802F",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
