import mongoose from 'mongoose';
import {config} from 'dotenv';
config(); // load environmental variables


export default async () => mongoose.connect(process.env.DATABASE_URI)
.then(res => console.log(`Database connected successfully`))
.catch(err => console.log(`Database Connection failed: ${err}`))