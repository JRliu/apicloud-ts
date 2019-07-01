/**
 * Demo
 * @author jianrong <704834659@qq.com>
 * @date 2019-07-02 01:02:29
 */

import Vue from '@/components/base'
import { Component } from 'vue-property-decorator'
import template from './Demo.vue'

import * as util from '@/common/util'

import Avatar from '@/components/Avatar'

@Component({
    name: 'Demo',
    mixins: [template],
    components: {
        Avatar
    }
})
export default class Demo extends Vue {
    //#region datas ******************************/
    protected name = 'mike'
    //#endregion datas ***************************/

    //#region props ******************************/
    //#endregion props ***************************/

    //#region vuex *******************************/
    //#endregion vuex ****************************/

    //#region computed ***************************/
    //#endregion computed ************************/

    //#region watchers ***************************/
    //#endregion watchers ************************/

    //#region life cycle *************************/
    protected created() {
        console.log('created')
    }
    //#endregion life cycle **********************/

    //#region hooks ******************************/
    //#endregion hooks ***************************/

    //#region event handler **********************/
    //#endregion event handler *******************/

    //#region methods ****************************/
    protected test() {
        api.openTabLayout({
            name: 'help',
            url: `${util.host}pages/error/error.html`,
            title: '帮助',
            hideNavigationBar: false,
            navigationBar: {
                // background: 'red',
                // color: '#fff'
                // leftButtons: [
                //     {
                //         iconPath: 'widget://image/back.png'
                //     }
                // ]
            }
        })
    }

    //#endregion methods *************************/
}
