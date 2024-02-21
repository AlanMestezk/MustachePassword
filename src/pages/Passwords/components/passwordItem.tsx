import { View, Text, StyleSheet, Pressable } from "react-native"

interface PasswordItemProps{

    data           : string
    removePassword?: ()=> void
    copyPassword  ?: ()=>void
}

export const PasswordItem = ({data, removePassword, copyPassword}:PasswordItemProps)=>{

    return(
        
        <View style={styles.main}>
            <Pressable style={styles.container}>

                <Text onLongPress={removePassword} style={styles.text}>{data}</Text>
                <Text onPress={copyPassword} style={styles.textCopy}>copiar</Text>
               
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create(
    {   
        main:{
            alignItems: "center",
            justifyContent: "center"
        },
        container:{
            backgroundColor: "#0e0e0e",
            padding: 20,
            width: "95%",
            marginBottom: 14,
            color: "aliceblue",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            
        },
        text:{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold"
        },
        textCopy:{
            color: "gray",
            fontSize: 20,
            fontWeight: "bold",
        }
    }
)