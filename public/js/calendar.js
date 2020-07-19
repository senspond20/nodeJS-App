function Calendar(Date,  CalTableId) {
    this.tbl = document.getElementById(CalTableId); 
    this.isFirst = true;
    this.year = Date.getFullYear();
    this.month = Date.getMonth();
    this.date = Date.getDate();
  }
  Calendar.prototype.alterYear = function(year){
    this.year = year;
    this.build();
  }
  Calendar.prototype.alterMonth = function(month){
    // 1->0 : month - zero index 
    this.month = month -1;
    this.build();
  }
  Calendar.prototype.getYear = function(){ return this.year; }
  Calendar.prototype.getMonth = function(){return Number(this.month+1);}
  Calendar.prototype.getDate = function(){ return this.date; }

  Calendar.prototype.setPrev = function(){
    if(this.month <= 0){
      this.month = 11;
      this.year--;
    }else{
      this.month--;
    }
      this.build();
  }
  Calendar.prototype.setNext = function(){
    if(this.month >=11){
      this.month = 0;
      this.year++;
    }else{
      this.month++;
    }
    this.build();
  }

  Calendar.prototype.build = function(){
    var index = 0;
    var row,cell = null;  // 행,열
    var t = this.tbl;
    var year = this.year;
    var month = this.month;

    // 달력이 처음실행되면
    if(this.isFirst){
    
          // 1. 해더 행을 그린다.
          row = t.insertRow();
          cell = row.insertCell();

          var prev = "p_" + t.id;
          var next = "n_" + t.id;

          cell.innerHTML = "<button id =" + prev + ">&lt;</button>"; // 이전 달 버튼
   
          cell = row.insertCell();
          cell.colSpan = 5;
          cell.innerHTML =  "<div id= head" + t.id + ">" + year + "년" + (month + 1) + "월</div>";
          cell = row.insertCell();
          cell.innerHTML = "<button id =" + next + ">&gt;</button>"; // 다음 달 버튼

          // 2. 요일 행을 그린다.
          var week = ["일","월","화","수","목","금","토"];
          row = t.insertRow();
          for(index= 0; index < week.length; index++){
            cell = row.insertCell()
            cell.textContent = week[index];
          }
        
     // 아니면
    }else{

          // 기존 테이블에 있던 달력 숫자 (2행부터) 삭제
          while (t.rows.length > 2) {
            t.deleteRow(t.rows.length - 1);
          }
          this.isFirst = false;
    }

    if(!this.isFirst){
        document.getElementById('head' + t.id).innerHTML =
        "<div id= head" + t.id + ">" + year + "년" + (month + 1) + "월</div>";
    }

      var nMonth = new Date(year, month, 1);      // 이번달의 첫번째날
      var lastDate = new Date(year, month + 1, 0); //이번달의 마지막날
  
      row = t.insertRow();
      var cnt = 0;

      for (index = 0 ; index < nMonth.getDay(); index++) {
        cell = row.insertCell();
        cnt++;
      }
      //달력 출력
      for (index = 1; index <= lastDate.getDate(); index++) {
        cell = row.insertCell();
        
        cell.innerHTML = "<div class ='calday' id= day" + index + ">" + index + "</div>";

        if (cnt++ && cnt % 7 == 0)      
             row = t.insertRow();
        }
 }
