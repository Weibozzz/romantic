const webp = require('webp-converter')
const glob = require('glob')
const path = require('path')
const crypto = require('crypto')
const fs = require('fs-extra')
const hashPath = resolve('./hash.json')
function resolve (filePath) {
  return path.join(__dirname, filePath)
}
function clearWebp (hashJson, newHashJson) {
  let count = 0;
  Object.keys(hashJson).forEach(hashKey => {
    if (!newHashJson[hashKey]) {
      const relativePath1 = hashKey
        .replace(/tb/, 'tb-webp')
        .replace(/\.png$/, '-20.webp')
        .replace(/\.jpe?g$/, '-20.webp')
      const relativePath2 = hashKey
        .replace(/tb/, 'tb-webp')
        .replace(/\.png$/, '-100.webp')
        .replace(/\.jpe?g$/, '-100.webp');
      const notNeedFilePath1 = resolve(relativePath1)
      const notNeedFilePath2 = resolve(relativePath2)
      console.log(notNeedFilePath1)
      console.log(notNeedFilePath2)
      try {
        fs.removeSync(notNeedFilePath1)
        fs.removeSync(notNeedFilePath2)
        count += 1
      } catch (error) {
      }
      console.log(`${count}个文件已被清除！`)
      fs.writeJsonSync(hashPath, newHashJson, {
        spaces: 2
      })
    }
  })
}
function getHashJson (filePath) {
  const isExist = fs.pathExistsSync(filePath)
  if (!isExist) {
    fs.ensureFileSync(filePath)
    fs.writeJsonSync(filePath, {})
  }
  return fs.readJsonSync(filePath)
}
function getFileHash (filePath) {
  const hash = crypto.createHash('md5')
  return fs.readFile(filePath)
    .then(buffer => {
      hash.update(buffer)
      const md5 = hash.digest('hex')
      return md5
    })
}
// console.log(getHashJson(resolve('./hash.json')))
function createWebp (inputImage, outputImage, option = 80) {
  return new Promise((resolve, reject) => {
    webp.cwebp(inputImage, outputImage, `-q ${option === 20 ? 0.01 : option}`)
      .then(res => {
        console.log('res:', res, inputImage)
        resolve()
      })
      .catch(err => {
        reject()
      })
  })
}
function getImgPath () {
  let result = []
  const arr = ['jpg', 'png', 'jpeg']
  arr.forEach(v => {
    result.push(v)
    result.push(v.toUpperCase())
  })
  // https://www.npmjs.com/package/glob
  return resolve(`./images/tb/*.@(${result.join('|')})`)
}
async function createWebpAndHash (option) {
  const newHashJson = {}
  const files = glob.sync(getImgPath())
    .map(_path => path.normalize(_path))
  // console.log(files)
  const hashJson = getHashJson(hashPath)
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    // console.log(file)
    const relativePath = path.join(__dirname, './')
    // console.log(relativePath)
    const relativeFilePath = file.replace(relativePath, '/')
    // console.log(relativeFilePath)
    const { dir, ext, base, name } = path.parse(file)
    // console.log(path.parse(file))
    const hash = await getFileHash(file)
    newHashJson[relativeFilePath] = hash
    // console.log(hash)
    const oldHash = hashJson[relativeFilePath]
    const webpPath = `${dir}-webp/${name}-${option}.webp`
    const isExist = fs.pathExistsSync(webpPath)
    if (!oldHash || oldHash !== hash || !isExist) {
      hashJson[relativeFilePath] = hash
      // console.log('input', `${dir}/${base}`)
      // console.log('output', webpPath)
      try {
        await createWebp(`${dir}/${base}`, webpPath, option)
      } catch (err) {
        throw Error('报错了')
      }
    }
  }
  fs.writeJsonSync(hashPath, hashJson, {
    spaces: 2
  })
  clearWebp(hashJson, newHashJson)
}
function changeImageLen () {
  const dir = resolve('./images/tb')
  const files = fs.readdirSync(dir);
  const fileNames = files.map(v => v.replace(/(\.png|\.jpe?g)$/i, ''));
  const str = fs.readFileSync(resolve('./js/3d/3d.js')).toString()
  const reg = /var imgFileNames = \[(.)*\]/
  const newStr = str.replace(reg, `var imgFileNames = ${JSON.stringify(fileNames)}`)
  fs.writeFileSync(resolve('./js/3d/3d.js'), Buffer.from(newStr))
}
createWebpAndHash(20) // 创建质量为20的缩略图
createWebpAndHash(100) // 创建质量为100的缩略图
changeImageLen() // 更改js文件名称数组
