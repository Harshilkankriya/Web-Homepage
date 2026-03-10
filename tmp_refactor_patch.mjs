import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('d:/Projects/Demo/client/src', function (filePath) {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let newContent = content
            .replace(/bg-emerald-600/g, 'bg-purple-600')
            .replace(/bg-teal-600/g, 'bg-purple-700')
            .replace(/bg-teal-700/g, 'bg-purple-700')
            .replace(/bg-emerald-50/g, 'bg-purple-50')
            .replace(/bg-emerald-900/g, 'bg-purple-900')
            .replace(/bg-green-800/g, 'bg-purple-800')
            .replace(/bg-green-700/g, 'opacity-90')
            .replace(/text-emerald-600/g, 'text-purple-600')
            .replace(/border-emerald-100/g, 'border-purple-100')
            .replace(/bg-green-100/g, 'bg-red-100')
            .replace(/text-green-600/g, 'text-red-600')
            .replace(/text-green-100/g, 'text-red-100');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf-8');
            console.log("Updated", filePath);
        }
    }
});
