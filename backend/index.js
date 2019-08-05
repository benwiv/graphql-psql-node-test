import express from 'express';
import bodyParser from 'bodyParser';
import { graphqlExpress } from 'graphql-server-express';


const app = express();

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(
    { schema: myGraphQLSchema }
  )
);


const PORT = 3001;
app.listen(PORT;)