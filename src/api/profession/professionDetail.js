const axios = require('../util');

exports.getprofessionDetail = async (titleId) => {
    const result = await axios.get('/api/professionDetail', {
        params: {
            titleId
        }
    }).then(res => res.data);
    return result;
}