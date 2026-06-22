import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Principal from './GlobalContext/Telas/Principal';
import Login from './GlobalContext/Telas/Login';
import Registro from './GlobalContext/Telas/Registro';
import Perfil from './GlobalContext/Telas/Perfil';
import Compras from './GlobalContext/Telas/Compras';
import Administracao from './GlobalContext/Telas/Administracao';
import Adicionar from './GlobalContext/Telas/Administracao/Adicionar';
import Produtos from './GlobalContext/Telas/Produtos';
import DetalhesProdutos from './GlobalContext/Telas/Produtos/Detalhes';

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name="Login" options={{ headerShown: false }}
        component={Login}
        />

        <Tab.Screen name="Registro" options={{ headerShown: false }}
        component={Registro}
        />
        
        <Tab.Screen name="Principal" options={{ headerShown: false }}
        component={Principal}
        />

        <Tab.Screen name="Perfil" options={{ headerShown: false }}
        component={Perfil}
        />

        <Tab.Screen name="Administracao" options={{ headerShown: false }}
        component={Administracao}
        />
        
         <Tab.Screen name="Adicionar" options={{ headerShown: false }}
        component={Adicionar}
        />


        <Tab.Screen name="Produtos" options={{ headerShown: false }}
        component={Produtos}
        />

        <Tab.Screen name="DetalhesProdutos" options={{ headerShown: false }}
        component={DetalhesProdutos}
        />

        <Tab.Screen name="Compras" options={{ headerShown: false }}
        component={Compras}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}