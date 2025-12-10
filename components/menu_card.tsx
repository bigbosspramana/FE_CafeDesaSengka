import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { GlobalText as Text } from "@/components/text/text_Regular";
import CartWhite from "@/assets/icon/cartwhite.svg";
import Popup from "@/components/popup_cart";
import { MenuItem } from "@/src/types/menu";

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: MenuCardProps) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [qty, setQty] = useState(1);

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 500;

  return (
    <>
      <View style={[styles.card, isSmallScreen && styles.cardMobile]}>
        <Image
          source={item.image}
          style={[styles.cardImage, isSmallScreen && styles.cardImageMobile]}
        />

        <Text
          style={[styles.cardTitle, isSmallScreen && styles.cardTitleMobile]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.name}
        </Text>

        <View
          style={[styles.rowBetween, isSmallScreen && styles.rowBetweenMobile]}
        >
          <Text
            style={[styles.cardPrice, isSmallScreen && styles.cardPriceMobile]}
          >
            Rp {item.price.toLocaleString()}
          </Text>

          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={[
              styles.cartButton,
              isSmallScreen && styles.cartButtonMobile,
            ]}
          >
            <CartWhite
              width={isSmallScreen ? 22 : 35}
              height={isSmallScreen ? 22 : 35}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* POPUP */}
      <Popup visible={open} onClose={() => setOpen(false)}>
        <View>
          <View style={{ flexDirection: isSmallScreen ? "column" : "row" }}>
            <Image
              source={item.image}
              style={[
                styles.cardImagePopup,
                isSmallScreen && styles.cardImagePopupMobile,
              ]}
            />

            <View style={{ flex: 1, marginLeft: isSmallScreen ? 0 : 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Text
                  style={[
                    styles.cardTitlePopup,
                    isSmallScreen && styles.cardTitlePopupMobile,
                  ]}
                >
                  {item.name}
                </Text>
                <Text
                  style={[
                    styles.cardPricePopup,
                    isSmallScreen && styles.cardPricePopupMobile,
                  ]}
                >
                  Rp {item.price.toLocaleString()}
                </Text>
              </View>

              <TextInput
                style={[
                  styles.textarea,
                  isSmallScreen && styles.textareaMobile,
                ]}
                multiline
                numberOfLines={5}
                value={text}
                onChangeText={setText}
                placeholder="Tambah Catatan..."
              />
              <View
                style={[styles.qtyRow, isSmallScreen && styles.qtyRowMobile]}
              >
                {/* Tombol minus */}
                <TouchableOpacity
                  style={[styles.qtyBtn, isSmallScreen && styles.qtyBtnMobile]}
                  onPress={() => qty > 1 && setQty(qty - 1)}
                >
                  <Text
                    style={[
                      styles.qtyBtnText,
                      isSmallScreen && styles.qtyBtnTextMobile,
                    ]}
                  >
                    −
                  </Text>
                </TouchableOpacity>

                {/* Angka */}
                <Text
                  style={[
                    styles.qtyText,
                    isSmallScreen && styles.qtyTextMobile,
                  ]}
                >
                  {qty}
                </Text>

                {/* Tombol plus */}
                <TouchableOpacity
                  style={[styles.qtyBtn, isSmallScreen && styles.qtyBtnMobile]}
                  onPress={() => setQty(qty + 1)}
                >
                  <Text
                    style={[
                      styles.qtyBtnText,
                      isSmallScreen && styles.qtyBtnTextMobile,
                    ]}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setOpen(false)}
            style={[
              styles.addCartBtn,
              isSmallScreen && styles.addCartBtnMobile,
            ]}
          >
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Tambah Keranjang
            </Text>
          </TouchableOpacity>
        </View>
      </Popup>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 25,
    width: "24%",
    borderRadius: 8,
    borderColor: "#0000002b",
    borderWidth: 0.16,
    shadowColor: "#4b4b4bff",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 8,
    marginBottom: 15,
  },
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  cardImagePopup: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 700,
    marginTop: 10,
  },
  cardTitlePopup: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 6,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  cardPrice: { fontSize: 20, fontWeight: 600 },
  cardPricePopup: { fontSize: 20, fontWeight: 600, marginBottom: 6 },
  cartButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#BE802F",
    borderRadius: 10,
  },
  addCartBtn: {
    marginTop: 20,
    backgroundColor: "#BE802F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  textarea: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 10,
    textAlignVertical: "top",
    fontSize: 18,
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 15,
  },
  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#BE802F",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
  },
  qtyText: {
    fontSize: 22,
    fontWeight: "700",
    minWidth: 40,
    textAlign: "center",
  },

  // Responsive Mobile
  cardMobile: {
    padding: 15,
    width: "48.5%",
  },
  cardImageMobile: {
    width: 149,
    height: 149,
  },
  cardTitleMobile: {
    fontSize: 18,
  },
  rowBetweenMobile: {
    marginTop: 15,
  },
  cardPriceMobile: { fontSize: 14 },
  cardImagePopupMobile: {
    width: 200,
    height: 200,
    borderRadius: 8,
    alignSelf: "center",
  },
  cardTitlePopupMobile: {
    fontSize: 24,
    marginBottom: 6,
  },
  cardPricePopupMobile: { fontSize: 20, fontWeight: 600, marginBottom: 6 },
  cartButtonMobile: {
    paddingVertical: 8,
    paddingHorizontal: 13,
  },
  textareaMobile: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 10,
    textAlignVertical: "top",
    fontSize: 18,
  },
  qtyRowMobile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 15,
  },
  qtyBtnMobile: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#BE802F",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnTextMobile: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
  },
  qtyTextMobile: {
    fontSize: 22,
    fontWeight: "700",
    minWidth: 40,
    textAlign: "center",
  },
  addCartBtnMobile: {
    marginTop: 20,
    backgroundColor: "#BE802F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
});
