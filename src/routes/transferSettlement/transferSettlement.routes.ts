import { Router } from "express";
import { TransferSettlementController } from "../../controllers/transferSettlement/transferSettlement.controller";


export class TransferSettlementRoutes {
    public static execute(): Router {
        const router = Router();

        router.post("/inbound",TransferSettlementController.inboundTransfer)
        router.post("/outbound",TransferSettlementController.outboundTransfer)

        return router
    }
}