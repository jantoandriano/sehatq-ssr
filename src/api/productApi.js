import axios from "axios"

export default class productApi {
    constructor(url){
        this.url = url
    }

    async fetchProducts() {
        let res = await axios.get(this.url)
        
        return {
            data : {
                categories: res.data[0].data.category,
                products: res.data[0].data.productPromo
            }
        }
    }

}