<img src=https://gw.alipayobjects.com/zos/k/h5/hzL4LG.jpg width=800/>  

<small>常用的 CSS 小技巧</small>  

# 前端小技巧

CSS
- [一行文本超出](#CSS1)
- [多行文本超出](#CSS2)
- [修改滚动条样式](#CSS3)

JS



# 实现

<p id="CSS1">一行文本超出</p>

```css
overflow: hidden;  
text-overflow: ellipsis;  
white-space: nowrap;  
```

<p id="CSS2">多行文本超出</p>

```css
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
```

<p id="CSS3">修改滚动条样式</p>

```css
/* 滚动条整体部分 */
::-webkit-scrollbar{
  width:5px;
  height:6px;
  background-color: transparent;
  border-radius: 8px;
}
/* 内层轨道，滚动条中间部分 */
::-webkit-scrollbar-track-piece{
  width:24px;
  background-color:transparent;
  border-radius: 8px;
}
/* 滚动条里面的小方块，能向上向下移动 垂直滚动条 */
::-webkit-scrollbar-thumb:vertical{
  width:24px;
  height:24px;
  background: rgba(214, 212, 212,0.5);
  border-radius: 8px;
}
/* 滚动条里面的小方块，能向上向下移动 水平滚动条 */
::-webkit-scrollbar-thumb:horizontal{
  width:24px;
  height:24px;
  background: rgba(214, 212, 212,0.5);
  border-radius: 8px;
}
/* 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。 */
::-webkit-scrollbar-button{
  display:none;
}
/* 边角，即两个滚动条的交汇处 */
::-webkit-scrollbar-corner{
  display:none;
}
/* 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件，类似input textArea的右下角可放大缩小的位置 */
::-webkit-resizer {

}
```

