import { Invoice } from "../models"
import { create } from "domain";

const InvoiceController = {
    findAll: async function () {
        return await Invoice.findAll()
    },
    create: async function (value,date,description){
        try {
            const res = await Invoice.create({
                value: value,
                date: date,
                description: description
            })
            return { status: 200, data: res }
        }
        catch(Error){
            return { status: 500, message: Error}
        }
    }
}

export default InvoiceController