import express from "express";
import cors from "cors";
import "dotenv/config";
import { TransferSettlementRoutes } from "./routes/transferSettlement/transferSettlement.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/inbound", TransferSettlementRoutes.execute());

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
