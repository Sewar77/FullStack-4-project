//crud operation products

import pool from "../config/db.js"

export const createProduct = async ({ name, description, price, stock, image_url, category_id, created_by }) => {
    const result = await pool.query(`
        insert into products (name, description, price, stock, image_url, category_id, created_by)
         values ($1, $2, $3, $4, $5, $6, $7) returning *
        `, [name, description, price, stock, image_url, category_id, created_by])
    return result.rows[0] // the last row 
}
export const getAllProducts = async () => {
    const result = await pool.query(`
        select * from products
        `)
    return result.rows //all rows
}

export const getProductById = async (id) => {
    const result = await pool.query(
        `select * from products where id=$1`, [id]
    )
    return result.rows[0] // only one row
}

// 



