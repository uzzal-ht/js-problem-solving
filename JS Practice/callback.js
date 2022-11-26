async function main(){
    try {
        console.log("Bangladesh 1");

        // wait 2 seconds
        await new Promise((resolve)=> {
            setTimeout(()=> {
                resolve()
            }, 2000)
        })
        console.log("Bangladesh 2")
    

        // wait 3 seconds
        await new Promise((resolve)=> {
            setTimeout(()=> {
                resolve()
            }, 3000)
        })
        console.log("Bangladesh 3");
    }

    catch(err){
        console.log(err);
    }
}

main();

