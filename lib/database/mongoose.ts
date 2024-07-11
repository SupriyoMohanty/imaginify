//nextJS works in server less environment so state less, they start app to handle a request and stop after it so connection is not permanent with the database, so better scalability and reliability.

//server application has but 1 advantage that we have to connect only once and then we just pass the queries, routes 

//so we have to do optimization because therer would be too many MONGODB connections open required 

//so we woud rewwuire proper caching



import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
  cached = (global as any).mongoose = { 
    conn: null, promise: null 
  }
}

export const connectToDatabase = async () => {
  if(cached.conn) return cached.conn;

  if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise = 
    cached.promise || 
    mongoose.connect(MONGODB_URL, { 
      dbName: 'imaginify', bufferCommands: false  
      // if cached.conn not there so make using cached.promise and if promise also nnot there then make using mongoose.connect() 
    })

  cached.conn = await cached.promise;

  return cached.conn;
}