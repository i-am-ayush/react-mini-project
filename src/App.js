import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";


// Chunking
// Code Splitting
// Dynamic Building
// Lazy Loading
// on demand loading
// dynamic import

const Instamart = lazy(() => import("./components/Instamart"))
// first time it will give error because it takes sometime to load and react will render before waiting
// in that case we should use suspense

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <div className = "position: fixed bottom-0 w-[100%] bg-pink-50 border-t-2 border-solid;">
            <Footer />
            </div>
        </>
    )
}

// This is basic router in which we font find header footer in about page
// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout/>,
//         errorElement: <Error/>
//     },
//     {
//         path: "/about",
//         element: <About/>
//     },

// ])

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about", // parent path is /about now
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (<Suspense fallback={<Shimmer/>}>
                    <Instamart />
                </Suspense>
                )
            },

        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
