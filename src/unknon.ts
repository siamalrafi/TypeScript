const searchName = (value: string | null | "name") => {
    if (value === null) {
        console.log("there is no search");
    }
    else {
        console.log("Searching: " + value);
    }
};

// searchName(null)

/* const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600
        console.log(convertedSpeed);
    } if (typeof speed === "string") {
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseFloat(value) * 1000) / 3600
        console.log(convertedSpeed);
    }
    else {
        console.log("Not valid speed types");
    }
}

getMyCarSpeed(10)
getMyCarSpeed("10 kmh^-1")
getMyCarSpeed(true) */



function throError(message: string): never {
    console.log("Not implemented");
    throw new Error("Not implemented")
}

throError("error")