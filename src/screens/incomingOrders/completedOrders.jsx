import { ScrollView, View } from 'react-native';
import TransactionItem from '../../components/orders/TransactionItem';
import { Images } from '../../constants/image';

const completedList = () => {
    const data = [
        { transactionId: '1001', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '1002', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '1003', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '1004', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '1005', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '1006', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '1007', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '1008', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '1009', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '10010', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '10011', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
        { transactionId: '10012', name: 'Pomaline Moses', amount: '$900', status: 'Completed' },
    ];
    return (
        <ScrollView className="p-4 space-y-3">
            {data.length > 0 ? (
                data.map((item) => (
                    <TransactionItem
                        key={item.transactionId}
                        transactionId={item.transactionId}
                        name={item.name}
                        amount={item.amount}
                        status={item.status}
                    />
                ))
            ) : (
                <View className="items-center justify-center mt-10">
                    <Image
                        source={Images.Empty}
                        className="w-[212px] h-[200px] mb-4"
                        resizeMode="contain"
                    />
                    <Text className="text-base text-gray-500 mb-2">
                        No transactions found
                    </Text>
                    <Text className="text-center text-black">
                        Cannot find your transaction?{' '}
                        <Text className="text-[#007BFF]">Check explorer</Text>
                    </Text>
                </View>
            )}
        </ScrollView>
    )
}

export default completedList