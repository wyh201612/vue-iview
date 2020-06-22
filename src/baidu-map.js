export function MP() {
    return new Promise(function(resolve, reject) {
        window.init = function() {
            resolve(BMap)
        }
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `http://api.map.baidu.com/api?v=3.0&ak=8Da3fMPdQv1Mbg9FQZL7raUO6XZnXj0Q&callback=init`
        script.onerror = reject
        document.head.appendChild(script)
    })
}