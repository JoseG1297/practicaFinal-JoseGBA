import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AlertModal({setModalVisible, modalVisible, mensaje, cambiarVista = false} )
{

  const navigation = useNavigation();
  const onPressDos = (cambiarVista) => {
    !cambiarVista ? setModalVisible(false) : navigation.navigate('Login')
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{mensaje}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onPressDos(cambiarVista)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#333739',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#333739',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    marginBottom: 15,
    fontSize: 18,
    textAlign: 'center',
  },
});
