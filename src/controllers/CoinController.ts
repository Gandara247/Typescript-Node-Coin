import { Request, Response } from "express";
import { Coin } from "../interfaces/coin";
import { criptoMoedasDisponiveis, coinApi } from "../services/coinApi";

class CoinController {
    static async getAvailableCoins(req: Request, res: Response) {
        const { data } = await coinApi.get("/coins/list");

        return res
            .status(200)
            .json({ sucess: true, msg: "Coin recovered sucessfully!", data });
    }

    static async convertCoin(req: Request, res: Response) {
        let criptoMoeda: string = req.params.criptomoeda;
        let moeda: string = req.params.moeda;

        const filtroCriptoMoedaDisponiveis: Coin[] = criptoMoedasDisponiveis.filter(
            (x) => x.simbolo == criptoMoeda.toLocaleLowerCase()
        );
        if (filtroCriptoMoedaDisponiveis.length == 0) {
            const mapeamentoCriptoMoedasDisponiveis = criptoMoedasDisponiveis
                .map((coin) => coin.simbolo)
                .join(",");

            return res
                .status(400)
                .json({
                    sucess: false,
                    msg: `Falha! a criptomoeda informada não é válida! Valores aceitos: ${mapeamentoCriptoMoedasDisponiveis}`,
                });
        } else {
            criptoMoeda = criptoMoedasDisponiveis[0].id
        }
        let moedasDisponiveis: string[] = [];
        await coinApi.get("/simple/supported_vs_currencies")
            .then(({ data }) => {
                moedasDisponiveis = data;
            });
        if (filtroCriptoMoedaDisponiveis.length == 0) {
            const mapeamentoMoedasDisponiveis = moedasDisponiveis
                .join(",");

            return res
                .status(400)
                .json({
                    sucess: false,
                    msg: `Falha! A moeda informada não é válida! valores aceitos: ${mapeamentoMoedasDisponiveis}`,
                });


        } else {
            moeda = moedasDisponiveis.join(",");

        }
        const { data } = await coinApi.get(`/simple/price?ids=${criptoMoeda}&vs_currencies=${moeda}`);
        return res
            .status(200)
            .json({
                sucess: true,
                msg: "Sucesso!",
                data
            });
    }

}

export default CoinController