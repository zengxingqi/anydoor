const path = require('path');
const mimeTypes = {
    'css': 'text/css; charset=utf-8',
    'gif': 'image/gif',
    'html': 'text/html; charset=utf-8',
    'ico': 'image/x-icon',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'js': 'text/javascript; charset=utf-8',
    'json': 'application/json; charset=utf-8',
    'pdf': 'application/pdf',
    'png': 'image/png',
    'svg': 'image/svg+xml',
    'swf': 'application/x-shockwave-flash',
    'tiff': 'image/tiff',
    'txt': 'text/plain; charset=utf-8',
    'wav': 'audio/x-wav',
    'wma': 'audio/x-ms-wma',
    'wmv': 'video/x-ms-wmv',
    'xml': 'text/xml; charset=utf-8',
};
module.exports = (filePath) => {
    let ext = path.extname(filePath).split('.').pop().toLowerCase();

    if (!ext) {
        ext = filePath;
    }
    return mimeTypes[ext] || mimeTypes['txt'];
};

