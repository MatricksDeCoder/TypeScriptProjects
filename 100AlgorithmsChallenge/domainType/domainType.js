function domainType(domains) {
    var obj = {
        org: "organization",
        com: "commercial",
        net: "network",
        info: "information"
    };
    return domains.map(function (domain) {
        var seperated = domain.split('.');
        var part = seperated[seperated.length - 1];
        return obj[part];
    });
}
console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));
// ["organization", "commercial", "network", "information"].
