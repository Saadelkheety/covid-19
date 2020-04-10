"use strict";
const questions = [
  `
  هل المريض مصاب بارتفاع درجة الحرارة 38 درجة او أكثر دون وجود سبب آخر؟
`,
  `
  هل المريض مصاب بالأعراض التنفسية الحادة - الكحة أو ضيق التنفس - دون وجود سبب آخر؟
  `,
  `
  <small>-خلال آخر 14 يوم:-</small>
  <br>
  هل المريض عائد من السفر أو كان مقيما في إحدى الدول أو المجتمعات التي ثبت إنتشار الفيروس بها
  <small>- سواء إنتشار مجتمعي واسع أو إنتقال محلى محدود-</small>
؟
  `,
  `
<small>-خلال آخر 14 يوم:-</small>
  <br>
  هل المريض كان مخالط لحالة أُكد إصابتها بالفيروس؟
  `,
  `
هل المريض أحد العاملين في مؤسسة صحية تم الإبلاغ فيها عن حالة مؤكدة؟
  `,
  `
<small>-خلال آخر 14 يوم:-</small>
  <br>
هل المريض خالط حالة أخرى مصابة بأعراض - الكحة أو ضيق التنفس أو ارتفاع درجة الحرارة ل 38 درجة أو أكثر ومرتبط وبائيا بمكان
<small>-محلي أو دولي-</small>
به تفشي وبائي؟-
  `,
  `
  <div class="alert alert-warning" role="alert">
يرجى توجه المريض إلى الطبيب لعمل أشعة على الصدر وتحليل صورة دم كامل
  </div>
هل يظهر في أشعة الصدر الخصائص التشخيصية المميزة للإصابة؟
  `,
  `
  <div class="alert alert-warning" role="alert">
يرجى توجه المريض إلى الطبيب لعمل أشعة على الصدر وتحليل صورة دم كامل
  </div>
هل يظهر في صورة الدم عدد طبيعي أو منخفض لكرات الدم البيضاء
<small>-total leukocyte count-</small>
مع إنخفاض كرات الدم الليمفاوية
<small>-lymphocytes-</small>
؟
  `,
];

var answers = {};

var results = {
  1: `
  <ul class="mt-5">
  <li>
  <h3>
  احتمالية الإصابة بالفيروس مرتفعة لذا يُنصح بتطبيق شروط العزل (إعزل نفسك عن باقي أفراد الأسرة في غرفة منفردة وتجنب الخروج من المنزل أو التعامل مع العامة حتى لا تقوم بنشر المرض) لحين إستشارة الطبيب وإجراء التحليل المخصص بفيروس كورونا .
  </h3>
  </li>
  <br/>
  <li>
  <h3>
  لمزيد من الإستفسارات يرجى الإتصال بالخط الساخن لوزارة الصحة والسكان "105"
  </h3>
  </li>
  </ul>
  <a href="covid-19_test.html" class="card-link">
  <button type="button" class="btn btn-lg btn-block  m-5" name="no">أعد الإختبار</button>
  </a>
  `,
  0: `
  <ul class="mt-5">
  <li>
  <h3>
  نظرا لعدم إنطباق أعراض فيروس كورونا على حالتك الصحية الحالية، انت لست في حاجة لإجراء التحليل المخصص بفيروس كورونا.
  </h3>
  </li>
   <br/>
   <li>
   <h3>
  لمزيد من الإستفسارات يرجى الإتصال بالخط الساخن لوزارة الصحة والسكان  "105"
  </h3>
  </li>
  </ul>
  <a href="covid-19_test.html" class="card-link">
  <button type="button" class="btn btn-lg btn-block  m-5" name="no">أعد الإختبار</button>
  </a>
  `,

}

let question_number = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function prev_question(){
  if (question_number > 0){
    --question_number;
    document.querySelector("#options").style.display = "block";
    document.querySelector("#result").innerHTML = "";
    load_question();
  }
}

function load_question() {

  // show back button if the question number is more than 1
  if (question_number > 0){
      document.querySelector("#backBtn").style.display = "inline";
    }
    else{
      document.querySelector("#backBtn").style.display = "none"
    }
    //

    // animation
    document.querySelector("#main").classList.remove('show');
    void document.querySelector("#main").offsetWidth;
    document.querySelector("#main").classList.add('show');
    //

    document.querySelector("#question").innerHTML = questions[question_number];

    // when questions are answered
    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {

            if (option.value == "yes") {
                answers[question_number] = 1;

                if((question_number > 1 && question_number < 6) || (answers[6] && answers[7])){
                  question_number++;
                  document.querySelector("#main").classList.remove('show');
                  void document.querySelector("#main").offsetWidth;
                  document.querySelector("#main").classList.add('show');
                  document.querySelector("#question").innerHTML = "";
                  document.querySelector("#options").style.display = "none";
                  document.querySelector("#result").innerHTML = results[1]
                }
                else{
                  question_number++;
                  load_question();
                }
            }
            else if (option.value == "no") {
              answers[question_number] = 0;

              if((answers[0] == 0 && answers[1] == 0) || (question_number == 6 || question_number == 7)){
                question_number++;
                document.querySelector("#main").classList.remove('show');
                void document.querySelector("#main").offsetWidth;
                document.querySelector("#main").classList.add('show');
                document.querySelector("#question").innerHTML = "";
                document.querySelector("#options").style.display = "none";
                document.querySelector("#result").innerHTML = results[0];
              }
              else{
                question_number++;
                load_question();
              }

            }
            else if (question_number+1 >= questions.length) {
              document.querySelector("#main").classList.remove('show');
              void document.querySelector("#main").offsetWidth;
              document.querySelector("#main").classList.add('show');
              document.querySelector("#main").innerHTML = results[0]
            }

        }
    });

}
