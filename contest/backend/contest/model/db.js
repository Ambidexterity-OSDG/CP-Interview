// Firebase : Storage and Database
const dbConnector = require('../firebase/firebase_connect').app;
const dbstorage = require('../firebase/firebase_connect').storage; // not recommended.
// const dbref = dbConnector.database().ref();
const dbfirestore = dbConnector.firestore();
const dbContestRef =  dbConnector.firestore().collection('contests');
const dbQuestionsRef =  dbConnector.firestore().collection('questions');

/**
 * @description All READ queries
 */
exports.getAllQuestions = function(params){
    return dbQuestionsRef.doc(params.contestId).get();
};

exports.getAllContest = function(params){
    return dbContestRef.where("status","==",params.status).get();
}

exports.getContestURL = require('../firebase/firebase_connect').basequestionURL;


/**
 * @description All CREATE queries
 */
exports.setQuestions = function(contestId,data,callback) {
    dbfirestore.collection('questions').doc(contestId).set(data).then((m)=>{
        callback(null,{"success":true});
    }).catch((m)=> {
        callback(m,{"success":false});
    })

}

exports.setContest = function(contestId,data,callback) {
    dbfirestore.collection('contests').doc(contestId).set(data).then((m)=>{
        callback(null,{"success":true});
    }).catch((m)=> {
        callback(m,{"success":false});
    })
}

//old method

// exports.getContestFiles = function(params){
//     return dbstorage.getFiles(`questions/${params.contestId}/${params.questionId}.pdf`);
// }

// exports.getAllQuestions = function(data,callback){
//     dbref.child("questions").child(data.contestId).get().then((snapshot) => {
//         if (snapshot.exists()) {
//           return (snapshot.val());
//         } else {
//           console.log("No data available");
//         }
//       }).catch((error) => {
//         console.error(error);
//       });
// };

// exports.getAllQuestions = function(data){
//     return dbref.child("questions").child(data.contestId).get();
// };

// exports.getAllContest = function(){
//     return dbref.child("contests").child("contestId").orderByChild("*/status").equalTo("ongoing").get();
// }

// module.exports.uploadCv = async (userId, Cv) => {
//     console.log(Cv.path);
//     await db.bucket.upload(Cv.path, {
//         destination: "Cv/" + userId,
//         metadata: {
//             contentType: Cv.mimetype,
//             cacheControl: 'public, max-age=31536000'
//         }
//     }, (err, file) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('done');
//         }
//         return;
//     });
// };