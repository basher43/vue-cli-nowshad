import Hello from "../components/Hello";
import Test from "../components/Test";
export default [
    {
        path:"/hello/:id",
        component:Hello
    },
    {
        path: "/test/:id",
        component: Test
    }
]