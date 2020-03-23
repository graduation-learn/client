const axios = require('../util');

exports.getfszdListByPage = async (page, limit) => {
    const result = await axios.get('/api/fszdList', {
        params: {
            page,
            limit
        }
    }).then(res => res.data);
    return result;
}
