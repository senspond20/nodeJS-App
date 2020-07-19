function Calendar(Date,  CalTableId) {
    this.tbl = document.getElementById(CalTableId); 
    this.isFirst = true;
 
    this.y = Date.getFullYear();
    this.m = Date.getMonth();
    this.d = Date.getDate();
  }
  Calendar.prototype.alterYear = function(y){
    this.y = y;
    this.build();
  }
  Calendar.prototype.alterMonth = function(m){
    // 1->0 : month - zero index 
    this.m = m -1;
    this.build();
  }
  Calendar.prototype.setPrev = function(){

    if(this.m <= 0){
      this.m = 11;
      this.y--;
    }else{
      this.m--;
    }
      this.build();
  }
  Calendar.prototype.setNext = function(){
    if(this.m >=11){
      this.m = 0;
      this.y++;
    }else{
      this.m++;
    }
    this.build();
  }

  Calendar.prototype.build = function(){
    console.log('build');

    let i = 0;
    let r,c = null;  // 행,열
    const t = this.tbl;
    const y = this.y;
    const m = this.m;

    // 달력이 처음실행되면
    if(this.isFirst){
          // 1. 해더 행을 그린다.
          r = t.insertRow();
          c = r.insertCell();         
          const p = "prev" + t.id;
          const n = "next" + t.id;

          c.innerHTML = "<button id =" + p + ">&lt;</button>"; // 이전 달 버튼
          document.getElementById(p)
                .addEventListener('click',(e)=>{
                e.preventDefault();
                this.isFirst = false;
                this.setPrev();
          })
          
          c= r.insertCell();
          c.colSpan = 5;
          c.innerHTML =  "<div id= head" + t.id + ">" + y + "년" + (m + 1) + "월</div>";

          c = r.insertCell();
          c.innerHTML = "<button id =" + n + ">&gt;</button>"; // 다음 달 버튼
          document.getElementById(n)
              .addEventListener('click',(e)=>{
              e.preventDefault();
              this.isFirst = false;
              this.setNext();
         })

          // 2. 요일 행을 그린다.
          const w = ["일","월","화","수","목","금","토"];
          r = t.insertRow();
          for(i= 0; i < w.length; i++){
            c = r.insertCell()
            c.textContent = w[i];
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
        "<div id= head" + t.id + ">" + y + "년" + (m + 1) + "월</div>";
    }

      const nMonth = new Date(y, m, 1);      // 이번달의 첫번째날
      const lastDate = new Date(y, m + 1, 0); //이번달의 마지막날
  
      r = t.insertRow();
      let cnt = 0;

      for (i = 0 ; i < nMonth.getDay(); i++) {
        c = r.insertCell();
        cnt++;
      }
      //달력 출력
      for (i = 1; i <= lastDate.getDate(); i++) {
        c = r.insertCell();
        c.textContent = i;

        if (cnt++ && cnt % 7 == 0)      
             r = t.insertRow();
        }
 }




