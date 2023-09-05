import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown'; // Import Dropdown
import {Colors} from '../../assets';
import DatePicker from 'react-native-datepicker';

const data = [
  {label: 'Hari Ini', value: '1'},
  {label: 'Pilih Tanggal', value: '2'},
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#888888'}]}>Hari</Text>
      );
    }
    return null;
  };

  const renderDatePicker = () => {
    if (value === '1') {
      // If "Hari Ini" is selected
      const currentDate = new Date(); // Get current date
      const day = currentDate.getDate(); // Get day (tanggal)
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Juni',
        'Juli',
        'Agu',
        'Sep',
        'Okto',
        'Nov',
        'Des',
      ];
      const monthIndex = currentDate.getMonth(); // Get month (bulan)
      const month = monthNames[monthIndex];
      const year = currentDate.getFullYear(); // Get year (tahun)
      const gabungan = `${day} ${month} ${year}`;

      return (
        <View>
          <Text style={styles.selectedDateText}>Tanggal: {gabungan}</Text>
        </View>
      );
    } else if (value === '2') {
      // If "Pilih Tanggal" is selected
      return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: Colors.hitam, marginTop: 10}}>
              Tanggal Mulai
            </Text>
            <TouchableOpacity
              style={{
                width: 180,
                height: 50,
                justifyContent: 'center',
                borderRadius: 5,
                backgroundColor: Colors.abuabu,
              }}>
              <Text
                style={{
                  color: Colors.hitam,
                  textAlign: 'center',
                  fontFamily: 'FiraSansRegular',
                }}>
                Pilih
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: Colors.hitam, marginTop: 10}}>
              Tanggal Akhir
            </Text>
            <TouchableOpacity
              style={{
                width: 180,
                height: 50,
                justifyContent: 'center',
                borderRadius: 5,
                backgroundColor: Colors.abuabu,
              }}>
              <Text
                style={{
                  color: Colors.hitam,
                  textAlign: 'center',
                  fontFamily: 'FiraSansRegular',
                }}>
                Pilih
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: '#888888'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Pilih Keperluan' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      {renderDatePicker()}
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: Colors.default,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: Colors.default,
    fontFamily: 'FiraSansRegular',
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.hitam,
    fontFamily: 'FiraSansRegular',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.hitam,
    fontFamily: 'FiraSansRegular',
  },
  itemTextStyle: {
    color: Colors.hitam,
    fontFamily: 'FiraSansRegular',
  },
  selectedDateText: {
    fontSize: 16,
    color: Colors.hitam,
    fontFamily: 'FiraSansRegular',
    marginTop: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
