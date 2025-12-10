import { View, TextInput, useWindowDimensions } from "react-native";
import Sidebar from "@/components/side_bar";
import MenuList from "@/components/menu_list";
import CartIcon from "@/assets/icon/cart.svg";
import FilterIcon from "@/assets/icon/filter.svg";
import FoodIcon from "@/assets/icon/foodfilter.svg";
import DrinkIcon from "@/assets/icon/drinkfilter.svg";
import { GlobalText as Text } from "@/components/text/text_Regular";
import ProfilToko from "@/assets/icon/profiltoko.svg";

import { styles } from "../src/styles/order_menu.style";

export default function OrderMenuScreen() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 500;

  return (
    <View style={{ flex: 1 }}>
      <Sidebar />

      <View style={[styles.main, isSmallScreen && styles.mainMobile]}>
        {/* Header */}
        <View
          style={[styles.headerRow, isSmallScreen && styles.headerRowMobile]}
        >
          <Text style={[styles.title, isSmallScreen && styles.titleMobile]}>
            Order Menu
          </Text>

          {!isSmallScreen && (
            <View style={{ flex: 1, paddingHorizontal: 80 }}>
              <TextInput placeholder="Cari menu..." style={styles.search} />
            </View>
          )}

          <View style={isSmallScreen && styles.optionMobile}>
            <View style={[styles.cartWrapper, isSmallScreen && styles.cartWrapperMobile]}>
              <View style={[styles.cartBox, isSmallScreen && styles.cartBoxMobile]}>
                <CartIcon width={isSmallScreen? 24:35} height={isSmallScreen? 24:35} />
              </View>
              <View style={[styles.cartBadge, isSmallScreen && styles.cartBadgeMobile]}>
                <Text style={[styles.cartBadgeText, isSmallScreen && styles.cartBadgeTextMobile]}>1</Text>
              </View>
            </View>

            {isSmallScreen && (
              <View style={styles.profileRow}>
                <ProfilToko
                  width={47}
                  height={47}
                  style={{ borderRadius: 50 }}
                />
              </View>
            )}
          </View>
        </View>

        {isSmallScreen && (
          <View>
            <TextInput placeholder="Cari menu..." style={[styles.search, isSmallScreen && styles.searchMobile ]} />
          </View>
        )}

        {/* Filter */}
        <View style={[styles.filterRow, isSmallScreen && styles.filterRowMobile]}>
          <FilterIcon width={isSmallScreen ? 24 : 30} height={isSmallScreen ? 24 : 30} />
          <View style={styles.divider} />

          <View style={[styles.filterTag, isSmallScreen && styles.filterTagMobile]}>
            <FoodIcon width={isSmallScreen ? 24 : 30} height={isSmallScreen ? 24 : 30} />
            <Text style={styles.filterText}>Makanan Ringan</Text>
          </View>

          <View style={[styles.filterTag, isSmallScreen && styles.filterTagMobile]}>
            <DrinkIcon width={isSmallScreen ? 24 : 30} height={isSmallScreen ? 24 : 30} />
            <Text style={styles.filterText}>Minuman</Text>
          </View>
        </View>

        {/* Menu list auto-generate */}
        <MenuList />
      </View>
    </View>
  );
}
