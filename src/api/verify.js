import axios from './util'

export default async () => {
    return await axios.get('api/verify').then(res => res.data);
}