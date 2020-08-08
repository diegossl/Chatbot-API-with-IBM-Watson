# API for Chat with IBM Watson

Chatbot is a computer program that tries to simulate a human being in conversation with people. The goal is to answer questions in such a way that people feel as if they are talking to someone else rather than a computer program.

Watson Assistant is a chat AI platform that helps provide customers with quick, direct and accurate answers to their questions, in any application, device or channel. By addressing common customer questions, Watson Assistant reduces the cost of interactions with customers, helping their agents to focus on complex use cases - not repetitive responses.

This API integrates with the IBM Watson Assistant system for a simple conversation of the daily life of an ordinary person such as greeting, daily activities, work, studies, etc.

## Setup

To execute the project, it will be necessary to install the dependencies by typing the following command in the terminal:

```bash
npm install
```

Then create a file called **.env** and copy the contents of the file **.env.example**, which already exists in the project.

Credentials can be obtained from the following website:

[https://cloud.ibm.com](https://cloud.ibm.com/login)


Finally, type the following command in the terminal to start the server:

```bash
npm start
```

The system is ready to be used on the route:

**POST** [http://localhost:3333/message](http://localhost:3333/message)

## Example of data entry:

A JSON object containing a phrase.
 
```javascript
{
  "text": "Qual vinho combina mais com carnes de caça?"
}
```

**Example sentences:**

- Qual vinho combina mais com carnes de caça?
- Qual vinho é adequado para bacalhau?
- Preciso de um vinho para combinar com peixe.
- Pretendo servir queijo branco como aperitivo. Qual é o vinho que melhor combina - com este queijo?
- Eu quero uma sugestão de vinho branco para acompanhar com carne vermelha.
- Tenho um vinho tinto francês Les Violettes. Que prato você sugere que eu devo -  fazer para acompanhar este vinho?
- Tenho um vinho chileno Rosé Céfiro. Que prato eu devo preparar?
- Vou dar um jantar em casa. Qual vinho devo comprar?
- Vou servir uma massa no almoço. Qual é o vinho que melhor combina?
- Pretendo servir queijo como aperitivo. Qual é o vinho que melhor combina?
- Tenho um vinho tinto, que prato preparar?

## License

MIT
