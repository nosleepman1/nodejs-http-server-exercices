// Serveur HTTP Node / Endpoint #172
const http = require('http');

function handler_172(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify({ etape: 172, status: 'ok', message: 'Reponse API #172' }));
}
module.exports = { handler_172 };
