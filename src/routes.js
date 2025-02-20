
import {HomeAsync} from "./pages/Home/Home.async";
import {BasketAsync} from "./pages/Basket/Basket.async";
import {ProductPageAsync} from "./pages/ProductPage/ProductPage.async";
import {ProfilePageAsync} from "./pages/ProfilePage/ProfilePage.async";

export const publicRoutes = [
    {path: '/', element: <HomeAsync/>, exact: true},
    {path: '/basket', element: <BasketAsync/>, exact: true},
    {path: '/products/:id', element: <ProductPageAsync/>, exact: true},
    {path: '/profile', element: <ProfilePageAsync/>, exact: true},
    {path: '*', element: <HomeAsync/>, exact: true},
]

// export const privateRoutes = [
//     {path: '/', element: <Home/>, exact: true},
//     {path: '/basket', element: <Basket/>, exact: true},
//     {path: '/products/:id', element: <ProductPage/>, exact: true},
//     {path: '/profile/:id', element: <UserProfile/>, exact: true},
//     {path: '*', element: <Home/>, exact: true},
// ]