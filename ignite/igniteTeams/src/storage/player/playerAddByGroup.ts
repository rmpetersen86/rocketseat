import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStoragesDTO } from "./PlayerStorageDTO";
import { AppError } from "@utils/AppError";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(
  newPlayer: PlayerStoragesDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Esta pessoa ja esta adicionada em um time aqui.");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
