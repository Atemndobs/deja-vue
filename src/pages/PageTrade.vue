<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Reading data from Binance Websocket</div>
        <div class="text-subtitle2">Data from binance</div>
        <q-btn label="SendMessage" @click="sendMessage('ATEM')"/>
      </q-card-section>

      <q-markup-table>
        <thead>
        <tr>
          <th class="text-left">Event Type</th>
          <th class="text-right">Event time</th>
          <th class="text-right">Symbol</th>
        </tr>

        <tr>
          <th class="text-left"> {{eventType}} </th>
          <th class="text-left"> {{eventTime}} </th>
          <th class="text-left"> {{symbol}} </th>
        </tr>
        </thead>
        <tr class="text-h6 text-right">   Klein</tr>

        <tbody>
        <tr>
          <th class="text-left">Kline start time</th>
          <th class="text-right">Kline close time</th>
          <th class="text-right">Symbol</th>
          <th class="text-right">Interval</th>
          <th class="text-right">Open price</th>
          <th class="text-right">Close price</th>
        </tr>

        <tr>
          <th class="text-left">{{klein.t}}</th>
          <th class="text-right">{{klein.T}}</th>
          <th class="text-right">{{klein.s}}</th>
          <th class="text-right">{{klein.i}}</th>
          <th class="text-right">{{klein.o}}</th>
          <th class="text-right">{{klein.c}}</th>
        </tr>
        <tr>
          <th class="text-left">High price</th>
          <th class="text-left">Low price</th>
          <th class="text-right">Base asset volume</th>
          <th class="text-right">Number of trades</th>
          <th class="text-right">Is this kline closed?</th>
          <th class="text-right">Quote asset volume</th>
        </tr>

        <tr>
          <th class="text-left text-teal ">{{klein.h}}</th>
          <th class="text-right">{{klein.l}}</th>
          <th class="text-right">{{klein.v}}</th>
          <th class="text-right">{{klein.n}}</th>
          <th class="text-right">{{klein.x}}</th>
          <th class="text-right ">{{klein.Q}}</th>
        </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<script>


export default {
  name: "PageTrade",
  data: function() {
    return {
      connection: null,
      eventType:'ATEM',
      eventTime:'LONG RUN',
      interval:'',
      symbol:'SYMBOL',
      klein:{}
    }
  },
  methods: {

    sendMessage(message){
      console.log("Hello")
      console.log(this.connection);
      this.connection.send(message);
    },

    getTicker(){
      this.connection.onmessage = (event) =>  {
        let result  = JSON.parse(event.data)
        this.eventType = result.e
        this.eventTime = result.E
        this.symbol = result.s
        this.klein = result.k
      }
    }
  },
  created: function() {
    console.log("Starting connection to WebSocket Server")
   // this.connection = new WebSocket("wss://echo.websocket.org")
    this.connection = new WebSocket("wss://stream.binance.com:9443/ws/adaeur@kline_1m")

    this.connection.onopen = function(event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }

    this.connection.onclose = (event) => {
      console.log(event)
    }

  },
  mounted() {
    this.getTicker()
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
