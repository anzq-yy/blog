# NeoVim


> install & check
```shell
brew install neovim

nvim --version
```


> 初始化文件目录
```
~/.config/
    nvim/
        init.lua
        lua/
            [your name]/
                core/
                    colorscheme.lua
                    options.lua
                    keymaps.lua
                plugins/
                    lualine.lua
                    telescope.lua
                    nvim-tree.lua
                    ...
                plugins-setup.lua
```

### keymaps 
| 模式 | 快捷键 | 作用 |
| :-- | :-- | :-- |
| 插入模式 | jk | 退出插入模式 和 eas 功能相同 |
| n |<leader>nh| 清除搜索后的高亮显示|
| n |x|删除一个字符 但不会复制进入寄存器|
| n |<leader>+|对数字进行 +|
| n |<leader>-|对数字进行 -|
|--|||
| n |<leader>sv| 在右侧打开一个window|
| n |<leader>sh|在下面打开一个window|
| n |<leader>se|使打开的window等宽|
| n |<leader>sx|关闭window|
|--|||
| n |<leader>to|打开新页签|
| n |<leader>tx|关闭当前页签|
| n |<leader>tn|移动到下一个页签|
| n |<leader>tp|移动到上一个页签|g
|-- 插件的快捷键|||
|--|ctrl + h j k l|上下左右 切换window|
|n|<leader>sm|最大(小)化当前window|

{.small}


vim-surround cs ds ysiw
replaceWithRegister   yw  grw


comment.nvim   gc 批量注释
     -- comment.lua


vim-tree.lua  左侧文件夹  :NvimTreeToggle - <leader>e







