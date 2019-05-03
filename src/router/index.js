import Vue from 'vue'
import Router from 'vue-router'
import HomeTab from '@/components/Home'
import AboutUsTab from '@/components/AboutUs'
import ourServicesTab from '@/components/ourServices'
import clientGalleryTab from '@/components/clientGallery'
import testimonialsTab from '@/components/testimonials'
import careersTab from '@/components/careers'
import contactTab from '@/components/Contact'
import adminTab from '@/components/Administrator'

// import VueResource from 'vue-resource'

Vue.use(Router)
// Vue.use(VueResource)

export default new Router({
    routes: [{
        path: '*', //path: '/', all none existing page will be redirect to index page
        name: 'home',
        component: HomeTab
    }, {
        path: '/aboutUs',
        name: 'aboutUs',
        component: AboutUsTab
    }, {
        path: '/ourServices',
        name: 'ourServices',
        component: ourServicesTab
    }, {
        path: '/clientGallery',
        name: 'clientGallery',
        component: clientGalleryTab
    }, {
        path: '/testimonials',
        name: 'testimonials',
        component: testimonialsTab
    }, {
        path: '/careers',
        name: 'careers',
        component: careersTab
    }, {
        path: '/contact',
        name: 'Contact',
        component: contactTab
    }, {
        path: '/admin',
        name: 'Administrator',
        component: adminTab
    }]
})