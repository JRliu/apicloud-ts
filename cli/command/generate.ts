import * as yargs from 'yargs'
import * as fs from 'fs-extra'
import * as path from 'path'
import * as dayjs from 'dayjs'
import * as inq from 'inquirer'
import * as colors from 'colors'
import getGitUser from '../util/getGitUser'

const command: yargs.CommandModule<{}, { [k: string]: string }> = {
    command: [`gen <path>`],
    describe: '新建组件，-p || --page则新建页面',
    async handler(args) {
        const list = args.path.split('/')
        const componentName = list[list.length - 1]
        const filePath = path.join(__dirname, '../../', args.path)
        const isPage = args.p || false

        // 判断文件夹是否已存在
        if (fs.existsSync(filePath)) {
            let answer = await inq.prompt({
                type: 'confirm',
                name: 'isOverride',
                message: `组件 ${args.path} 已存在。是否覆盖？`
            })
            // @ts-ignore
            if (!answer.isOverride) {
                console.log(colors.red('\n已取消'))
                return
            }
        }

        const templateDir = path.join(
            __dirname,
            `../template/${isPage ? 'page' : 'component'}`
        )

        // 读取模板文件
        const files = fs.readdirSync(templateDir)
        files.forEach(file => {
            // 文件名（含后缀）
            let fileName = file
                .replace('component', componentName)
                .replace('.txt', '')
            const fullPath = path.join(filePath, fileName)

            // 创建文件
            let content = fs
                .readFileSync(path.join(templateDir, file))
                .toString()

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
                componentName: componentName,
                curDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                username: getGitUser()
            })
            console.log(colors.green(`生成文件 ${fullPath}`))
            fs.outputFileSync(fullPath, content, 'utf-8')
        })
        console.log(
            colors.green(`\n已生成${isPage ? '页面' : '组件'} ${args.path}`)
        )
    }
}

export default command
