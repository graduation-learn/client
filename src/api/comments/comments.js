const axios = require('../util');

exports.addComment = async (commentObj) => {
    const result = await axios.post('/api/addComment', {
        ...commentObj
    }).then(res => res.data);
    return result;
}

exports.addReply = async (replyObj) => {
    const result = await axios.post('/api/addReply', {
        ...replyObj
    }).then(res => res.data);
    return result;
}

exports.queryCommentByArticleId = async articleId => {
    const result = await axios.get('/api/queryCommentByArticleId', {
        params: {
            articleId
        }
    }).then(res => res.data.data);
    return result;
}