const axios = require('../util');

exports.getfszdDetail = async (titleId) => {
    const result = await axios.get('/api/fszdDetail', {
        params: {
            titleId
        }
    }).then(res => res.data);
    return result;
}