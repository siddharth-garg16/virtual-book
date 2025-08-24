import dotenv from "dotenv";
import APP from "./src/app";

dotenv.config();

const startServer = (): void => {
  const PORT = process.env.PORT || 3000;
  APP.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
  });
};

startServer();
