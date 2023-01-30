
import connection from './demoConnection'
import { Schema } from 'mongoose'

const modelName = 'demodata'

const demoSchema = new Schema({
    name: String,
    num: Number,
    bool: Boolean
})
const model = connection.model(modelName, demoSchema)

export default model 