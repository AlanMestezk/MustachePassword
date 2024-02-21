import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons}                   from '@expo/vector-icons'

//pages
import { Home }      from './pages/Home';
import { Passwords } from './pages/Passwords';

const Tab = createBottomTabNavigator()

export const Routes = () =>{

    return(

        <Tab.Navigator>

            <Tab.Screen
                name='Home'
                component={Home}
                options={
                    {
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon : ({focused, size, color})=>{
                            if(focused){
                                return <Ionicons size={size} color={color} name="home"/>
                            }

                            return <Ionicons size={size} color={color} name="home-outline"/>
                        }
                    }
                }
                
            />

            <Tab.Screen
                name='Password'
                component={Passwords}
                options={
                    {
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon : ({focused, size, color})=>{
                            if(focused){
                                return <Ionicons size={size} color={color} name="lock-closed"/>
                            }

                            return <Ionicons size={size} color={color} name="lock-closed-outline"/>
                        }
                        
                    }
                }
            />

        </Tab.Navigator>
    )
}