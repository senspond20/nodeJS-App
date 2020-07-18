function Calendar(Date,  CalTableId) {
    this.tbl = document.getElementById(CalTableId); 
    this.isFirst = true;
    this.today = Date;
  }
 
  Calendar.prototype.setPrev = function(){
    const d = this.today;
    this.today = new Date(d.getFullYear(), d.getMonth() - 1, d.getDay());
    this.build();
  }
  Calendar.prototype.setNext = function(){
    const d = this.today;
    this.today = new Date(d.getFullYear(), d.getMonth() + 1, d.getDay());
    this.build();
  }

  Calendar.prototype.build = function(){
    let i = 0;
    let row = null;  // 행
    let cell = null; // 열
    const t = this.tbl;
    const year = this.today.getFullYear();
    const month = this.today.getMonth();

    // 달력이 처음실행되면
    if(this.isFirst){
    
          // 1. 해더 행을 그린다.
          row = t.insertRow();
          cell = row.insertCell();

          const prev = "prev" + t.id;
          const next = "next" + t.id;

          cell.innerHTML = "<button id =" + prev + ">&lt;</button>"; // 이전 달 버튼
          document.getElementById(prev)
                .addEventListener('click',(e)=>{
                e.preventDefault();
                this.isFirst = false;
                this.setPrev();
          })
          
          cell = row.insertCell();
          cell.colSpan = 5;
          cell.innerHTML =  "<div id= head" + t.id + ">" + year + "년" + (month + 1) + "월</div>";

          cell = row.insertCell();
          cell.innerHTML = "<button id =" + next + ">&gt;</button>"; // 다음 달 버튼
          document.getElementById(next)
              .addEventListener('click',(e)=>{
              e.preventDefault();
              this.isFirst = false;
              this.setNext();
         })

          // 2. 요일 행을 그린다.
          const week = ["일","월","화","수","목","금","토"];
          row = t.insertRow();
          for(i= 0; i < week.length; i++){
            cell = row.insertCell()
            cell.textContent = week[i];
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

      const nMonth = new Date(year, month, 1);      // 이번달의 첫번째날
      const lastDate = new Date(year, month + 1, 0); //이번달의 마지막날
  
      row = t.insertRow();
      let cnt = 0;

      for (i = 0 ; i < nMonth.getDay(); i++) {
        cell = row.insertCell();
        cnt++;
      }
      //달력 출력
      for (i = 1; i <= lastDate.getDate(); i++) {
        cell = row.insertCell();
        cell.textContent = i;

        if (cnt++ && cnt % 7 == 0)      
             row = t.insertRow();
        }
 }




