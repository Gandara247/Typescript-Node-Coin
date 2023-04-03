import axios, {Axios} from "axios";
import { Coin } from "../interfaces/coin";

export const coinApi: Axios = axios.create({
    baseURL: "http://api.coingecko.com/api/v3"
});

export const criptoMoedasDisponiveis:Coin[] = [
    {id: "bitcoin", simbolo: "btc", nome: "Bitcoin"},
    {id: "ethereum", simbolo: "eth", nome: "Ethereum"},
    {id: "dogecoin", simbolo: "doge", nome: "Dogecoin"},
]