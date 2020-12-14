import axios from "axios";
import { _getData, data_url, getItemGroups } from "./Api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockData = [
    {"id": 755, "listId": 2, "name": "Test"},
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
    await expect(_getData()).resolves.toEqual({data: mockData});
    expect(mockedAxios.get).toHaveBeenCalledWith(`${data_url}`);
  });
  it("Returns item groups", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    );
    const result = await getItemGroups();
    expect(result.length).toBeGreaterThan(0);
  });
});