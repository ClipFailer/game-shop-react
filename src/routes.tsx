import {Route} from "./components/Router/Router";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {ProductPageAsync} from "./pages/ProductPage/ProductPage.async";
import {BasketPageAsync} from "./pages/BasketPage/BasketPage.async";

export const routes: Route[] = [
    { path: '/', element: <MainPageAsync/>},
    { path: '/products/:id', element: <ProductPageAsync/>},
    { path: '/basket', element: <BasketPageAsync/>}
]