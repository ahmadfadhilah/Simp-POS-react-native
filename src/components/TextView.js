import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TextView = ({
  placeholder,
  name,
  onIconPress,
  secure,
  value,
  onChangeText,
  type,
  editable,
  icon
}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 35,
        height: 40
      }}>
      <Ionicons name={icon} size={20} color="gray" />
      <TextInput
        editable={editable}
        secureTextEntry={secure}
        placeholder={placeholder}
        style={{
          fontSize: 17,
          flex: 1,
          color: '#000',
          height: 45,
          marginLeft: 4
        }}
        value={value}
        onChangeText={i => (onChangeText ? onChangeText(i) : null)}
        keyboardType={type}
        placeholderTextColor="grey"
      />
      {name ? (
        <TouchableOpacity
          onPress={() => onIconPress()}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 8,
          }}>
          <Icon name={name} size={24} style={{color: '#2EB5E0'}} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TextView;
