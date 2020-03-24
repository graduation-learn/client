const axios = require('../util');

exports.getmathDetail = async (titleId) => {
    const result = await axios.get('/api/mathDetail', {
        params: {
            titleId
        }
    }).then(res => res.data);
    return result;
}