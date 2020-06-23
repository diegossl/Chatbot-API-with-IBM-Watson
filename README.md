# API para Chatbot de conversação com o IBM Watson

Chatbot é um programa de computador que tenta simular um ser humano na conversação com as pessoas. O objetivo é responder as perguntas de tal forma que as pessoas tenham a impressão de estar conversando com outra pessoa e não com um programa de computador.

O Watson Assistant é uma plataforma de IA de conversação que ajuda a fornecer aos clientes respostas rápidas, diretas e precisas às suas perguntas, em qualquer aplicativo, dispositivo ou canal. Ao abordar perguntas comuns dos clientes, o Watson Assistant reduz o custo das interações com os clientes, ajudando seus agentes a se concentrarem em casos de uso complexos - e não em respostas repetitivas.

Esta API faz a integração com o sistema do IBM Watson Assistant para uma conversação simples do dia-a-dia de uma pessoa comum como saudação, atividades diárias, trabalho, estudos, etc.

## Setup

Para executar o projeto, será necessário instalar as dependências digitando o seguinte comando no terminal:

```bash
npm install
```

Em seguida, crie um arquivo chamado **.env** e copie para ele o conteúdo do arquivo **.env.exemple**, que já existe no projeto. Então digite o seguinte comando no terminal:

Por fim, digite o seguinte comando no terminal para iniciar o servidor:

```bash
npm start
```

O sistema está pronto para ser usado na rota:

[http://localhost:3333/message](http://localhost:3333/message)

## Exemplo de entrada de dados:

Um objeto JSON contendo uma frase.
 
```javascript
{
  "text": "Olá, como está?"
}
```
## Exemplo de saída de dados:

```javascript
{
  "generic": [
    {
      "response_type": "text",
      "text": "Olá"
    }
  ]
}
```
## Licença

MIT