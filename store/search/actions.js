import {Search} from "../../api/search";

export default {
    action_get_search({commit, dispatch}, data) {
        return Search.getSearchData(data)
            .then(res => {
                commit('setValue', {name: 'data', data: res.body});
                return res.body
            })
            .catch((err) =>{
                commit('setValue', {name: 'data', data: []})
            })
    },
};
