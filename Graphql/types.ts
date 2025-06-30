import { OptionalId } from "mongodb";

export type Character = {
  id: string,
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: House | null;
}

export type CharacterModel = Character[];
export type House = {
  name: string;
  characters: Character[];
};