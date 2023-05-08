// alphaneumerical types --

/* type typescheck = string | number;
function addFun1(param1: typescheck, param2: typescheck) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}

console.log(addFun1(4, 4));
console.log(addFun1("4", "4")); */



// in Guards 

type normalType = {
    name: string,
}
type adminType = {
    name: string,
    status: string,
}

function getUser(user: normalType | adminType) {
    if ("status" in user) {
        return "I'm a admin."
    }
    else {
        return "I'm a normal user."
    }
}



const normalUser: normalType = { name: "Rana" };
const adminUser: adminType = { name: "Rana", status: "active" };


console.log(getUser(normalUser));
console.log(getUser(adminUser));