export type ItemType = {
    id: string,
    name: string,
}

export type ItemGroupType = {
    id: string,
    items: ItemType[],
}