import { Invoice } from "../models"

const InvoiceController = {
    findAll: async function () {
        return await Invoice.findAll()
    },
    create: async function (inv){
        try {
            const res = await Invoice.create(inv)
            return { status: 200, data: res }
        }
        catch(e){
            return { status: 500, message: e}
        }
    }
}

export default InvoiceController