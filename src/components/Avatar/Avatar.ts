/**
 * Avatar
 * @author jianrong <704834659@qq.com>
 * @date 2019-07-02 01:26:12
 */

import Vue from '@/components/base'
import { Component } from 'vue-property-decorator'
import template from './Avatar.vue'

@Component({
    name: 'Avatar',
    mixins: [template]
})
export default class Avatar extends Vue {
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
        console.log('test')
    }
    // #endregion life cycle **********************/

    // #region hooks ******************************/
    // #endregion hooks ***************************/

    // #region event handler **********************/
    // #endregion event handler *******************/

    // #region methods ****************************/
    // #endregion methods *************************/
}
