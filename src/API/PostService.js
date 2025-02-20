import axios from "axios";

export default class PostService {
    static async getAllProducts() {
        try {
            const response = await axios.get('http://localhost:3001/products');
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async getProductById(id) {
        try {
            const response = await axios.get(`http://localhost:3001/products?id=${id}`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async getProductsById(idArray) {
        try {
            const products = [];
            for (const id of idArray) {
                const response = await axios.get(`http://localhost:3001/products/?id=${id}`);
                products.push(response.data[0]);
            }
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

