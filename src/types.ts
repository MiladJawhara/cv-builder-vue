export type columnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnData {
    id: string,
    bgColor: string,
    size: columnSize,
    order?: number
}

