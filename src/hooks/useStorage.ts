import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserStorageProps{

    key   : string | any 
    value?: string | any
    item ?: string | any 
}

export const useStorage = () => {

    //buscar 
    const getItem = async ({key}: UserStorageProps)=>{

        try {

            const passwords: string | any  = await AsyncStorage.getItem(key)
            return JSON.parse(passwords) || []
            
        } catch (error) {
            console.log(`Erro ao bucar: ${error}`)
            return []
        }
    }

    //salvar
    const saveItem = async ({ key, value }: UserStorageProps) => {

        try {
            // Corrija a chamada para getItem passando um objeto com a propriedade key
            let passwords = await getItem({ key: key });
    
            passwords.push(value);
    
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
            
        } catch (error) {
            console.log(`Erro ao salvar: ${error}`);
            return [];
        }
    }

    //remover
    const removeItem = async ({key, item}: UserStorageProps)=>{

        try {

            let passwords = await getItem({key: key})

            let myPasswords = passwords.filter(

                (password: string)=> {

                    return(password !== item)
                }
            )

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

            return myPasswords

            
        } catch (error) {
            console.log(`Erro ao remover: ${error}`)
            return []
        }
        
    }

    return{
        getItem, 
        saveItem, 
        removeItem
    }
}