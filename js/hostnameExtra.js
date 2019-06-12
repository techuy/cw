function domainName(url){
    var hostname
    if(url.indexOf("//")>-1)
    {
        hostname = url.split("/")[2]
    }
    else
    {
        hostname=url.split("/")[0]
    }
}
console.log(domainName("http://google.com"))
console.log(domainName("www.xakep.ru"))