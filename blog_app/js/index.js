var firebaseConfig = {
   apiKey: "AIzaSyA3gZkecqHm7viz080FZsUWblnt7CImhGE",
   authDomain: "askandanswer-11c57.firebaseapp.com",
   databaseURL: "https://askandanswer-11c57.firebaseio.com",
   projectId: "askandanswer-11c57",
   storageBucket: "askandanswer-11c57.appspot.com",
   messagingSenderId: "15668163315",
   appId: "1:15668163315:web:c905529df3f2ca99e03d86",
   measurementId: "G-JWPZPBPSJC"
 };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function()
  {
     var email= $("#email").val();
     var password= $("#password").val();

     if (email!="" && password!="")
      {
         var result=firebase.auth().signInWithEmailAndPassword(email,password);
         result.catch(function(error) 
         {
             var errorCode=error.code;
             var errorMessage=error.message;
             console.log(errorCode);
             console.log(errorMessage);
             window.alert("Message :" + errorMessage);
         });
      }
     else{
         window.alert("Please fill All the fields!");
         }
  });

  $("#btn-logout").click(function()
  {
     firebase.auth().signOut();
  });

  
  $("#btn-signup").click(function()
  {
     var email= $("#email").val();
     var password= $("#password").val();
     var CPassword= $("#confirmpassword").val();

     if (email!="" && password!="" && confirmpassword!="")
      {
         if(password==CPassword)
         {
            var result=firebase.auth().createUserWithEmailAndPassword(email,password);
            result.catch(function(error) 
            {
                var errorCode=error.code;
                var errorMessage=error.message;
                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message :" + errorMessage);
            });
         }
         else{
             window.alert("Password not Same!");
         }
      }
     else{
         window.alert("Please fill All the fields!");
         }
  });

  $("#btn-resetPassword").click(function()
  {
      var auth=firebase.auth();
      var email= $("#email").val();
      if(email!="")
      {
         auth.sendPasswordResetEmail(email).then(function()
         {
            window.alert("email has been sent please check and verify");
         })
         .catch(function(error){
            var errorCode=error.code;
                var errorMessage=error.message;
                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message :" + errorMessage);


         });

      }
      else{
         window.alert("Please write your email first!");
      }
  });

  $("#btn-update").click(function()
  {
   var phone= $("#phone").val();
   var address= $("#address").val();
   var bio= $("#bio").val();
   var fName= $("#firstName").val();
   var sName= $("#secondName").val();
   var country= $("#country").val();
   var gender= $("#gender").val();

   var rootRef=firebase.database().ref().child("Users");
   var userID=firebase.auth().currentUser.uid;
   var usersRef=rootRef.child(userID);

   if(fName!=""&&sName!=""&&phone!=""&&country!=""&&gender!=""&&bio!=""&&address!="")
   {
            var userData=
            {
               "phone":phone,
               "address":address,
               "bio":bio,
               "firstName":fName,
               "secondName":sName,
               "gender":gender,
               "country":country,
            };
      usersRef.set(userData,function(error)
      {
           if(error)
           {
            var errorCode=error.code;
            var errorMessage=error.message;
            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message :" + errorMessage);

           }
           else
           {
            window.location.href="MainPage.html";
           }

      });





   }
   else{
      window.alert("Please fill All the fields!");
   }


  });