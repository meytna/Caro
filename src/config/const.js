import { Dimensions } from "react-native";

export const NUMBER_OF_COLUMNS = 20;
export const NUMBER_OF_ROWS = 30;
export const CELL_LENGTH = Math.floor(Dimensions.get('window').width / NUMBER_OF_COLUMNS);