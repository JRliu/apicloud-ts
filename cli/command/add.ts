import * as yargs from 'yargs'
import * as fs from 'fs'
import * as path from 'path'
import * as dayjs from 'dayjs'
import * as inq from 'inquirer'
import * as colors from 'colors'
import getGitUser from '../util/getGitUser'

const command: yargs.CommandModule<{}, { [k: string]: string }> = {
    command: [`add <path>`],
    describe: '新建组件，-p || --page则新建页面',
    async handler(args) {
        console.log(args)
        const list = args.path.split('/')
        const _filePath = args.path
        const fileName = list[list.length - 1]
        const filePath = path.join(__dirname, '../../', _filePath)
        const isPage = args.p || false
        // 判断文件夹是否已存在
        if (!fs.existsSync(filePath)) {
            // 创建文件夹
            fs.mkdirSync(filePath, { recursive: true })
        } else {
            let answer = await inq.prompt({
                type: 'confirm',
                name: 'isOverride',
                message: `组件 ${args.path} 已存在。是否覆盖？`
            })

            if (!answer.isOverride) {
                console.log(colors.gray('已取消'))
                return
            }
        }

        // 读取模板文件
        const files = fs.readdirSync(
            path.join(__dirname, '../template/component')
        )
        files.forEach(file => {
            // 文件名（含后缀）
            let name = file.replace('component', fileName).replace('.txt', '')
            const _path = path.join(filePath, name)

            // 创建文件
            fs.createWriteStream(_path)
            let content = fs
                .readFileSync(
                    path.join(__dirname, '../template/component', file)
                )
                .toString()

            if (name === 'index.ts' && isPage) {
                content = fs
                    .readFileSync(
                        path.join(__dirname, '../template/page', file)
                    )
                    .toString()
            }

            const replace = (
                content: string,
                opt: { [k: string]: string } = {}
            ) => {
                for (let i in opt) {
                    const reg = new RegExp(`\\\${${i}}`, 'g')
                    content = content.replace(reg, opt[i])
                }
                return content
            }
            content = replace(content, {
                componentName: fileName,
                curDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                username: getGitUser()
            })
            console.log(colors.green(`生成文件 ${_path}`))
            fs.writeFileSync(_path, content, 'utf-8')
        })
        console.log(
            colors.green(`\n已生成${isPage ? '页面' : '组件'} ${args.path}`)
        )
    }
}

export default command
