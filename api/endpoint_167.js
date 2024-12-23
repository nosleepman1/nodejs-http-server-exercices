// Serveur HTTP Node / Endpoint #167
const http = require('http');

function handler_167(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify({ etape: 167, status: 'ok', message: 'Reponse API #167' }));
}
module.exports = { handler_167 };
