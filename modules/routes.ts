export const routes: Route[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Portfolio",
        path: "/portfolio",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Radio",
        path: "/radio",
    }
]

export interface Route {
    name: string,
    path: string
}