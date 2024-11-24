// import { Server } from 'http';
import app from './app';

import mongoose from 'mongoose';

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });
// let server : Server;


async function main() {
    try{
        await mongoose.connect(process.env.DATABASE_URL as string);
        app.listen(process.env.PORT, () => {
            console.log(`Example app listening on port ${process.env.PORT}`)
        })
    }catch(error){
        console.log(error)
    }
    
}

main();


// console.log(process.cwd())
