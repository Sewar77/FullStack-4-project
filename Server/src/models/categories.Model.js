import pool from "../config/db.js"
export const createCategory = async ({ name, description, status = "approved" }) => {
    const result = await pool.query(`
        insert into categories (name,status, description)
         values ($1, $2, $3) returning *
        `, [name, status, description])
    return result.rows[0] // return only one row (the last), the row that has been inserted!
}
export const getAllCategories = async () => {
    const result = await pool.query(`
        select * from categories
        `)
    return result.rows // all the sxisted rows!
}
export const getCategoryById = async (id) => {
    const result = await pool.query(`
        selct * from categories where id=$1 
        `, [id])
    // sql injection
    return result.rows[0]  // return only one! = {} 
}
export const getCategoryByName = async (name) => {
    const result = await pool.query(`
        selct * from categories where name=$1 
        `, [name])
    return result.rows[0]
}

export const deleteCategory = async (id) => {
    const result = await pool.query(`
        delete from categories where id=$1 returning *
        `, [id])
    return result.rows[0]
}

export const updateCategory = async (id, name, description) => {
    const result = await pool.query(`
        update categories set name=$1, description=$2 where id=$3 returning *
        `, [name, description, id])
    return result.rows[0]
}

// model where only db runs,
// no logic, no validation, no everyhitng!
// talk to db and get result!