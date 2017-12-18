$(function(){
	let bannerBox = $('.banner')[0];
	let banner = document.querySelectorAll('.banners');
	let dian  = document.querySelectorAll('.dian-s');
	let right = $('.er')[0];
	let left = $('.yi')[0];
	
	let now = 0;
	let time = setInterval(move,2000);

	function move(type){
		type = type || 'right';
		if(type == 'right'){
			now++;
			if(now == banner.length){
				now = 0;
			}
		}else if(type == 'left'){
			now--;
			if(now == -1){
				now = banner.length-1;
			}
		}
		banner.forEach(function(ele,index){
			ele.style.opacity = 0;
			dian[index].style.background = '#DDDDDD';
		})
		banner[now].style.opacity = 1;
		dian[now].style.background = '#555';
	}
	bannerBox.onmouseover = function(){
		clearInterval(time);
		right.style.display = 'block';
		left.style.display = 'block';
	}
	bannerBox.onmouseout = function(){
		time = setInterval(move,2000);
		right.style.display = 'none';
		left.style.display = 'none';
	}
	dian.forEach(function(dele,dindex){
		dele.addEventListener('click',function(){
			banner.forEach(function(bele,bindex){
				bele.style.opacity = 0;
				dian[bindex].style.background = '#DDDDDD';
			})
			banner[dindex].style.opacity = 1;
			this.style.background = '#555';
			now = dindex;
		})
	});
	right.onclick = function(){
		move('right');
	}
	left.onclick = function(){
		move('left');
	}

})