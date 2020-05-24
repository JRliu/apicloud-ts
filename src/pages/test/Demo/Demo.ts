/**
 * Demo
 * @author jianrong <704834659@qq.com>
 * @date 2019-07-06 23:06:00
 */

import Vue from '@/components/base'
import { Component } from 'vue-property-decorator'
import template from './Demo.vue'
import config from 'config'
import * as util from '@/common/util'

@Component({
    name: 'Demo',
    mixins: [template]
})
export default class Demo extends Vue {
    // #region datas ******************************/
    // #endregion datas ***************************/

    // #region props ******************************/
    // #endregion props ***************************/

    // #region vuex *******************************/
    // #endregion vuex ****************************/

    // #region computed ***************************/
    // #endregion computed ************************/

    // #region watchers ***************************/
    // #endregion watchers ************************/

    // #region life cycle *************************/
    protected created() {
        console.log('config', config)
        console.log('util', util)
    }
    // #endregion life cycle **********************/

    // #region hooks ******************************/
    // #endregion hooks ***************************/

    // #region event handler **********************/
    // #endregion event handler *******************/

    // #region methods ****************************/
    protected goError() {
        api.openWin({
            name: 'haha',
            url: '../error/Error.html'
        })
    }
    // #endregion methods *************************/
}
