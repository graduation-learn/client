const axios = require('../util');

exports.addArticle = async (articleObj) => {
    const result = await axios.post('/api/addArticle', {
        ...articleObj
    }).then(res => res.data);
    return result;
}

exports.deleteArticleById = async (id) => {
    const result = await axios.post('/api/deleteArticleById', {
        id
    }).then(res => res.data);
    return result;
}

exports.updateArticleById = async (articleObj) => {
    return await axios.post('/api/updateArticleById', {
        ...articleObj
    }).then(res => res.data);
}

exports.queryArticleByUserIdAndType = async (userId, type, status) => {
    const result = await axios.get('/api/queryArticleByUserIdAndType', {
        params: {
            userId,
            type,
            status
        }
    }).then(res => res.data);
    return result;
}

exports.queryArticleByPageAndType = async (page, limit, type) => {
    const result = await axios.get('/api/queryArticleByPageAndType', {
        params: {
            page, limit, type
        }
    }).then(res => res.data);
    return result;
}

exports.queryArticleDetailById = async (id) => {
    const result = await axios.get('/api/queryArticleDetailById', {
        params: {
            id
        }
    }).then(res => res.data);
    return result;
}

exports.queryTitleListByKeyValueAndPage = async (wd, page, limit) => {
    const result = await axios.get('/api/queryTitleListByKeyValueAndPage', {
        params: {
            wd, page, limit
        }
    }).then(res => res.data);
    return result;
}