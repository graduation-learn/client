const axios = require('../util');

exports.getjyxdDetail = async (titleId) => {
    const result = await axios.get('/api/jyxdDetail', {
        params: {
            titleId
        }
    }).then(res => res.data);
    return result;
}