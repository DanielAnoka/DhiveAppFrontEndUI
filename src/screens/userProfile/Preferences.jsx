import { Text, View, SafeAreaView, TouchableOpacity, Switch, FlatList } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';

const Preferences = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const [hideEmptyTokens, setHideEmptyTokens] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');

  const [showCurrencyList, setShowCurrencyList] = useState(false);
  const [showLanguageList, setShowLanguageList] = useState(false);

  const currencies = ['USD', 'EUR', 'GBP', 'NGN'];
  const languages = ['English', 'French', 'Spanish', 'German'];

  const renderSelectableList = (data, selected, onSelect) => (
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      className="mt-1 mb-3 bg-white rounded-xl overflow-hidden"
      renderItem={({ item }) => (
        <TouchableOpacity
          className="flex-row justify-between items-center px-4 py-3 border-b border-gray-100"
          onPress={() => onSelect(item)}
        >
          <Text className="text-sm text-gray-900">{item}</Text>
          {item === selected && <Icon name="checkmark" size={18} color="#444CE7" />}
        </TouchableOpacity>
      )}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between h-14 mb-2 px-4">
        <TouchableOpacity
          onPress={handleBack}
          className="w-8 h-8 rounded-full border border-gray-300 justify-center items-center mt-2"
        >
          <Icon name="chevron-back" size={20} color="#000" />
        </TouchableOpacity>
        <Text className="text-base font-medium text-[#00011B]">Preferences</Text>
        <View className="w-8" />
      </View>

      {/* Settings List */}
      <View className="px-5 pb-8 space-y-3">
        {/* Currency Selector */}
        <TouchableOpacity
          className="flex-row items-center justify-between  p-3 rounded-xl shadow-sm"
          onPress={() => setShowCurrencyList(!showCurrencyList)}
        >
          <Text className="text-sm  text-[#252B37]">Currency</Text>
          <View className="flex-row items-center space-x-2">
            <Text className="text-sm text-[#444CE7]">{currency}</Text>
            <Icon name={showCurrencyList ? "chevron-up" : "chevron-forward"} size={16} color="#999" />
          </View>
        </TouchableOpacity>
        {showCurrencyList &&
          renderSelectableList(currencies, currency, (val) => {
            setCurrency(val);
            setShowCurrencyList(false);
          })}

        {/* Language Selector */}
        <TouchableOpacity
          className="flex-row items-center justify-between  p-3 rounded-xl shadow-sm"
          onPress={() => setShowLanguageList(!showLanguageList)}
        >
          <Text className="text-sm  text-[#252B37]">Display Language</Text>
          <View className="flex-row items-center space-x-2">
            <Text className="text-sm text-[#444CE7]">{language}</Text>
            <Icon name={showLanguageList ? "chevron-up" : "chevron-forward"} size={16} color="#999" />
          </View>
        </TouchableOpacity>
        {showLanguageList &&
          renderSelectableList(languages, language, (val) => {
            setLanguage(val);
            setShowLanguageList(false);
          })}

        {/* Toggle */}
        <View className="flex-row items-center justify-between  p-3 rounded-xl shadow-sm">
          <Text className="text-sm  text-[#252B37]">Hide tokens without balance</Text>
          <Switch
            value={hideEmptyTokens}
            onValueChange={() => setHideEmptyTokens(!hideEmptyTokens)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Preferences;
