import mongoose from "mongoose"

const Connection = async(username,password) => {
    const URL = `mongodb+srv://${username}:${password}@bloggingshuru.zregy5e.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useNewUrlParser:true});
        console.log('db connected succesfulllly');
    }catch(error){
        console.log('Error while connecting',error);
    }
} 

export default Connection;