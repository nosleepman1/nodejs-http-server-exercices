// Serveur HTTP Node / Endpoint #171
const http = require('http');

function handler_171(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify({ etape: 171, status: 'ok', message: 'Reponse API #171' }));
}
module.exports = { handler_171 };
