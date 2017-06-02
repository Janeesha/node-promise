

function callback(val,err){

	return new Promise(function(resolve,reject){
           if(val){
           	resolve(val)
           }
           reject(err); 
})
}

callback(1,"err")
.then(function(data){
	console.log(data)
})
.catch(function(err){
	console.log("this is err block")
})
// function getData(val,err){
// 	return new Promise(function(resolve,reject){
          // if(err){
           //	reject(err)
          // }
          // resolve(val); 
// 	})
// } 

// getData(1).then(function(data){
//         console.log(data)
// })