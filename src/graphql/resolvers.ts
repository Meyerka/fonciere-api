const Sale = require("../models/Sale")

type Saletype = {
    typeOfItem: string, 
    price: number, 
    Location: string
}

module.exports = {
    Query: {
        sales: async () => {
            try {
            const salesFetched = await Sale.find()
            return salesFetched.map((sale: { _doc: any; id: any }) => {
                return {
                ...sale._doc,
                _id: sale.id,
                }
            })
            } catch (error) {
            throw error
            }
        },
    },
    Mutation: {
        createSale: async (sale: Saletype) => {
            try {
            const newSale = new Sale({sale})
            const savedSale = await newSale.save()
            return { savedSale }
            } catch (error) {
            throw error
            }
        },
    }
}