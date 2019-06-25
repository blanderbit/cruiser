import {Search} from "../../api/search";

export default {
    action_get_search({commit, dispatch}, data) {
        return Search.getSearchData('11117584398')
            .then(res => {
                commit('setValue', {name:'data', data:res.body});
                return res
            })
    },
};
