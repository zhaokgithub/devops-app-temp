/**
 * @methods readerFileContent
 * @param {object} file
 * @returns {object} Json
 * @description 读取文件内容
 *  */
export const readerFileContent = (file, callback) => {
    let fileReader = new FileReader()
    fileReader.onload = (e) => {
        let result = e.target.result
        callback(result)
    }
    fileReader.readAsText(file)
}
/**
 * @methods setStrToFile 
 * @param {string} str
 * @param {string} filename
 * @returns 
 * @description 将字符串转为文件并且下载
 *  */
export const setStrToFile = (str,filename,type) => {
    var eleLink = document.createElement('a')
    eleLink.download = filename
    eleLink.style.display = 'none'
    var blob = new Blob([str])
    eleLink.href = URL.createObjectURL(blob)
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
}