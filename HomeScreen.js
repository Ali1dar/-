// screens/HomeScreen.js
// Shows the mock gold price header and a scrollable list of goldsmith shops.
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { shops } from '../dummyData';

export default function HomeScreen({ navigation }) {
  // Renders a single shop row in the directory list.
  const renderShopItem = ({ item }) => (
    <TouchableOpacity
      style={styles.shopCard}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('ShopDetails', { shop: item })}
    >
      <Image source={{ uri: item.logoUrl }} style={styles.logo} />
      <View style={styles.shopInfo}>
        <Text style={styles.shopName}>{item.name}</Text>
        <Text style={styles.shopArea}>📍 {item.area}</Text>
      </View>
      <Text style={styles.chevron}>‹</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* --- Mock live gold price header --- */}
      <View style={styles.priceHeader}>
        <Text style={styles.priceLabel}>سعر الذهب اليوم</Text>
        <View style={styles.priceRow}>
          <View style={styles.priceItem}>
            <Text style={styles.priceKarat}>عيار 21</Text>
            <Text style={styles.priceValue}>٩٣,٠٠٠ د.ع</Text>
          </View>
          <View style={styles.priceDivider} />
          <View style={styles.priceItem}>
            <Text style={styles.priceKarat}>عيار 24</Text>
            <Text style={styles.priceValue}>١٠٦,٠٠٠ د.ع</Text>
          </View>
        </View>
      </View>

      {/* --- Section title --- */}
      <Text style={styles.sectionTitle}>محلات الصياغة</Text>

      {/* --- Shops directory list --- */}
      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={renderShopItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F2',
  },
  priceHeader: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  priceLabel: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  priceDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#444',
  },
  priceKarat: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 4,
  },
  priceValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'right',
    marginTop: 18,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  shopCard: {
    flexDirection: 'row-reverse', // logo on the right, text flowing RTL
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  shopInfo: {
    flex: 1,
    marginRight: 12,
    alignItems: 'flex-end',
  },
  shopName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'right',
  },
  shopArea: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
    textAlign: 'right',
  },
  chevron: {
    fontSize: 26,
    color: '#ccc',
    marginLeft: 4,
    transform: [{ scaleX: -1 }], // point the arrow toward the RTL reading direction
  },
});

