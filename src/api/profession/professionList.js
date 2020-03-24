const axios = require('../util');

exports.getprofessionListByPage = async (page, limit) => {
    const result = await axios.get('/api/professionList', {
        params: {
            page,
            limit
        }
    }).then(res => res.data);
    return result;
}
