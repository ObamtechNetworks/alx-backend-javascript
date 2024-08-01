// task_3/js/crud.js

/**
 * Inserts a row into the database (simulated).
 * @param {Object} row - The row data to insert.
 * @returns {number} - A simulated row ID.
 */
export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * 1000); // Simulate row ID
}

/**
 * Deletes a row from the database (simulated).
 * @param {number} rowId - The ID of the row to delete.
 */
export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
}

/**
 * Updates a row in the database (simulated).
 * @param {number} rowId - The ID of the row to update.
 * @param {Object} row - The new row data.
 * @returns {number} - The updated row ID.
 */
export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);
    return rowId; // Simulate returning the updated row ID
}
