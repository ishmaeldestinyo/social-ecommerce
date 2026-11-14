import mongoose from 'mongoose';
import {config} from 'dotenv';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

config(); // load environmental variables


export default async () => mongoose.connect(process.env.DATABASE_URI)
.then(res => console.log(`Database connected successfully`));
