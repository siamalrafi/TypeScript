/* type noobDev = {
    name: string
}

// type juniorDev = {
//     name: string,
//     skills: string[],
//     experience: number
// }


// intersection type --
type juniorDev = noobDev & {
    skills: string[],
    experience: number
}

// union type --
const newDev: noobDev & juniorDev = {
    name: 'NoobDev',
    skills: ['HTML', 'CSS', 'JavaScript'],
    experience: 100
}



const fun1 = (name: string | 4): number | string => {

    return name
}

console.log(fun1(4)) */