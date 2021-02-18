import { Imedia } from "../../types/Istyle";

export const breakpoints:Imedia = {
    sm: 25.39,
    md: 30,
    lg: 48,
}  

export const mediaQueries = (key: keyof typeof breakpoints) => {
    return (styled: TemplateStringsArray | String) => `@media (min-width: ${breakpoints[key]}rem) {${styled}}`
}