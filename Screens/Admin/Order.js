import React, { useEffect, useState } from "react"
import { 
    View, 
    Text,
    FlatList,
    Dimensions,
    TextInput,
    StyleSheet 
} from "react-native"

import baseURL from "../../assets/common/baseUrl";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage"
import { add } from "react-native-reanimated";

const Orders = (props) => {

    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState();
    const [token, setToken] = useState();
    return(
        <View>
            <Text>Orders Screen</Text>
        </View>
    )
}
export default Orders;