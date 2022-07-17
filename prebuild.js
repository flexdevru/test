var fs = require('fs');
var path = require('path');

var target = './src/utils/CompilationParams.ts';
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getUTCDate();
var hours = date.getUTCHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
if (day < 10) day = '0' + day;
if (month < 10) month = '0' + month;
if (hours == 0) hours = '00';
else if (hours < 10) hours = '0' + hours;
if (minutes == 0) minutes = '00';
else if (minutes < 10) minutes = '0' + minutes;
if (seconds == 0) seconds = '00';
else if (seconds < 10) seconds = '0' + seconds;
var res = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds + ' UTC';
res = 'export class CompilationParams { public static COMPILATION_DATE: string = "' + res + '"; }';
fs.writeFileSync(target, res);

/*
//----- images ------

const images_folder = './data/images/';
target = './configs/images.json';

var tmp = images_folder.split('/').join('\\').substr(2);
var res = {};

function fileList(dir)
{
  return fs.readdirSync(dir).reduce(function (list, file)
  {
    var name = path.join(dir, file);
    var isDir = fs.statSync(name).isDirectory();
    return list.concat(isDir ? fileList(name) : [name]);
  }, []);
}

var list = fileList(images_folder);

for (var i = 0; i < list.length; i++)
{ 
  var file_path = list[i].split(tmp)[1];

  let index = file_path.lastIndexOf('\\');
  file_name = file_path.substr(index + 1);

  index = file_name.lastIndexOf('.');
  file_name = file_name.substr(0, index);

  res[file_name] = file_path.split('\\').join('/');

}

fs.writeFileSync(target, JSON.stringify(res));

//----- images ------

const sounds_folder = './data/sounds/';
target = './configs/sounds.json';

var tmp = sounds_folder.split('/').join('\\').substr(2);
var res = {};

function fileList(dir)
{
  return fs.readdirSync(dir).reduce(function (list, file)
  {
    var name = path.join(dir, file);
    var isDir = fs.statSync(name).isDirectory();
    return list.concat(isDir ? fileList(name) : [name]);
  }, []);
}

var list = fileList(sounds_folder);

for (var i = 0; i < list.length; i++)
{
  var file_path = list[i].split(tmp)[1];

  let index = file_path.lastIndexOf('\\');
  file_name = file_path.substr(index + 1);

  index = file_name.lastIndexOf('.');
  file_name = file_name.substr(0, index);

  res[file_name] = file_path.split('\\').join('/');

}

fs.writeFileSync(target, JSON.stringify(res));


//----- configs ------

const configs_folder = './configs/';
target = './src/utils/Data.ts';
tmp = configs_folder.split('/').join('\\').substr(2);

var res = '';


var list = fileList(configs_folder);

for (var i = 0; i < list.length; i++)
{ 
  var file_path = list[i].split(tmp)[1];

  let index = file_path.lastIndexOf('\\');
  file_name = file_path.substr(index + 1);

  index = file_name.lastIndexOf('.');
  file_name = file_name.substr(0, index);

  file_path = file_path.split('\\').join('/');
  var file_data = fs.readFileSync(configs_folder + file_path, 'utf8');
  //file_data = file_data.split('\r\n').join('');
  file_data = JSON.parse(file_data);
  file_data = JSON.stringify(file_data);

  var file = '\tpublic static ' + file_name + ': string = \'' + Buffer.from(file_data).toString('base64') + '\';\n';
  res = res + file;
}
res = 'class Data\n{\n' + res + '\n}';
fs.writeFileSync(target, res);
  */