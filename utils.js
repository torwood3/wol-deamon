/**
 * Created by pamas on 14/01/2017.
 */

/**
 * Collects information about the local IPv4/IPv6 addresses of
 * every network interface on the local computer.
 * Returns an object with the network interface name as the first-level key and
 * "IPv4" or "IPv6" as the second-level key.
 * For example you can use getLocalNetworkInfos().eth0.IPv6 to get the IPv6 address
 * (as string) of eth0
 */
var getLocalNetworkInfos = function () {
	var addrInfo, ifaceDetails, _len;
	var localIPInfo = {};
	//Get the network interfaces
	var networkInterfaces = require('os').networkInterfaces();
	//Iterate over the network interfaces
	for (var ifaceName in networkInterfaces) {
		ifaceDetails = networkInterfaces[ifaceName];
		//Iterate over all interface details
		for (var _i = 0, _len = ifaceDetails.length; _i < _len; _i++) {
			addrInfo = ifaceDetails[_i];

			if (addrInfo.internal) continue;

			if (addrInfo.family === 'IPv4') {
				//Extract the IPv4 address
				if (!localIPInfo[ifaceName]) {
					localIPInfo[ifaceName] = {};
					localIPInfo[ifaceName].mac = addrInfo.mac;

				}
				localIPInfo[ifaceName].IPv4 = addrInfo.address;
			} else if (addrInfo.family === 'IPv6') {
				//Extract the IPv6 address
				if (!localIPInfo[ifaceName]) {
					localIPInfo[ifaceName] = {};
				}
				localIPInfo[ifaceName].IPv6 = addrInfo.address;
			}
		}
	}
	return localIPInfo;
};

var getActiveInterface = function () {
	var localIPs = getLocalNetworkInfos();
	console.log(localIPs);

	for( var i = 0; i < localIPs.length; i++){
		if(localIPs[i].IPv4.indexOf("192.168") != -1) {
			console.log(localIPs[i]);
			return localIPs[i];
		}
	}
}


module.exports.getLocalNetworkInfos = getLocalNetworkInfos;
module.exports.getActiveInterface = getActiveInterface;