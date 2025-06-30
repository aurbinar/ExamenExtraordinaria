import { GraphQLError } from "graphql";
import {Character, CharacterModel} from "./types.ts"


export const resolvers = {
  Query: {
    getCharacter: async (_:unknown, {id}: {id: string}): Promise<Character | null> => {

      const url = `https://hp-api.onrender.com/api/character/${id}`
      const results = await fetch(url);
    
      if(!results.ok){
        return null;
      }

      const data: CharacterModel = await results.json();
      return data[0];
    },
    
    getCharacters: async (_:unknown, {ids}: {ids?: string[]}): Promise<CharacterModel> => {

      const url = `https://hp-api.onrender.com/api/characters`

      const results = await fetch(url);
      
      const data: CharacterModel = await results.json();
      if(ids?.length === 0){
        return data;
      }

      const filtered = data.filter((ch) => ch.id === ids?.join())
      
      return filtered;
    } 
  }
}