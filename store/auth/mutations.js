export default{
    setValue (state, value) {
        state[value.name] = value.data;
    },
};
