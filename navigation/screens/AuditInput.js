import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, Pressable, SafeAreaView, ScrollView, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native'; // Mengimpor useNavigation

export default function App() {
    const [auditFindings, setAuditFindings] = useState("");
    const [auditArea, setAuditArea] = useState("");
    const [auditDate, setAuditDate] = useState(new Date()); // State untuk audit date
    const [closeDate, setCloseDate] = useState(new Date()); // State untuk close date
    const [formReady, setFormReady] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [showClosePicker, setShowClosePicker] = useState(false);

    const navigation = useNavigation(); // Menggunakan useNavigation untuk mendapatkan objek navigation

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    const toggleCloseDatePicker = () => {
        setShowClosePicker(!showClosePicker);
    };

    const onChangeAuditDate = (_, selectedDate) => {
        const currentDate = selectedDate || new Date();
        setShowPicker(Platform.OS === 'ios');
        setAuditDate(currentDate); // Mengubah state auditDate, bukan dateOfBirth
    };

    const onChangeCloseDate = (_, selectedDate) => {
        const currentDate = selectedDate || new Date();
        setShowClosePicker(Platform.OS === 'ios');
        setCloseDate(currentDate); // Mengubah state closeDate
    };

    const confirmIOSAuditDate = () => {
        setShowPicker(false);
    };

    const confirmIOSCloseDate = () => {
        setShowClosePicker(false);
    };

    const formatDate = (rawDate) => {
        let date = new Date(rawDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        return `${day}-${month}-${year}`;
    };

    const onSubmit = () => {
    // Ambil data audit dari mana pun Anda mendapatkannya
    // const auditFindings = 'Temuan audit';
    // const auditArea = 'Area audit';
    // const auditDate = new Date(); // Tanggal audit
    // const closeDate = new Date(); // Tanggal penutupan audit

    // Tampilkan alert setelah submit
    alert(`Data berhasil disimpan\nAudit Findings: ${auditFindings}\nAudit Area: ${auditArea}\nAudit Date: ${auditDate.toDateString()}\nClose Date: ${closeDate.toDateString()}`);
    
    // Navigasi ke halaman AuditDetail dengan data yang disubmit
    navigation.navigate('Audit Details', {
        auditFindings: auditFindings,
        auditArea: auditArea,
        auditDate: auditDate.toISOString(),  // Mengubah ke ISO string
        closeDate: closeDate.toISOString(),  // Mengubah ke ISO string
    });
};

    

    useEffect(() => {
        setFormReady(auditFindings && auditArea && auditDate && closeDate);
        return () => {
            setFormReady(false);
        };
    }, [auditFindings, auditArea, auditDate, closeDate]);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={10}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                >
                    {/* <Text style={styles.head}>
                        <MaterialCommunityIcons
                            name="flower-tulip-outline"
                            size={20}
                            color="#075985"
                        />{" "}
                        Flowerhhio
                    </Text> */}
                    {/* <Text style={styles.moto}> Make every flower count</Text> */}
                    <Image style={styles.image}
                    source={require('../../assets/audit.png')}
                    />


                    <View>
                        <Text style={styles.label}>
                            Audit Findings
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Type  Audit Findings'
                            value={auditFindings}
                            onChangeText={setAuditFindings}
                            placeholderTextColor="#11182744"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Audit Area</Text>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select an Audit Area...',
                                value: null,
                            }}
                            onValueChange={(value) => setAuditArea(value)}
                            items={[
                                { label: 'Finance', value: 'Finance' },
                                { label: 'IT', value: 'IT' },
                                { label: 'General Affair', value: 'General Affair' },
                                { label: 'Production', value: 'Production' },
                                { label: 'Technical', value: 'Technical' },
                                { label: 'QA', value: 'QA' },
                            ]}
                            style={{
                                inputIOS: {
                                    backgroundColor: "transparent",
                                    height: 50,
                                    fontSize: 14,
                                    fontWeight: "500",
                                    color: "#111827cc",
                                    borderRadius: 50,
                                    borderWidth: 1.5,
                                    borderColor: "#11182711",
                                    paddingHorizontal: 20,
                                    marginBottom: 20,
                                },
                            }}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>
                            Audit date
                        </Text>

                        {showPicker && (
                            <DateTimePicker
                                mode="date"
                                display="spinner"
                                value={auditDate}
                                onChange={onChangeAuditDate}
                                style={styles.datePicker}
                            />
                        )}

                        {showPicker && Platform.OS === "ios" &&
                            (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-around"
                                    }}
                                >
                                    <TouchableOpacity style={[
                                        styles.button,
                                        styles.pickerButton,
                                        { backgroundColor: "#11182711" },
                                    ]}
                                        onPress={toggleDatePicker}
                                    >
                                        <Text
                                            style={[
                                                styles.buttonText,
                                                { color: "#075985" }
                                            ]}
                                        >Cancel
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[
                                        styles.button,
                                        styles.pickerButton,
                                    ]}
                                        onPress={confirmIOSAuditDate}
                                    >
                                        <Text
                                            style={[
                                                styles.buttonText,
                                            ]}
                                        >Confirm
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}

                        {!showPicker && (
                            <Pressable
                                onPress={toggleDatePicker}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder='Select Audit Date'
                                    value={formatDate(auditDate)} // Gunakan formatDate untuk menampilkan tanggal
                                    onChangeText={setAuditDate}
                                    placeholderTextColor="#11182744"
                                    editable={false}
                                    onPressIn={toggleDatePicker}
                                />
                            </Pressable>
                        )}
                    </View>

                    <View>
                        <Text style={styles.label}>
                            Close date
                        </Text>

                        {showClosePicker && (
                            <DateTimePicker
                                mode="date"
                                display="spinner"
                                value={closeDate}
                                onChange={onChangeCloseDate}
                                style={styles.datePicker}
                            />
                        )}

                        {showClosePicker && Platform.OS === "ios" && (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                }}
                            >
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        styles.pickerButton,
                                        { backgroundColor: "#11182711" },
                                    ]}
                                    onPress={toggleCloseDatePicker}
                                >
                                    <Text
                                        style={[
                                            styles.buttonText,
                                            { color: "#075985" },
                                        ]}
                                    >
                                        Cancel
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.button, styles.pickerButton]}
                                    onPress={confirmIOSCloseDate}
                                >
                                    <Text style={styles.buttonText}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        {!showClosePicker && (
                            <Pressable onPress={toggleCloseDatePicker}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Select Close Date'
                                    value={formatDate(closeDate)} // Gunakan formatDate untuk menampilkan tanggal
                                    onChangeText={setCloseDate}
                                    placeholderTextColor="#11182744"
                                    editable={false}
                                    onPressIn={toggleCloseDatePicker}
                                />
                            </Pressable>
                        )}
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            {
                                backgroundColor: formReady ?
                                    "#071952" : "11182711"
                            },
                        ]}
                        disabled={!formReady}
                        onPress={onSubmit}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                {
                                    color: formReady ? "#fff" :
                                        "11182711"
                                },
                            ]}
                        >
                            Submit
                        </Text>
                    </TouchableOpacity>

                    <StatusBar style="auto" />
                </ScrollView>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fafb",
    },
    contentContainer: {
        padding: 20,
        paddingTop: Platform.OS === "android" ?
            Constants.statusBarHeight + 50 : 50,
    },
    head: {
        fontweight: "500",
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center",
        color: "#111827cc",
    },
    moto: {
        fontWeight: "400",
        fontSize: 15,
        marginBottom: 35,
        textAlign: "center",
        color: "#111827cc",
    },
    label: {
        fontSize: 13,
        fontWeight: "500",
        marginBottom: 10,
        color: "#111827cc",
    },
    image: {
        width: 200,
        height: 200,
        marginTop: -40,
        alignSelf:"center"
    },
    input: {
        backgroundColor: "transparent",
        height: 50,
        fontSize: 14,
        fontWeight: "500",
        color: "#111827cc",
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: "#11182711",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: "#071952",
    },
    buttonText: {
        fontSize: 14,
        fontweight: "500",
        color: "#fff",
    },
    datePicker: {
        height: 120,
        marginTop: -10,
    },
    pickerButton: {
        paddingHorizontal: 20,
    },
});



