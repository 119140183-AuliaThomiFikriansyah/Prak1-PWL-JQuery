import React, {useState} from 'react';
import {View, Button, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Colors} from '../../assets';

const DateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(Platform.OS === 'android');
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(Platform.OS === 'android');
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  const formatDate = date => {
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      date,
    );
    return formattedDate;
  };

  const showSelectedDates = () => {
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    console.log('Tanggal Awal:', formattedStartDate);
    console.log('Tanggal Akhir:', formattedEndDate);

    // Gunakan formattedStartDate dan formattedEndDate sesuai kebutuhan Anda di sini
  };

  return (
    <View>
      <Text style={{color: Colors.hitam}}>
        Tanggal Awal: {formatDate(startDate)}
      </Text>
      <Text style={{color: Colors.hitam}}>
        Tanggal Akhir: {formatDate(endDate)}
      </Text>
      <Button
        title="Pilih Tanggal Awal"
        onPress={() => setShowStartDatePicker(true)}
      />
      <Button
        title="Pilih Tanggal Akhir"
        onPress={() => setShowEndDatePicker(true)}
      />
      <Button title="Tampilkan Tanggal" onPress={showSelectedDates} />

      {showStartDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={handleStartDateChange}
        />
      )}

      {showEndDatePicker && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={handleEndDateChange}
        />
      )}
    </View>
  );
};

export default DateSelector;
