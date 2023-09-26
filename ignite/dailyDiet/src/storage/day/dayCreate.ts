import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAY_COLLETCION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { daysGetAll } from "./dayGetAll";

export async function dayCreate(newDay: string) {
  try {
    const storedDays = await daysGetAll();

    const dayAlreadyExists = storedDays.includes(newDay);

    if (dayAlreadyExists) {
      return
        //throw new AppError("Este dia já está cadastrado.");
    }

    const storage = JSON.stringify([...storedDays, newDay]);

    await AsyncStorage.setItem(DAY_COLLETCION, storage);
  } catch (error) {
    throw error;
  }
}
