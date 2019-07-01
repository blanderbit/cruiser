

export default  {
    set(value, params = [], text){
        const data = {};
        params.forEach(item => {
            let res = this.methods[item](value, text);
            if(res != false) data[item] = res;
        });
        return Object.keys(data).length == 0
            ? {
                errors: false
            } : {
                message:data,
                errors: true
            };
    },
    methods:{
        required(value, text = 'This field is required'){
            !text ? text = 'This field is required' : null;
            return this.messages(!value, text)
        },
        email(value, text = 'Email invalid' ){
            !text ? text = 'Email invalid' : null;
            let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return this.messages(re.test(value) ? false : true, text);
        },
        radio(value = [],field = ['status', 'You have to choose radiobutton']){
            let count = true;
            value.forEach(item => item[field[0]] ? count = false : null);
            return this.messages(count, field[1]);
        },
        messages(status, message){
            return status == false ? false : message
        },
        dropdown(value, standart_text){
            return this.messages(
                value !=  standart_text? false : true,
                'You have to choose element in dropdown'
            );
        }
    }
}
