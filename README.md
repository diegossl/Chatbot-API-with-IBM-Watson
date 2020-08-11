# API for virtual wine harmonizer with IBM Watson

This API integrates with the IBM Watson Assistant system to use the virtual wine harmonization assistant. The assistant analyzes the user's wine and food orders and responds with the appropriate wine or food options.

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
