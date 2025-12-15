import { Pressable, Modal, StyleSheet, useWindowDimensions } from "react-native";

interface PopupProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Popup({ visible, onClose, children }: PopupProps) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 500;

  return (
    <Modal
    transparent
    animationType="fade"
    visible={visible}
    onRequestClose={onClose}
  >
    <Pressable style={styles.overlay} onPress={onClose}>
      {/* Hentikan propagasi supaya klik dalam container tdk close */}
      <Pressable
        style={[styles.container, isSmallScreen && styles.containerMobile]}
        onPress={(e) => e.stopPropagation()}
      >
        {children}
      </Pressable>
    </Pressable>
  </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", 
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 700,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "stretch",
  },

  // Responsive Mobile
  containerMobile: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
