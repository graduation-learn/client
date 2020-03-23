const axios = require('../util');

exports.getenglishDetail = async (titleId) => {
    const result = await axios.get('/api/englishDetail', {
        params: {
            titleId
        }
    }).then(res => res.data);
    return result;
}