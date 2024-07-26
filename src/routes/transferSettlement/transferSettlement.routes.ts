import { Router } from "express";
import { TransferSettlementController } from "../../controllers/transferSettlement/transferSettlement.controller";


export class TransferSettlementRoutes {
    public static execute(): Router {
        const router = Router();


        router.post("/",TransferSettlementController.inboundTransfer)

        return router
    }
}