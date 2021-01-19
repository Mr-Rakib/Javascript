console.log("Promise function ");

function function1()
{
    return new Promise(function (resolve, reject)
    {
        setTimeout(() => {
            let error = false;
            if(!error){
                console.log("Function: successfully resolved") ;
                resolve();
            }else{
                console.log("Functon: not resolved");
                reject('Sorry this request failed !');
            }
        }, 2000);
    });
}

function1().then(function(){
    console.log("Thanks");
}).catch(function(error)
{
    console.log(error);
})