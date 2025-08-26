import APP from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";

const startServer = async (): Promise<any> => {
  await connectDB();

  const PORT = config.port || 3000;

  APP.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
  });
};

startServer();
