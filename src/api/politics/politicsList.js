const axios = require('../util');

exports.getpoliticsListByPage = async (page, limit) => {
    const result = await axios.get('/api/politicsList', {
        params: {
            page,
            limit
        }
    }).then(res => res.data);
    return result;
}
