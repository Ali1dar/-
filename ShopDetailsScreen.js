// screens/ShopDetailsScreen.js
// Shows shop info, contact actions (call / WhatsApp / location), and a
// 2-column gallery grid of the shop's gold pieces.
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
  SafeAreaView,
  Alert,
} from 'react-native';
import { getProductsByShopId } from '../dummyData';

export default function ShopDetailsScreen({ route }) {
  const { shop } = route.params;
  const shopProducts = getProductsByShopId(shop.id);

  // --- Contact actions using the Linking API ------------------------------
  const handleCall = () => {
    Linking.openURL(`tel:${shop.phone}`).catch(() =>
      Alert.alert('خطأ', 'تعذر إجراء الاتصال')
    );
  };

  const handleWhatsApp = () => {
    // Strip the leading "+" for the wa.me deep link format.
    const number = shop.whatsapp.replace('+', '');
    Linking.openURL(`https://wa.me/${number}`).catch(() =>
      Alert.alert('خطأ', 'تعذر فتح واتساب')
    );
  };

  const handleLocation = () => {
    Linking.openURL(shop.locationUrl).catch(() =>
      Alert.alert('خطأ', 'تعذر فتح الموقع')
    );
  };

  // --- Gallery grid item ---------------------------------------------------
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productType}>{item.type}</Text>
      <View style={styles.productMetaRow}>
        <Text style={styles.productMetaLabel}>الوزن:</Text>
        <Text style={styles.productMetaValue}>{item.weight}</Text>
      </View>
      <View style={styles.productMetaRow}>
        <Text style={styles.productMetaLabel}>العيار:</Text>
        <Text style={styles.productMetaValue}>{item.karat}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shopProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.gridContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* --- Shop header: logo + name --- */}
            <View style={styles.header}>
              <Image source={{ uri: shop.logoUrl }} style={styles.logo} />
              <Text style={styles.shopName}>{shop.name}</Text>
              <Text style={styles.shopArea}>📍 {shop.area}</Text>
            </View>

            {/* --- Contact buttons --- */}
            <View style={styles.contactRow}>
              <TouchableOpacity
                style={[styles.contactButton, styles.callButton]}
                onPress={handleCall}
              >
                <Text style={styles.contactButtonText}>📞 اتصل الآن</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.contactButton, styles.whatsappButton]}
                onPress={handleWhatsApp}
              >
                <Text style={styles.contactButtonText}>💬 واتساب</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.contactButton, styles.locationButton]}
                onPress={handleLocation}
              >
                <Text style={styles.contactButtonText}>📍 موقع المحل</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>معرض المنتجات</Text>
          </>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>لا توجد منتجات لعرضها حالياً</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F2',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#1a1a1a',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#eee',
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#FFD700',
  },
  shopName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  shopArea: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 4,
  },
  contactRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 8,
  },
  contactButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  callButton: {
    backgroundColor: '#2E7D32',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
  },
  locationButton: {
    backgroundColor: '#B8860B',
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'right',
    marginTop: 22,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  gridContent: {
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  gridRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 10,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginBottom: 8,
  },
  productType: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'right',
    marginBottom: 6,
  },
  productMetaRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  productMetaLabel: {
    fontSize: 12,
    color: '#888',
  },
  productMetaValue: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 30,
  },
});

