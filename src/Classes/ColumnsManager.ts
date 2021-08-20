export interface ManageableColumn {
    callBack: CallableFunction
}

const allColumns: ManageableColumn[] = [];
export default class ColumnsManager {

    public static addColumn(col: ManageableColumn) {
        allColumns.push(col)
    }

    public static run() {
        allColumns.forEach(col => { col.callBack() });
    }
}