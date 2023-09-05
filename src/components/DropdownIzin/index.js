import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Colors} from '../../assets';

const data = [
  {label: 'Sakit', value: '1'},
  {label: 'Izin', value: '2'},
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#888888'}]}>
          Keperluan
        </Text>
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
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
