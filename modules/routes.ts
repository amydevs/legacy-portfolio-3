export const routes: Route[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Portfolio",
        path: "/portfolio",
    }
]

export interface Route {
    name: string,
    path: string
}