import mongoose from "mongodb";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`mongodb connected ${conn}`.cyan.underline);
  } catch (error) {
    console.log(`error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
