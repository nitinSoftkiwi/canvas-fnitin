import axios from "./myAxios";

export function getcustomiseElement(){
    return axios().get("/coustomise-element/getAllCustomiseValue");
}
