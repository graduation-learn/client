const axios = require('../util');

exports.getenglishListByPage = async (page, limit) => {
    const result = await axios.get('/api/englishList', {
        params: {
            page,
            limit
        }
    }).then(res => res.data);
    return result;
}
