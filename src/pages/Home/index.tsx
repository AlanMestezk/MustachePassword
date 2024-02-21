import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import { useState }                                               from "react"
import Slider                                                     from '@react-native-community/slider'
import { ModalPassword }                                          from "../../components/modal"

let charset: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%!&*?"

export function Home (){

    const [sizeValue,         setSizeValue] = useState<number>(8)
    const [valuePassword, setValuePassword] = useState<string>("")
    const [chageModal,      setChangeModal] = useState<boolean>(false)
 
    const handleGeneratorPassword = ()=>{

      let password: string = ''

      for(let i = 0, n = charset.length; i < sizeValue; i++){

        password += charset.charAt(Math.floor(Math.random() * n))
      }

      setValuePassword(password)
      setChangeModal(true)

    }

    return(
      
      <View style={styles.container}>

        <View style={styles.viewTitle}>

          <Image
            source={require("../../assets/MustachePassIcon.png")}
            style={styles.img}
          />

          <Text style={styles.title}>MUSTACHE PASSWORD</Text>

        </View>

        <View style={styles.viewContentText}>

          <Text style={styles.textTitle}>Senha com {sizeValue} caracteres</Text>

        </View>

        <View style={styles.area}>

          <Slider
            style={styles.slider}
            minimumValue={6}
            maximumValue={20}
            maximumTrackTintColor="red"
            minimumTrackTintColor="black"
            thumbTintColor="black"
            value={sizeValue}
            onValueChange={(value: number)=>setSizeValue(Math.round(value))}
          />

        </View>

        <TouchableOpacity style={styles.button} onPress={handleGeneratorPassword}>
          <Text style={styles.textButton}>Gerar senha</Text>
        </TouchableOpacity>

        <Modal visible={chageModal} animationType="fade" transparent={true}>

          <ModalPassword
            password={valuePassword}
            handleClose={()=>setChangeModal(false)}
          />

        </Modal>

      </View>

    )
}


//styles
const styles = StyleSheet.create(
  {

    container:{
      flex: 1,
      backgroundColor: "aliceblue",
      justifyContent: 'center', 
      alignItems: "center"
    },
    viewTitle:{
      marginTop: -100,
      justifyContent: "center",
      alignItems: "center"
    },
    img:{
      width: 220, 
      height: 220
    },
    title:{
      fontSize: 40,
      fontWeight: "bold"
    },
    viewContentText:{
      marginTop: 50
    },
    textTitle:{
      fontSize: 25,
      fontWeight: "bold",
      
    },
    slider:{
      height: 50,
      
    },
    area:{
      marginTop: 14,
      marginBottom: 14,
      width: "80%",
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      padding: 8
    },
    button:{
      backgroundColor: "black",
      width: "40%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10
    },
    textButton:{
      color: "aliceblue",
      fontSize: 23,
      fontWeight: 'bold'
    },
    ModalPassword:{

    }

  }
)