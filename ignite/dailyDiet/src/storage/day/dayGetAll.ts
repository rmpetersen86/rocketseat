import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAY_COLLETCION } from "@storage/storageConfig";

export async function daysGetAll() {
  try {    
    const storage = await AsyncStorage.getItem(DAY_COLLETCION);
    const days: string[] = storage ? JSON.parse(storage) : [];
    return days;
  } catch (error) {
    throw error;
  }
}
