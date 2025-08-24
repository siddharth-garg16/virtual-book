import APP from "./src/app";
import { config } from "./src/config/config";

const startServer = (): void => {
  const PORT = config.port || 3000;
  APP.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
  });
};

startServer();
