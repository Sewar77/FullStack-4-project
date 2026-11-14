export const validate = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(
            req.body,
            { // error => id error happen
                //value => data had been read. 
                abortEarly: false,
                stripUnknown: true
            }
        )
        if (error) {
            return res.status(400).json({
                success: false,
                errors: error.details.map(err => err.message)
            })
        }
        //in case no error
        req.body = value
        next()
    }
}