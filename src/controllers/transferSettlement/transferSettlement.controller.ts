import { Request, Response } from "express";

export class TransferSettlementController {
  public static async inboundTransfer(req: Request, res: Response) {
    try {
      const trasnsfer = req.body;

      if (!trasnsfer) {
        setTimeout(() => {
          return res.status(200).json({
            ok: true,
            message: "Não foi possivel realizar a operação!",
          });
        }, 1000);
      }

      if (trasnsfer) {
        setTimeout(() => {
          return res.status(200).json({
            ok: true,
            message: "Operação realizada com sucesso!",
          });
        }, 1000);
      }
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
          (err as Error).message
        }`,
      });
    }
  }
}
