import axios from "axios";
import { getData, api_domain, api_url } from "./Api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockData = [
    {"id": 755, "listId": 2, "name": ""},
    {"id": 203, "listId": 2, "name": ""},
    {"id": 684, "listId": 1, "name": "Item 684"},
    {"id": 276, "listId": 1, "name": "Item 276"},
    {"id": 736, "listId": 3, "name": null},
    {"id": 926, "listId": 4, "name": null},
    {"id": 808, "listId": 4, "name": "Item 808"},
];

describe("API", () => {
  it("Returns the data from the api endpoint", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    );
    await expect(getData()).resolves.toEqual({data: mockData});
    expect(mockedAxios.get).toHaveBeenCalledWith(`${api_domain}${api_url}`);
  });
});