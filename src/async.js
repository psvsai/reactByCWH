const data = async()=>{
    movie =  new Promise((resolve,reject)=>{
          setTimeout(()=>{
            const movie = true;
            if(movie){
                resolve("Movie is best way of enteriment");
            }else{
                reject(error,"Movie are take lots of time");
            }
          },1000);
    });
    try{
        const result = await movie;
        console.log(result)
    }catch(error){
        console.log("Error",error.meassage)
    }
}
data();