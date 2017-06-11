       var current=0;
        //slider Images
         var ar=["url('images/im8.jpg')","url('images/im18.jpg')","url('images/im16c.jpg')"];  
        
        //Circle generator on slider
            var circleDiv = document.getElementById("sliderDiv");
            for(var i=0;i<ar.length;i++){
            var xx= document.createElement('div');
            xx.setAttribute("id",i);
            xx.setAttribute("class","inCircles");
            xx.setAttribute("onClick","circleSelect("+i+");");
            circleDiv.appendChild(xx);
        }
        
        //fill first circle anyway
         var cir = document.getElementsByClassName("inCircles");
         cir[current].id="fillCircle";
         //set first time slider image
         var slider=document.getElementById('sliderSwap').style.backgroundImage=ar[current];
         setInterval(function(){changeSlider()},5000); 
       
       //Slider Changer
        function changeSlider(cid){
            
            if(cid=="swapRight")
                current++;
            else if(cid=="swapLeft")
                current--;
            else
                current++;

             current==ar.length ? current=0 : false;
          	 current<0 ? current=ar.length-1 : false;
            slider=document.getElementById('sliderSwap').style.backgroundImage=ar[current];
            activeCir();   
        }
        
       //active slider circle fill
        function activeCir(){       
            for(var i=0;i<cir.length;i++)
                i==current ? cir[i].id="fillCircle" : cir[i].id="unfillCircle";
        }
       function circleSelect(cId){
           current=cId-1;
           changeSlider();
        }