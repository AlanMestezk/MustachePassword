import { View, Text, StyleSheet, Image, FlatList, Pressable } from "react-native";
import { SafeAreaView }                            from "react-native-safe-area-context";
import { useIsFocused }                            from "@react-navigation/native";
import { useState, useEffect }                     from "react";
import { useStorage }                              from "../../hooks/useStorage";
import { PasswordItem }                            from "./components/passwordItem";
import * as Clipboard                              from 'expo-clipboard'

export const Passwords = () =>{

    const [listPasswords, setListPasswords] = useState<string[]>()
    const focused                           = useIsFocused()
    const {getItem, removeItem}             = useStorage()

    useEffect(
        ()=>{

            const loadPassword = async()=>{
                
                const keyItem: string = "@pass"
                const passwords: string[] = await getItem({key: keyItem})

                setListPasswords(passwords)
            }

            loadPassword()


        }, [focused]
    )


    async function handleDeletePassword(item: string) {

        const keyItem: string = "@pass"
        const passwords: string[] = await removeItem({key: keyItem, item: item})

       setListPasswords(passwords)
    }



    

    async function handleCopyPassword(item: string) {
        try {

            await Clipboard.setStringAsync(item)
            
            alert(`Senha ${item} copiada com sucesso`)
            
        } catch (error) {
            console.log(`Erro ao copiar a senha: ${error}`)
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}>

                <Image
                    source={require("../../assets/MustachePassIcon.png")}
                    style={styles.img}
                />

                <Text style={styles.title}>Minhas Senhas</Text>
                <Text style={styles.paragrafo}>Pressione a senha para remover</Text>
                

            </View>

            <View style={styles.content}>

                <FlatList
                    style={styles.flatList}
                    data={listPasswords}
                    keyExtractor={
                        (item)=> String(item)
                    }
                    renderItem={
                        ({item})=> 
                        <View>

                            <PasswordItem 
                                data={item} 
                                removePassword={()=> handleDeletePassword(item)}
                                copyPassword={()=> handleCopyPassword(item)}
                            />

                        </View>
                    }
                />

            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create(
    
    {   
        container:{
            flex: 1,
        },
        header:{
            backgroundColor: 'gray',
            paddingVertical: 58,
            paddingHorizontal: 14,
            alignItems: "center",
            justifyContent: "center"
        },
        img:{
            width: 150,
            height: 150
        },
        title:{
            fontSize: 40,
            fontWeight: 'bold'
        },
        paragrafo:{
            fontSize: 15,
            fontWeight: 'bold',
            color: "#d3d3d3"
        },
        content:{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
            
        },
        flatList:{
            flex: 1,
            paddingTop: 14
            
        }

    }
)