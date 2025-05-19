import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import ProductCard from "../../components/products/Card";
import { Images } from "../../constants/image";
import ProductOptionsModal from "../../components/products/ProductOptionsModal";
import DeleteConfirmationModal from "../../components/products/DeleteConfirmationModal";

const dummyProducts = [
  {
    name: "The Subtle Art",
    price: "USDC 512.83",
    sold: 0,
    available: "E-Book",
    image: Images.Book,
  },
  {
    name: "Zenith Collection",
    price: "USDC 748.00",
    sold: 5,
    available: 'Course',
    image: Images.Second,
  },
  {
    name: "Artisan Crafted Table",
    price: "USDC 1,250.50",
    sold: 2,
    available: 'Training',
    image: Images.Last,
  }
];

const DigitalProduct = ({ searchQuery }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);


  const handleOptionsPress = (product) => {
    setSelectedProduct(product);
    setShowOptions(true);
  };

  const handleDeletePress = () => {
    setShowOptions(false);
    setTimeout(() => {
      setShowDeleteConfirm(true);
    }, 300);
  };

  const handleConfirmDelete = () => {

    // console.log("Deleted:", selectedProduct.name);
    setShowDeleteConfirm(false);
  };

  const filteredProducts = dummyProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <View className="bg-white px-4 mt-4">
      <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
        {filteredProducts.map((product, idx) => (

          <ProductCard
            key={idx}
            product={product}
            onOptionsPress={() => handleOptionsPress(product)}
          />
        ))}
      </ScrollView>
      <ProductOptionsModal
        visible={showOptions}
        onClose={() => setShowOptions(false)}
        onDelete={handleDeletePress}
      />

      <DeleteConfirmationModal
        visible={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={handleConfirmDelete}
      />

    </View>
  );
};

export default DigitalProduct;
