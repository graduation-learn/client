const fs = require('fs');
const path = require('path');
const type = 'profession';
const Type = 'profession';

 /**
 * 添加api层的list
 */
const apiListResult = fs.readFileSync(path.resolve(__dirname, './api/english/englishList.js'));

const changeapiListResult = apiListResult.toString().replace(/(english|English)/g, function ($) {
    return $ === 'english' ? type : Type;
});

fs.writeFileSync(path.resolve(__dirname, `./api/${type}/${type}List.js`), changeapiListResult);

/**
 * 添加api层的detail
 */
const apiDetailResult = fs.readFileSync(path.resolve(__dirname, './api/english/englishDetail.js'));

const changeapiDetailResult = apiDetailResult.toString().replace(/(english|English)/g, function ($) {
    return $ === 'english' ? type : Type;
});

fs.writeFileSync(path.resolve(__dirname, `./api/${type}/${type}Detail.js`), changeapiDetailResult);