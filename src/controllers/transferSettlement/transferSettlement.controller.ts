import { Request, Response } from "express";

export class TransferSettlementController {
  public static async inboundTransfer(req: Request, res: Response) {
    try {
      const transfer = req.body;

      if (!transfer || Object.keys(transfer).length === 0) {
        return res.status(400).json({
          ok: false,
          message: "Não foi possivel realizar a operação!",
        });
      }

      return res.status(200).json({
        ok: true,
        message: "Operação realizada com sucesso!",
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
          (err as Error).message
        }`,
      });
    }
  }

  public static async outboundTransfer(req: Request, res: Response) {
    try {
      const transfer = req.body;

      if (!transfer || Object.keys(transfer).length === 0) {
        return res.status(200).json({
          ok: true,
          message: "Não foi possivel realizar a operação!",
        });
      }

      return res.status(200).json({
        ok: true,
        message: "Operação realizada com sucesso!",
      });
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
