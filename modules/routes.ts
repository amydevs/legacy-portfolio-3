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
    }
]

export interface Route {
    name: string,
    path: string
}