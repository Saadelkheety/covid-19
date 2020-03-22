"use strict";
const questions = [
  `<h3>
  هل شعرت بأحد هذه الأعراض:
  </h3>
  <p>
  - صعوبة بالغة في التنفس
    <br/>
  - ألم شديد بالصدر
    <br/>
  - صعوبة في الإستيقاظ
    <br/>
  - فقدت الوعي أو شعرت بإرتباك
    </p>
`,
  `
  <h3>
  هل عانيت من:
  </h3>
  <p>
- صعوبة في التنفس أثناء (الجلوس أو الرحة)
  <br/>
- عدم القدرة على النوم أو الإستلقاء نتيجة بسبب صعوبة التنفس
  <br/>
- تعاني من حالة صحية مزمنة وتواجه صعوبة في إحتوائها نتيجة مشكلة التنفس الحالية
  </p>
  `,
  `
  <h3>
  هل لديك أيا من هذه الأعراض:
  </h3>
  <p>
- كحة
<br/>
- إرتفاع في درجة حرارة الجسم
<br/>
- صعوبة في التنفس
<br/>
- إحتقان في الحلق
</p>
  `,
  `
  <h3>
  هل تعاملت مع أحد الحالات المؤكد إصابتها بفيروس كورونا، خلال ال 14 يوم الماضية؟
  </h3>
  <p>
  التعامل الشخصي هو:
  <br/>
  •	تقديم الرعاية لأحد أفراد أسرتك الذي تأكد إصابته بفيروس كورونا أو تعمل بمجال الرعاية الصحية
  <br/>
  •	تعرضت لإتصال مباشر بأحد السوائل الجسدية للمصابة عن طريق (السعال أو العطس) بدون وسائل الحماية الشخصية
  <br/>
  `,
  `
  <h3>
  خلال ال 14 يوم الماضية، هل كنت مسافرا خارج جمهورية مصر العربية؟
  </h3>
  `,
];

let question_number = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
    document.querySelector("#main").classList.remove('show');
    void document.querySelector("#main").offsetWidth;
    document.querySelector("#main").classList.add('show');
    document.querySelector("#question").innerHTML = questions[question_number];
    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            if (option.value == "yes" & question_number != 4) {
                document.querySelector("#main").classList.remove('show');
                void document.querySelector("#main").offsetWidth;
                document.querySelector("#main").classList.add('show');
                document.querySelector("#main").innerHTML = `
                <ul class="mt-5">
                <li>
                <h3>
                يُنصح بتطبيق شروط العزل (إعزل نفسك عن باقي أفراد الأسرة في غرفة منفردة وتجنب الخروج من المنزل أو التعامل مع العامة حتى لا تقوم بنشر المرض) لحين إستشارة الطبيب وإجراء التحليل المخصص بفيروس كورونا.
                </h3>
                </li>
                <br/>
                <li>
                <h3>
                لمزيد من الإستفسارات يرجى الإتصال بالخط الساخن لوزارة الصحة والسكان على الخط الساخن "105"
                </h3>
                </li>
                </ul>
                </ul>
                <a href="covid-19_test.html" class="card-link">
                <button type="button" class="btn btn-lg btn-block  m-5" name="no">أعد الإختبار</button>
                </a>
                `
            }
            else if (++question_number < questions.length & option.value == "no" | question_number == 4) {
              load_question();
            }
            else {
              document.querySelector("#main").classList.remove('show');
              void document.querySelector("#main").offsetWidth;
              document.querySelector("#main").classList.add('show');
              document.querySelector("#main").innerHTML = `
              <ul class="mt-5">
              <li>
              <h3>
              نظرا لعدم إنطباق أعراض فيروس كورونا على حالتك الصحية الحالية، انت لست في حاجة لإجراء التحليل المخصص بفيروس كورونا.
              </h3>
              </li>
              <br/>
              <li>
              <h3>
               إذا شعرت بعد فترة بهذه الأعراض المذكورة مسبقا، يُنصح بتطبيق شروط العزل (إعزل نفسك عن باقي أفراد الأسرة في غرفة منفردة وتجنب الخروج من المنزل أو التعامل مع العامة حتى لا تقوم بنشر المرض) لحين إستشارة الطبيب وإجراء التحليل المخصص بفيروس كورونا.
               </h3>
               </li>
               <br/>
               <li>
               <h3>
              لمزيد من الإستفسارات يرجى الإتصال بالخط الساخن لوزارة الصحة والسكان على الخط الساخن "105"
              </h3>
              </li>
              </ul>
              <a href="covid-19_test.html" class="card-link">
              <button type="button" class="btn btn-lg btn-block  m-5" name="no">أعد الإختبار</button>
              </a>
              `
            }

        }
    });

}
