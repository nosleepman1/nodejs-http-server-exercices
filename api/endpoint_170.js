// Serveur HTTP Node / Endpoint #170
const http = require('http');

function handler_170(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify({ etape: 170, status: 'ok', message: 'Reponse API #170' }));
}
module.exports = { handler_170 };
