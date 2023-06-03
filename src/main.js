import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router);

app.directive('phone', {
    mounted(el) {
        console.log('1')
        el.oninput = function (e) {
            console.log('2')
            const x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)
            if (!x[2] && x[1] !== '') {
                this.value = x[1] === '+7' ? x[1] : '+7' + x[1]
            } else {
                this.value = !x[3] ? x[1] + x[2] : x[1] + '(' + x[2] + ')' + x[3] + (x[4] ? '-' + x[4] : '')
            }
        }
    }
});


app.mount('#app')