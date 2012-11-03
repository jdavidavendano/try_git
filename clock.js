var Clock=function(HH, MM, SS){
    this.HH=HH;
    this.MM=MM;
    this.SS=SS;
    this.time = function(){
        var NewHH=this.HH;
        var NewMM=this.MM;
        var NewSS=this.SS; 
        if (this.HH <10){
           NewHH="0"+this.HH}
        if (this.MM <10){
           NewMM ="0"+this.MM}
        if (this.SS <10){
           NewSS="0"+this.SS}
            
        return NewHH+":"+NewMM+":"+ NewSS;
 
             };

this.tick=function(){
    this.SS++;
        if (this.SS>=60){
            this.SS=0;
            this.MM++;
        }
        if (this.MM>=60){
            this.MM=0;
            this.HH++;
         }
        if (this.HH>=24){
            this.HH=0;
        }
       if (this.time () == this.alarm){
          console.log("alert");
       }
  };
                
                
                
                this.alarm = [];
             this.addAlarm=function(alarm){
                this.alarm.push(alarm);
              };
                
                
};
               
        var hour1=new Clock(20, 59, 58);
                    hour1.addAlarm("21:00:02");
            console.log(hour1.time());
            hour1.tick();
                 console.log(hour1.time());
            hour1.tick();
                 console.log(hour1.time());
            hour1.tick();
                 console.log(hour1.time());
            hour1.tick();
                 console.log(hour1.time());
            hour1.tick();
                 console.log(hour1.time());
            hour1.tick();
                 console.log(hour1.time());
            hour1.tick();
                 console.log(hour1.time());
             