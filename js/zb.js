window.onload=function(){
    var aB=document.getElementById("c1");
	var oc=aB.getContext("2d");
	
	function zb(){
		var x=200;
		var y=200;
		var r=40;
		
		oc.clearRect(0,0,oc.width,oc.height);
		//��ȡʱ��
		var oDate=new Date(); 
		var oHours=oDate.getHours();
		var oMin=oDate.getMinutes();
		var oSen=oDate.getSeconds();
		
		var oHoursValue=(-90 + oHours*30 + oMin/2)*Math.PI/180;
		var oMinValue=(-90 + oMin*6)*Math.PI/180;
		var oSenValue=(-90 + oSen*6)*Math.PI/180;
		
		/*oc.moveTo(x,y);
		oc.arc(x,y,r,0,6*Math.PI/180,false);
		
		oc.moveTo(x,y);
		oc.arc(x,y,r,6*Math.PI/180,12*Math.PI/180,false);*/
		
		oc.beginPath();
		for(var i=0;i<60;i++){
			oc.moveTo(x,y);
			oc.arc(x,y,r,6*i*Math.PI/180,6*(i+1)*Math.PI/180,false);
			}
		oc.closePath();
		oc.stroke();
		
		
		oc.fillStyle="white";
		//�ٻ�һ��СԲ�����м䲿��
		oc.beginPath();
		oc.moveTo(x,y);
		oc.arc(x,y,r*19/20,0,360*(i+1)*Math.PI/180,false);
		oc.closePath();
		oc.fill();
		
		//����Ŀ̶�
		oc.beginPath();
		oc.lineWidth=2;
		for(var i=0;i<60;i++){
			oc.moveTo(x,y);
			oc.arc(x,y,r,30*i*Math.PI/180,30*(i+1)*Math.PI/180,false);
			}
		oc.closePath();
		oc.stroke();
		//��̶ȵ�Բ�ٱ�СԲ����
		oc.fillStyle="white";
		oc.beginPath();
		oc.moveTo(x,y);
		oc.arc(x,y,r*18/20,0,360*(i+1)*Math.PI/180,false);
		oc.closePath();
		oc.fill();
		
		//ʱ��
		oc.lineWidth=3;
		oc.beginPath();
		oc.moveTo(x,y);
		
		oc.arc(x,y,r*10/20,oHoursValue,oHoursValue,false);
		oc.closePath();
		oc.stroke();
		
		//����
		oc.lineWidth=2;
		oc.beginPath();
		oc.moveTo(x,y);
		
		oc.arc(x,y,r*14/20,oMinValue,oMinValue,false);
		oc.closePath();
		oc.stroke();
		
		//����
		oc.lineWidth=1;
		oc.beginPath();
		oc.moveTo(x,y);
		
		oc.arc(x,y,r*18/20,oSenValue,oSenValue,false);
		oc.closePath();
		oc.stroke();
	}
	setInterval(zb,1000);
	zb();
	
};