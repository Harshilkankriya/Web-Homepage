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
            // Fix "Karo Pitch" text to "KaroStartup"
            .replace(/Karo Pitch/g, 'KaroStartup')
            // Special gradient text replacement for main emphasis
            .replace(/text-brand-green(?=\s+italic)/g, 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600')
            .replace(/text-brand-green-dark/g, 'text-purple-900')
            .replace(/text-brand-green/g, 'text-red-500')

            // Background replacements
            .replace(/bg-brand-green-light/g, 'bg-red-50')
            .replace(/bg-brand-green-dark/g, 'bg-purple-950')
            // Handles bg-brand-green/10 -> bg-red-500/10
            .replace(/bg-brand-green(?=\/\d+)/g, 'bg-red-500')
            // Handles solid bg-brand-green -> gradient
            .replace(/bg-brand-green(?=[^a-zA-Z0-9-]?)/g, 'bg-gradient-to-r from-red-500 to-purple-600')

            // Borders
            .replace(/border-brand-green-light/g, 'border-red-100')
            .replace(/border-brand-green(?=\/)/g, 'border-red-500')
            .replace(/border-brand-green(?=[^a-zA-Z0-9-]?)/g, 'border-red-500')

            // Shadows - convert green rgba to red rgba
            .replace(/rgba\(22,163,74,/g, 'rgba(239,68,68,')

            // Hover states
            .replace(/hover:bg-green-50/g, 'hover:bg-red-50')
            .replace(/hover:bg-green-700/g, 'hover:opacity-90')
            .replace(/hover:text-green-800/g, 'hover:text-purple-800')
            .replace(/hover:text-green-700/g, 'hover:text-red-600')
            .replace(/hover:text-brand-green/g, 'hover:text-red-500')

            // Other green references
            .replace(/bg-green-50(?=\/|\s|")/g, 'bg-red-50')
            .replace(/bg-green-100(?=\/|\s|")/g, 'bg-red-100')
            .replace(/bg-green-200(?=\/|\s|")/g, 'bg-red-200')
            .replace(/bg-green-600(?=\/|\s|")/g, 'bg-red-500')
            .replace(/bg-green-700(?=\/|\s|")/g, 'bg-red-600') // if not covered
            .replace(/bg-green-800(?=\/|\s|")/g, 'bg-purple-800')
            .replace(/bg-emerald-600(?=\/|\s|")/g, 'bg-purple-600')
            .replace(/bg-teal-600(?=\/|\s|")/g, 'bg-purple-700')
            .replace(/bg-teal-700(?=\/|\s|")/g, 'bg-purple-700')
            .replace(/bg-emerald-50(?=\/|\s|")/g, 'bg-purple-50')
            .replace(/bg-emerald-900(?=\/|\s|")/g, 'bg-purple-900')

            .replace(/text-green-50(?=\/|\s|")/g, 'text-red-50')
            .replace(/text-green-100(?=\/|\s|")/g, 'text-red-100')
            .replace(/text-green-800(?=\/|\s|")/g, 'text-purple-800')
            .replace(/text-green-600(?=\/|\s|")/g, 'text-red-600')
            .replace(/text-emerald-600(?=\/|\s|")/g, 'text-purple-600')
            .replace(/text-amber-600(?=\/|\s|")/g, 'text-orange-500')

            .replace(/border-green-200(?=\/|\s|")/g, 'border-red-200')
            .replace(/border-emerald-100(?=\/|\s|")/g, 'border-purple-100')
            .replace(/border-emerald-200(?=\/|\s|")/g, 'border-purple-200')

            // Fix double replaces if accidentally matched
            .replace(/bg-gradient-to-r from-red-500 to-purple-600-light/g, 'bg-red-50')
            .replace(/bg-gradient-to-r from-red-500 to-purple-600-dark/g, 'bg-purple-950')
            .replace(/text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600-dark/g, 'text-purple-900');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf-8');
            console.log("Updated", filePath);
        }
    }
});
