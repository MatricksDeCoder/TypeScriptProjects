function findEmailDomain(address) {
    return address.slice(address.lastIndexOf("@") + 1);
}
console.log(findEmailDomain('prettyandsimple@example.com')); //example.com
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org')); //example.org
