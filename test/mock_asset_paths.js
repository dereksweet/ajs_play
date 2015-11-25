var glob = require('glob-fs')();
var fs = require('fs');
var templates = glob.readdirSync('app/assets/templates/**/*');

global.asset_paths = { };

for (index in templates) {
  template = templates[index];
  if(fs.lstatSync(template).isFile()) {
    trimmed_template = template.replace('app/assets/templates/', '');
    asset_paths[trimmed_template] = trimmed_template;
  }
}
