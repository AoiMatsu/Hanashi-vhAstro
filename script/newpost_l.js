import path from 'path';
import dayjs from 'dayjs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取命令行参数
const articleName = process.argv.slice(2).join(' '); // 保留空格
const articleID = crypto.createHash('sha256').update(dayjs().valueOf().toString()).digest('hex').slice(0, 16);

if (!articleName) {
    console.error('请提供文章名称，例如：pnpm np "第一篇文章"');
    process.exit(1);
}

const ArticleContent = `---
title: "${articleName.replace(/"/g, '\\"')}"
categories: "🌸"
tags:
  - ""
id: ${articleID.slice(0, 16)}
date: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}
updated: 
cover: ""
hide: false
recommend: false
top: false
---

| 情景 | 付記 |
| :--: | :--: |
|  |  |

### シミュレーション会話


### 参考
:::note{type="import"}
|  |  S1 ep |
| :--: | :--: |
| 人物 |  |
| 情节 |  |
::vhVideo{url=""}
:::
`;

const init = async () => {
    const now = dayjs();
    const formattedDate = now.format('YYYY-MM-DD');
    const folderName = `${formattedDate} ${articleName}`;
    const targetDir = path.join(__dirname, '../src/content/blog', folderName);
    const filePath = path.join(targetDir, `${articleName}.md`);

    try {
        // 创建文件夹（递归创建）
        await fs.mkdir(targetDir, { recursive: true });
        // 写入文件
        await fs.writeFile(filePath, ArticleContent, 'utf8');

        // 友好输出
        console.log('✅ 文章创建成功');
        console.log(`📅 日期：${now.format('YYYY-MM-DD')}`);
        console.log(`📂 路径：${filePath}`);
        console.log(`🆔 ID：${articleID.slice(0, 16)} (可手动修改)`);
    } catch (error) {
        console.error('❌ 创建失败：');
        console.error(`错误类型：${error.code || 'UNKNOWN_ERROR'}`);
        console.error(`详细信息：${error.message}`);
        process.exit(1);
    }
}

init();