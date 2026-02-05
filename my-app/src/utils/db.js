import { tablesDB } from "../lib/appwrite";
import { ID } from "appwrite";


export const createRows = async (tableId, data, rowId = ID.unique()) => {
  const response = await tablesDB.createRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: tableId,
    rowId: rowId, 
    data: data,
  });
  return response;
};