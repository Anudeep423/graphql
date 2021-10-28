const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const app = express();
const port = 8080;
const axios = require("axios");
 const typeDefs  =  require("./schema/typeDefs")
const {configuredAlertsData,
  notificationTypeGroupsData} = require("./data")

async function start() {
    var resolvers = {
        Query : {
          getConfiguredAlertsData : () => {
                return configuredAlertsData
            },
            getNotificationTypeGroupsData : () => {
              return notificationTypeGroupsData
            }
        }
    }


    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start()
    server.applyMiddleware({ app })
}

start();

app.listen(port, () => {
  console.log(`server started running on port ${port}`)
})