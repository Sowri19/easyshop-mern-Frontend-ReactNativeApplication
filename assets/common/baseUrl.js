import { Platform } from 'react-native'

// let baseURL= 'https://mighty-savannah-06145.herokuapp.com/api/v1/'

let baseURL = '';

{Platform.OS == 'android'
? baseURL = 'http://192.168.0.116:3000/api/v1/'
: baseURL = 'http://localhost:3000/api/v1/'
}

export default baseURL;