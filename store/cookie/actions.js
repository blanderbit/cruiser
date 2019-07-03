import {Search} from "../../api/search";

export default {
    action_cookie({commit, dispatch}, data) {
        commit('setValue', data)
    },
};
