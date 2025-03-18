import { createBrowserRouter } from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import MainLayout from "../pages/MainLayout";
import NotFound from "../pages/NotFound";
import AdminPage from "../pages/AdminPage";
import BookingLayOut from "../pages/BookingLayout";
import AdminLayout from "../pages/AdminLayout";
import MenuPage from "../pages/MenuPage";
import { BookingProvider } from "../context/BookingContext";


export const r = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/kontakt",
                element: <ContactPage />,
            },
            {
                path: "/meny",
                element: <MenuPage />
            }
        ]

    },
    {
        path: "/boka",
        element: <BookingLayOut />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/boka",
                element:
                    <BookingProvider>
                        <BookingPage />
                    </BookingProvider>

            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/admin",
                element:
                    <BookingProvider>
                        <AdminPage />
                    </BookingProvider>
            }
        ]
    }

])