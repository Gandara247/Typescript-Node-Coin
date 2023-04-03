# TypeScript-Node-Coin

# Conversor de Criptomoedas

Este é um projeto simples em TypeScript que permite a conversão de valores entre diferentes criptomoedas utilizando a API de criptomoedas CoinGenko.

## Como usar

1. Clone este repositório
2. Instale as dependências com `npm install`
3. Execute o código com `npm run dev`
4. Siga as instruções na tela para realizar a conversão desejada

## Rotas

/get-coins → retorna todas as criptomoedas disponíveis para fazer conversão. ATENÇÃO: esta rota é MUITO pesada. Demora bastante para renderizar o resultado, devido ao próprio serviço de API escolhido para este material.
/converter-moeda/:criptomoeda/:moeda? → nesta rota acontece a conversão de moedas! O primeiro parâmetro, criptomoeda, é obrigatório, porém o parâmetro moeda é opcional. Quando não é informado na URL, serão exibidos os preços da criptomoeda convertida em cada uma das moedas disponíveis. Exemplo de chamada em um ambiente localhost: http://localhost:3000/converter-moeda/btc/brl.

## OBS

 foram limitadas as seguintes criptomoedas para conversão: bitcoin, ethereum, dogecoin. Isto pode ser alterado no arquivo src/services/coinApi.ts.

