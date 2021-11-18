import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductDetails } from './screen/ProductDetails';
import { Cart } from './screen/Cart';
import { CartIcon } from './components/CartIcon';
import { CartProvider } from './CartContext';
import ProductList from './screen/ProductList';
import Login from './screen/Login'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Login">
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CartIcon" component={CartIcon} />
        <Stack.Screen name="CartProvider" component={CartProvider} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}




// function App() {
//   return (
//     <CartProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name='Products' component={ProductsList} 
//           options={({ navigation }) => ({
//             title: 'Products',
//             headerTitleStyle: styles.headerTitle,
//             headerRight: () => <CartIcon navigation={navigation}/>
//           })}/>
//           <Stack.Screen name='ProductDetails' component={ProductDetails} 
//           options={({ navigation }) => ({
//             title: 'Product details',
//             headerTitleStyle: styles.headerTitle,
//             headerRight: () => <CartIcon navigation={navigation}/>,
//           })} />
//           <Stack.Screen name='Cart' component={Cart} 
//           options={({ navigation }) => ({
//             title: 'My cart',
//             headerTitleStyle: styles.headerTitle,
//             headerRight: () => <CartIcon navigation={navigation}/>,
//           })} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </CartProvider>
//   );
// }

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});


export default App;
