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

export const getRows = async (tableId, queries = []) => {
  const response = await tablesDB.listRows({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: tableId,
    queries: queries,
  });
  return response;
};