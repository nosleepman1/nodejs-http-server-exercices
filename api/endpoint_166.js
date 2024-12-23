// Serveur HTTP Node / Endpoint #166
const http = require('http');

function handler_166(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify({ etape: 166, status: 'ok', message: 'Reponse API #166' }));
}
module.exports = { handler_166 };
