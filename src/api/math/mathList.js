const axios = require('../util');

exports.getmathListByPage = async (page, limit) => {
    const result = await axios.get('/api/mathList', {
        params: {
            page,
            limit
        }
    }).then(res => res.data);
    return result;
}
