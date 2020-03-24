const axios = require('../util');

exports.getpoliticsDetail = async (titleId) => {
    const result = await axios.get('/api/politicsDetail', {
        params: {
            titleId
        }
    }).then(res => res.data);
    return result;
}