const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PAGES_PORT || 8082);
const ROOT = process.env.PAGES_ROOT || path.join(__dirname, 'docs');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
};

function send(res, status, body, contentType) {
  res.writeHead(status, {
    'Content-Type': contentType,
    'Cache-Control': 'no-cache',
  });
  res.end(body);
}

function safeResolve(publicPath) {
  const decoded = decodeURIComponent(publicPath || '/');
  const rel = decoded.startsWith('/') ? decoded.slice(1) : decoded;
  const file = path.resolve(ROOT, rel);
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) return null;
  return file;
}

function findFile(publicPath) {
  let file = safeResolve(publicPath);
  if (!file) return null;

  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    file = path.join(file, 'index.html');
  }

  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    return file;
  }

  if (!path.extname(file)) {
    const withHtml = file + '.html';
    if (fs.existsSync(withHtml)) return withHtml;
  }

  return null;
}

const server = http.createServer((req, res) => {
  try {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return send(res, 405, 'Method Not Allowed', 'text/plain; charset=utf-8');
    }

    const raw = req.url.split('?')[0];
    const file = findFile(raw);

    if (!file) {
      return send(res, 404, '404 - Não encontrado', 'text/html; charset=utf-8');
    }

    const ext = path.extname(file).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';
    const body = fs.readFileSync(file);
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': body.length,
      'Cache-Control': 'no-cache',
    });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch (e) {
    if (!res.headersSent) {
      send(res, 500, '500 - Erro interno', 'text/plain; charset=utf-8');
    } else {
      res.end();
    }
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`favdate-pages server ON em http://127.0.0.1:${PORT} (root: ${ROOT})`);
});