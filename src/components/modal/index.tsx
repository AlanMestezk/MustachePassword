import { View, StyleSheet, Text, TouchableOpacity, Pressable } from "react-native"
import * as Clipboard                                          from 'expo-clipboard'
import { useStorage }                                          from "../../hooks/useStorage"

interface ModalPasswordProps{
    password   : string
    handleClose: () => void;
}

export const ModalPassword = ({password, handleClose}: ModalPasswordProps)=>{

    const {saveItem} = useStorage()

    const handleCopyPassword =  async ()=>{

        try {

            await Clipboard.setStringAsync(password)

            //chamar saveItem
            const keyItem: string = "@pass"
            await saveItem({key: keyItem, value: password})

            alert(`Senha "${password}" copiada e salva com sucesso`)

            handleClose()
            
        } catch (error) {
            console.log(`Erro ao copiar a senha: ${error}`)
        }
    }

    return(

        <View style={styles.container}>
            
           <View style={styles.content}>

                <Text style={styles.title}>SENHA GERADA</Text>
                

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.password}>{password}</Text>
                </Pressable>
                <Text style={styles.subtitle}>Pressione para copiar e salvar</Text>

                <View style={styles.buttonArea}>
                    
                <TouchableOpacity style={styles.button} onPress={handleClose}>

                    <Text style={styles.buttonText}>Voltar</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>

                    <Text style={styles.buttonSaveText}>Salvar</Text>

                </TouchableOpacity>

                </View>

           </View>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor: "rgba(24, 24, 24, 0.6)",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        content:{
            backgroundColor: "aliceblue",
            width: "85%",
            paddingTop: 24, 
            paddingBottom: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30
        },
        title:{
            fontSize: 30,
            fontWeight: "bold",
            color: "#000",
            marginBottom: 24
        },
        subtitle:{
            fontSize: 18,
            fontWeight: "bold",
            color: "lightgray",
            marginBottom: 5
        },
        innerPassword:{
            backgroundColor: "#0e0e0e",
            width: "90%",
            padding: 14,
            borderRadius: 10
        },
        password:{
            color: "aliceblue",
            textAlign: "center",
            fontSize: 22,
            fontWeight: "bold"
        },
        buttonArea:{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "90%",
            marginTop: 12, 
            alignItems: "center",

        },
        button:{
            flex: 1,
            alignItems: "center",
            marginTop: 14,
            marginBottom: 14,
            padding: 8
        },
        buttonSave:{
            backgroundColor: "#392DE9",
            borderRadius: 10
        },
        buttonText:{
            fontSize: 18, 
            fontWeight: "bold"
        },
        buttonSaveText:{
            color: "aliceblue",
            fontSize: 18, 
            fontWeight: "bold"
        }
    }
)