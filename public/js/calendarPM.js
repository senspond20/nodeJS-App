function Calendar(Date,  CalTableId) {
    this.tbl = document.getElementById(CalTableId); 
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

  Calendar.prototype.getYear = function(){
    return this.year;
  }

  Calendar.prototype.getMonth = function(){
    return this.month;
  }

  Calendar.prototype.build = function(){
    var index = 0;
    var row,cell = null;  // 행,열
    var t = this.tbl;
    var year = this.year;
    var month = this.month;

    // 기존 테이블에 있던 달력 숫자 (2행부터) 삭제
    while (t.rows.length > 2) {
      t.deleteRow(t.rows.length - 1);
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
        cell.innerHTML = "<div id= day" + index + ">" + index + "</div>";
        if (cnt++ && cnt % 7 == 0)      
             row = t.insertRow();
        }
 }
