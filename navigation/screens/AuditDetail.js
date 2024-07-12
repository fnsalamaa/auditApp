import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Menggunakan FontAwesome sebagai contoh

const AuditDetail = ({ route }) => {
    const navigation = useNavigation();
    const { auditFindings, auditArea, auditDate, closeDate } = route.params || {};

    const tableData = {
        tableHead: ['Audit Findings', 'Audit Area', 'Audit Date', 'Close Date'],
        tableData: [
            [auditFindings || '', auditArea || '', auditDate ? auditDate.toDateString() : '', closeDate ? closeDate.toDateString() : ''],
        ],
    };

    const handleEdit = () => {
        // Tambahkan logika navigasi atau aksi edit di sini
        console.log('Edit button pressed');
    };

    return (
        <View style={styles.container}>
            <Table borderStyle={styles.tableBorderStyle}>
                <Row data={tableData.tableHead} style={styles.head} textStyle={styles.headText} />
                <Rows data={tableData.tableData} textStyle={styles.text} />
            </Table>
            <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                <Icon name="edit" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    tableBorderStyle: { borderWidth: 2, borderColor: '#071952' }, // Ubah warna garis tabel sesuai tema
    head: { height: 40, backgroundColor: '#071952' },
    headText: { fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center' },
    text: { margin: 6, fontSize: 16, color: 'black', textAlign: 'center' },
    editButton: {
        backgroundColor: '#071952',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        elevation: 3, // Efek elevasi untuk menonjolkan tombol di atas konten
    },
});

export default AuditDetail;
