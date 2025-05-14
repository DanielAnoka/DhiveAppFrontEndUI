import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const Person = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: 'user@example.com', // Pre-filled and not editable
    });

    const isFormValid = form.firstName.trim() !== '' && form.lastName.trim() !== '';

    return (
        <View className=" py-2">
            <View className="space-y-4">
                {/* First Name */}
                <View>
                    <Text className="text-gray-700 mb-1">First Name</Text>
                    <TextInput
                        className="border border-gray-300 rounded-md px-4 py-2 text-black"
                        placeholder="John"
                        value={form.firstName}
                        onChangeText={(text) => setForm({ ...form, firstName: text })}
                    />
                </View>

                {/* Last Name */}
                <View>
                    <Text className="text-gray-700 mb-1">Last Name</Text>
                    <TextInput
                        className="border border-gray-300 rounded-md px-4 py-2 text-black"
                        placeholder="Doe"
                        value={form.lastName}
                        onChangeText={(text) => setForm({ ...form, lastName: text })}
                    />
                </View>

                {/* Email (non-editable) */}
                <View>
                    <Text className="text-gray-700 mb-1">Email</Text>
                    <TextInput
                        className="border border-gray-300 rounded-md px-4 py-2 text-black bg-gray-100"
                        value={form.email}
                        editable={false}
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity
                    disabled={!isFormValid}
                    className="rounded-md px-4 py-3 mb-6"
                    style={{
                        backgroundColor: isFormValid ? '#4F46E5' : '#717680',
                    }}
                >
                    <Text className="text-center text-white font-medium">Submit</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Person;
