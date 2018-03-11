
			window.onload=function(){
				var aDiv = document.getElementsByClassName("div1");
				var aDiv2 = document.getElementsByClassName("div2");/*中间的25个小div*/
				for(var i=0;i<aDiv.length;i++)
				{
					aDiv[i].index = i;//给循环中的元素添加一个属性，属性值等于i
					aDiv[i].onclick=function(){
						var temp = 1; //临时变量
						if(aDiv[this.index].style.backgroundImage=='url("./img/cardbackground.gif")'){
							aDiv[this.index].style.backgroundImage = 'url("./img/dcardbackground.jpeg")';
						}
						else
						{
							aDiv[this.index].style.backgroundImage = 'url("./img/cardbackground.gif")';
						}
						if(aDiv[this.index-1].style.backgroundImage=='url("./img/cardbackground.gif")'){
							aDiv[this.index-1].style.backgroundImage = 'url("./img/dcardbackground.jpeg")';
						}
						else
						{
							aDiv[this.index-1].style.backgroundImage = 'url("./img/cardbackground.gif")';
						}
						if(aDiv[this.index+1].style.backgroundImage=='url("./img/cardbackground.gif")'){
							aDiv[this.index+1].style.backgroundImage = 'url("./img/dcardbackground.jpeg")';
						}
						else
						{
							aDiv[this.index+1].style.backgroundImage = 'url("./img/cardbackground.gif")';
						}
						if(aDiv[this.index-7].style.backgroundImage=='url("./img/cardbackground.gif")'){
							aDiv[this.index-7].style.backgroundImage = 'url("./img/dcardbackground.jpeg")';
						}
						else
						{
							aDiv[this.index-7].style.backgroundImage = 'url("./img/cardbackground.gif")';
						}
						if(aDiv[this.index+7].style.backgroundImage=='url("./img/cardbackground.gif")'){
							aDiv[this.index+7].style.backgroundImage = 'url("./img/dcardbackground.jpeg")';
						}
						else
						{
							aDiv[this.index+7].style.backgroundImage = 'url("./img/cardbackground.gif")';
						}
						
						for(var j = 0;j<aDiv2.length;j++)
						{
							if(aDiv2[j].style.backgroundImage!='url("./img/cardbackground.gif")')
							{
								temp = 0;
								break; // 跳出循环
							}
						}
						if(temp==1)
						{
							
							setTimeout(function(){
								alert("恭喜过关!");
							},1000);/*延时*/
							
						}
					}
				}
			}
	