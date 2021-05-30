# jest使用手册

### --coverage

测试覆盖率，即写的脚本文件

### --coverageFrom

这个正则匹配模式比较麻烦，然后这里就给个例子。

1. 通过命令行
```sh
jest --coverage --coverageFrom="src/**/*.{js,jsx,ts,tsx}"
```

2. 通过package.json的配置

```json
{
  "jest": {
    "coverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}"
    ]
  }
}
```

### watch

根据变动的单侧文件，进行测试（所以可以根据这个来计算改动文件的测试覆盖率）

### 参考

[jest](https://jestjs.io/zh-Hans/docs/cli#--watch)