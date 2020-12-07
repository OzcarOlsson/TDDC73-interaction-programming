import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const Step2 = ({page, setPage}) => {
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    adress: '',
    zipcode: '',
    city: '',
    email: '',
    phone: '',
  });

  return (
    <>
      <View style={styles.stepWrap}>
        <Text style={styles.stepName}>Order info</Text>
        <View style={styles.stepFields}>
          <View style={styles.fieldWrap}>
            <View style={styles.fieldNameWrap}>
              <Text style={styles.fieldName}>Full name</Text>
              {orderInfo.name.length < 2 && (
                <Text style={styles.asterisk}>*</Text>
              )}
            </View>
            <TextInput
              style={styles.inputField}
              value={orderInfo.name}
              onChangeText={(text) =>
                setOrderInfo((orderInfo) => {
                  return {...orderInfo, name: text};
                })
              }
            />
          </View>
          <View style={styles.fieldWrap}>
            <View style={styles.fieldNameWrap}>
              <Text style={styles.fieldName}>Adress</Text>
              {orderInfo.adress.length < 3 && (
                <Text style={styles.asterisk}>*</Text>
              )}
            </View>
            <TextInput
              style={styles.inputField}
              value={orderInfo.adress}
              onChangeText={(text) =>
                setOrderInfo((orderInfo) => {
                  return {...orderInfo, adress: text};
                })
              }
            />
          </View>
          <View style={styles.fieldWrap}>
            <View style={styles.fieldNameWrap}>
              <Text style={styles.fieldName}>Zipcode</Text>
              {orderInfo.zipcode.length < 5 && (
                <Text style={styles.asterisk}>*</Text>
              )}
            </View>
            <TextInput
              style={styles.inputField}
              value={orderInfo.zipcode}
              onChangeText={(text) =>
                setOrderInfo((orderInfo) => {
                  return {...orderInfo, zipcode: text};
                })
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.fieldWrap}>
            <View style={styles.fieldNameWrap}>
              <Text style={styles.fieldName}>City</Text>
              {orderInfo.city.length < 3 && (
                <Text style={styles.asterisk}>*</Text>
              )}
            </View>
            <TextInput
              style={styles.inputField}
              value={orderInfo.city}
              onChangeText={(text) =>
                setOrderInfo((orderInfo) => {
                  return {...orderInfo, city: text};
                })
              }
            />
          </View>
          <View style={styles.fieldWrap}>
            <View style={styles.fieldNameWrap}>
              <Text style={styles.fieldName}>Email</Text>
              {orderInfo.email.length < 3 && (
                <Text style={styles.asterisk}>*</Text>
              )}
            </View>
            <TextInput
              style={styles.inputField}
              value={orderInfo.city}
              onChangeText={(text) =>
                setOrderInfo((orderInfo) => {
                  return {...orderInfo, city: text};
                })
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => setPage(page > 0 ? page - 1 : 0)}>
          <Text style={{color: 'white', fontSize: 18}}>Back</Text>
        </TouchableOpacity>
        {page != 4 && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => setPage(page + 1)}>
            <Text style={{color: 'white', fontSize: 18}}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  stepWrap: {
    width: '90%',
    flex: 1,
    marginBottom: 20,

    // marginTop: 20,
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  stepName: {
    color: 'white',
    fontSize: 20,
    // textAlign: 'center',
  },
  stepFields: {
    marginTop: 10,
    width: '95%',
    flex: 0.9,
    alignItems: 'center',
  },
  fieldWrap: {
    // borderWidth: 1,
    // borderColor: 'blue',
    alignItems: 'center',
    width: '80%',
  },
  fieldNameWrap: {
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  fieldName: {
    color: 'white',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    fontSize: 18,
  },
  asterisk: {
    color: 'red',
    textAlignVertical: 'center',
    fontSize: 20,
  },
  inputField: {
    width: '100%',
    height: 50,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttons: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    // padding: 10,
  },
  nextButton: {
    backgroundColor: '#eb7e02',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Step2;