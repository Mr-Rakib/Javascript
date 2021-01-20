let value = undefined;
if (value == undefined) {
    //throw new Error("This is not a number");
} else {
    console.log("this is good");
}


try {
    AbortController();
}
catch (error) {
    let details = {
        status: this.status,
        origin: this.location.origin,
        location: this.location.href,
        message: error.message,
    }
    console.log(details);
}
finally {
    console.log("This will rull everytime")
}