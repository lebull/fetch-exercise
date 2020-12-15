import Axios, { AxiosResponse } from "axios";
import { ItemType, ItemGroupType } from "./Types";
import { mockData } from "./mockData";

export const data_url = `https://fetch-hiring.s3.amazonaws.com/hiring.json`;

/**
 * Returns raw response provided at the example endpoint
 */
export const _getData = async () : Promise<AxiosResponse> => {
    return await Axios.get(data_url);
}

/**
 * Returns raw response provided at the example endpoint
 */
export const _getMockData = async () : Promise<any> => {
    return { 
        data: mockData,
    };
}

/**
 * Returns all ItemGroups (including items) provided at the example endpoint
 */
export const getItemGroups = async (mock: boolean = false) : Promise<ItemGroupType[]> => {
    let itemGroups: {[index: string]:any}  = {};
    let response;
    if(mock){
        response = await _getMockData();
    }else{
        response = await _getData();
    }
    response.data
        .filter((rawItem: any) => rawItem.name)
        .forEach((rawItem: any) =>{
            const newItem = { 
                id: rawItem.id,
                name: rawItem.name
            } as ItemType;
            if(!itemGroups[rawItem.listId]){
                itemGroups[rawItem.listId] = { 
                    id: rawItem.listId,
                    items: [newItem]
                } as ItemGroupType
            } else {
                itemGroups[rawItem.listId].items.push(newItem)
            }
        }
    );
    return Object.entries(itemGroups)
        .map(([key, item]) => item as ItemGroupType);
}