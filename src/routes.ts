import express  from "express";
import CoinController from "./controllers/CoinController";

const router = express.Router();

router.get("/get-coins", CoinController.getAvailableCoins)
router.get("/converter-moeda/:criptomoeda/:moeda?", CoinController.convertCoin);

export = router;