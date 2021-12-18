import Axios from "axios";

const key = [
    "80e73835c8934c0a8f67600904977073",
    "83f2261f53d549ad8d8451ba2ebde399",
    "10baa3c3fcac490ab89f070dd6a19ba9",
    "d624b4c0731e4398904c190db5bb6783",
    "1c0f1e0838ad44e8aaccbd48b5375f7b",
    "337cb9cb85fa416bbdf29e69ef8d39d9",
    "37fb1840ef5a41b385113ecab047e28c",
    "d89c2f97c45d4c80886bed0e50c20e07",
    "c45bc9888c824e86bb4f4288acbced76",
    "875801f8dede4b9f9fe500408c8259be",
    "0e99c8e663a9449b831174d6e7b63b38",
  ],
  random = Math.floor(Math.random() * key.length);
export const APIKey = key[random];

export const API = Axios.create({
  baseURL: `https://api.spoonacular.com`,
});
