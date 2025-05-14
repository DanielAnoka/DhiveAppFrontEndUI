import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const businessTypes = ['Retail', 'Wholesale', 'E-commerce', 'Manufacturing', 'Services'];
const revenueOptions = ['< $10K', '$10K - $50K', '$50K - $200K', '$200K+'];
const locationOptions = ['Lagos', 'Abuja', 'Port Harcourt', 'Other'];

const Business = () => {
  const [form, setForm] = useState({
    name: '',
    type: '',
    token: '',
    supplyChain: '',
    cashback: '',
    revenue: '',
    location: '',
    description: '',
  });

  const [dropdowns, setDropdowns] = useState({
    type: false,
    revenue: false,
    location: false,
  });

  const isFormValid = Object.values(form).every((val) => val.trim() !== '');

  const handleSelect = (field, value) => {
    setForm({ ...form, [field]: value });
    setDropdowns({ ...dropdowns, [field]: false });
  };

  const toggleDropdown = (field) => {
    setDropdowns((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const renderDropdown = (field, options) =>
    dropdowns[field] && (
      <FlatList
        data={options}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="px-4 py-2 border-b border-gray-200 bg-white"
            onPress={() => handleSelect(field, item)}
          >
            <Text className="text-black">{item}</Text>
          </TouchableOpacity>
        )}
        className="border border-t-0 border-gray-300 rounded-b-md"
      />
    );

  return (
    <View className="space-y-4">
      {/* Business Name */}
      <View>
        <Text className="text-gray-700 mb-1">Business Name</Text>
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2 text-black"
          placeholder="SwiftRole"
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
      </View>

      {/* Business Type */}
      <View>
        <Text className="text-gray-700 mb-1">Business Type</Text>
        <TouchableOpacity
          onPress={() => toggleDropdown('type')}
          className="flex-row items-center justify-between border border-gray-300 rounded-md px-4 py-2 bg-white"
        >
          <Text className={`text-black ${form.type ? '' : 'text-gray-400'}`}>
            {form.type || 'Select business type'}
          </Text>
          <Icon name={dropdowns.type ? 'chevron-up' : 'chevron-down'} size={16} color="#000" />
        </TouchableOpacity>
        {renderDropdown('type', businessTypes)}
      </View>

      {/* Token Symbol */}
      <View>
        <Text className="text-gray-700 mb-1">Token Symbol</Text>
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2 text-black"
          placeholder="SR"
          value={form.token}
          onChangeText={(text) => setForm({ ...form, token: text })}
        />
      </View>

      {/* Supply Chain */}
      <View>
        <Text className="text-gray-700 mb-1">Supply Chain</Text>
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2 text-black"
          placeholder="Describe your supply chain"
          value={form.supplyChain}
          onChangeText={(text) => setForm({ ...form, supplyChain: text })}
        />
      </View>

      {/* Cashback */}
      <View>
        <Text className="text-gray-700 mb-1">Product Purchase Cashback</Text>
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2 text-black"
          placeholder="5%"
          keyboardType="numeric"
          value={form.cashback}
          onChangeText={(text) => setForm({ ...form, cashback: text })}
        />
      </View>

      {/* Business Revenue */}
      <View>
        <Text className="text-gray-700 mb-1">Business Revenue</Text>
        <TouchableOpacity
          onPress={() => toggleDropdown('revenue')}
          className="flex-row items-center justify-between border border-gray-300 rounded-md px-4 py-2 bg-white"
        >
          <Text className={`text-black ${form.revenue ? '' : 'text-gray-400'}`}>
            {form.revenue || 'Select revenue range'}
          </Text>
          <Icon name={dropdowns.revenue ? 'chevron-up' : 'chevron-down'} size={16} color="#000" />
        </TouchableOpacity>
        {renderDropdown('revenue', revenueOptions)}
      </View>

      {/* Business Location */}
      <View>
        <Text className="text-gray-700 mb-1">Business Location</Text>
        <TouchableOpacity
          onPress={() => toggleDropdown('location')}
          className="flex-row items-center justify-between border border-gray-300 rounded-md px-4 py-2 bg-white"
        >
          <Text className={`text-black ${form.location ? '' : 'text-gray-400'}`}>
            {form.location || 'Select location'}
          </Text>
          <Icon name={dropdowns.location ? 'chevron-up' : 'chevron-down'} size={16} color="#000" />
        </TouchableOpacity>
        {renderDropdown('location', locationOptions)}
      </View>

      {/* Business Description */}
      <View>
        <Text className="text-gray-700 mb-1">Business Description</Text>
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2 text-black h-24"
          placeholder="Tell us about your business"
          value={form.description}
          onChangeText={(text) => setForm({ ...form, description: text })}
          multiline
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        disabled={!isFormValid}
        className={`mt-4 rounded-md px-4 py-3 ${
          isFormValid ? 'bg-indigo-600' : 'bg-gray-300'
        }`}
      >
        <Text className="text-center text-white font-medium">
          {isFormValid ? 'Submit' : 'Fill all fields'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Business;
