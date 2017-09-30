window.onload = function () {
            //需求：点击盒子，如果盒子上面的文字是隐藏，那么隐藏盒子在修改文字问显示。如果是显示，那么显示盒子在把文字改为隐藏。

            var btns = document.getElementsByTagName('button');
            var div = document.getElementById('club_box_one');
            for(var i = 0 ;i<= btns.length;i++){
	            this.onclick = function () {
	                if(this.innerHTML == "更多信息"){
	                    this.innerHTML ="点击收起";
	                    div.style.height = '104%';
	                    div.style.background = "#f1f1f1"
	                }else{
	                    this.innerHTML ="更多信息"
	                    div.style.height = '';
	                    div.style.background = "";
	                }
	            }
            }
           

        }