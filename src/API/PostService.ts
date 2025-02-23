import {Product} from "../components/ProductItem/ProductItem";
import axios from "axios";

export default class PostService {
    static async getAllProducts(): Promise<Product[]>  {
        const response = await axios.get('http://localhost:3001/products');

        return response.data as Product[];
    }

    static async getProductByID(id: string): Promise<Product> {
        const response = await axios.get(`http://localhost:3001/products/?id=${id}`);

        return response.data[0] as Product;
    }

    static async getAddedProducts(idArray: number[]): Promise<Product[]> {
        const addedProducts: Product[] = []

        for (let i = 0; i < idArray.length; i++) {
            addedProducts.push(await this.getProductByID(`${idArray[i]}`));
        }

        console.log(addedProducts);
        return addedProducts;
    }
}