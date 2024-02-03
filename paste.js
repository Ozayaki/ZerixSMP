var ip = document.getElementById('ip');
var port = document.getElementById('port');

//ip

ip.onclick = function () {
 navigator.clipboard.writeText('zerixsmp.run.place');
 ip.textContent = "zerixsmp.run.place - copied"
}

//port

port.onclick = function () {
 navigator.clipboard.writeText('25169');
 port.textContent = "25169 - copied"
}