const axios = require('../util');

exports.getjyxdListByPage = async (page, limit) => {
    const result = await axios.get('/api/jyxdList', {
        params: {
            page,
            limit
        }
    }).then(res => res.data);
    return result;
}
