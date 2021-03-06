console.log('\n\n\n##################################################');
console.log('Styling kit starting up ..');
console.log('--------------------------------------------------\n');

if (process.platform === 'linux') {
    var gnome = require('./gnome-theme');
    gnome.start('default');
}

var web = require('./web');
web.start('default');

console.log('\n--------------------------------------------------');
console.log('Styling kit is ready!');
console.log('##################################################\n\n\n');