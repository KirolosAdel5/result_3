// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPW5ml8AKCKqSkGY_xK44QVEY8edlG5ME",
  authDomain: "resultofexam.firebaseapp.com",
  projectId: "resultofexam",
  storageBucket: "resultofexam.appspot.com",
  messagingSenderId: "350123697657",
  appId: "1:350123697657:web:3fcf88849c7d918edb4928"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

const verse = document.getElementById('verse')
const results = document.getElementById('res')
const results2 = document.getElementById('res2')
const results3 = document.getElementById('res3')
const thxmassage = document.getElementById('thx')
const smBtn = document.getElementById('smt-btn')

var verses = ["به ينتهي إلى النجاح، وبكلمته يقوم الجميع",
"رُبَّ نجاح يكون لأذى صاحبه",
"أَمَّا الْحِكْمَةُ فَنَافِعَةٌ لِلإِنْجَاحِ","إِلهَ السَّمَاءِ يُعْطِينَا النَّجَاحَ، وَنَحْنُ عَبِيدُهُ نَقُومُ وَنَبْنِي"
,"كَانَ الرَّبُّ مَعَ يُوسُفَ فَكَانَ رَجُلًا نَاجِحًا",
"أَرُومُ أَنْ تَكُونَ نَاجِحًا وَصَحِيحًا، كَمَا أَنَّ نَفْسَكَ نَاجِحَةٌ"];


function save() {
  var name = document.getElementById('name').value
  var id = document.getElementById('id').value
  var grade1 = document.getElementById('grade1').value
  var grade2 = document.getElementById('grade2').value
  var grade3 = document.getElementById('grade3').value

  database.ref('users/' + id).set({
    name : name,
    id : id,
    grade1 : grade1,
    grade2 : grade2,
    grade3 : grade3
  })

  alert('Saved')
}

function get() {
  var code = document.getElementById('code').value

  var user_ref = database.ref('users/' + code)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()
    thxmassage.innerHTML = "اذا تاخرت الدرجة في التحميل فذلك بسبب خطاء في رقم الجلوس او انك تكتب الرقم ب اللغة العربية"
    results.innerHTML = data.grade1 + " / 50 "
    res2.innerHTML = data.grade2 + " / 50 "
    res3.innerHTML = data.grade3 + " / 50 "
    if (data.grade1 != null){    verse.innerHTML = "''"+verses[Math.floor(Math.random()*verses.length)]+"''";  }
    thxmassage.innerHTML = " شكرا ليك يا" +" "+ data.name

  })


}



$(".Click-here").on('click', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
  $(".close-btn, .bg-overlay, .btn-danger").click(function(){
    $(".custom-model-main").removeClass('model-open');
  });
  $('.btn-success').on('click', function(event) {
      event.preventDefault(); // To prevent following the link (optional)
      location.href="https://api.whatsapp.com/send?phone=201289022985&text=welcome";
    });
