// 2 - Use fetch method with url https://jsonplaceholder.typicode.com/users
// To get data asynchronously from the API and display the Result on HTML
// table
// - Display the following Columns in table
//     - UserName - DONE
//     - email - DONE
//     - Company Name - DONE
//     - Address geo (address GeoLocation) - DONE
//     - show users posts’ titles as ul list in this column
//     and show how many comments are made by each post. /posts /comments
//  COUNTING THE COMMENTS MADE BY EACH POST - title in posts + postID in comments
// posts made by a userID, get titles of these posts, count how many comments this post has (postID in comments)


// await --> wait till I retreive the data from the URL
// I must await any asynch function //
// to write 'await' --> we've to have 'asynch' BUT no need to write 'await' if we have 'asynch'
// JSON is a format
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // contains JSON(array of objects --> keys : values) data
    const responseP = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseC = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json(); // convert to an JS either an array OR object, waits also for the data
    const dataP = await responseP.json(); // convert to an JS either an array OR object, waits also for the data
    const dataC = await responseC.json(); // convert to an JS either an array OR object, waits also for the data
    // console.log(data);
    // console.log(dataP);
    // console.log(dataC);
    let str = " ";
    // console.log(data.);
    let text = "<table border = '10px'>"; // adding the table tag with a border
    let header = "<th>Username</th><th>Email</th><th>Company Name</th><th>Address GEO</th><th>Posts & Comments</th>"; // table headers
    text+=header; // adding the th in the table
    // data.forEach(x =>{})
    for(var i=0; i<data.length; i++){
        str = " ";
        str+="<tr>"; // tr for each user
        let userName = "<td>" + data[i].username + "</td>";
        let email = "<td>" + data[i].email + "</td>";
        let companyName = "<td>" + data[i].company.name + "</td>";
        let address = "<td>" + data[i].address.geo.lat + " , "+ data[i].address.geo.lng + "</td>";
    
        // filter --> returns an array, takes every element based on the condition
        // users[0].id == post.userId
        //  checks koll post if id in USER = userId in POSTS --> if it returns true, take it
        // returns ALL posts of this user
        // map is similar to forEach but map returns a new array with modified data
        // AND forEach does NOT return an array (modifies the array itself)
        // .map(post => post.title) OR .map(post => {return post.title})
        let userPosts = dataP.filter(post => data[i].id == post.userId).map(post => post.title);
        // map returns an array, so access every title and diplay it in bullets

        // count comments based on postId (in comments) & id (in posts)
        let userComments = dataP.filter(post => data[i].id == post.userId) // returned a filtered array of posts for each user
          .map(x =>{
          // x.id --> id of post in POSTS, comment.postId --> id of post in its comment in COMMENTS
          let comments = dataC.filter(comment => x.id == comment.postId);
          let sum = comments.reduce((initialSum) => initialSum+=1 , 0); // returns a single value, incrementing the sum every time
          return sum;
          // list+=sum;
          // console.log(sum);
        });
        // userComments --> array of commentsSum for each post
        let list = "<td>"+"<ul>";
        // j is the element itself
        // n is the index of the current element j
        userPosts.forEach((j, n)=> {
          list+="<li>"+"Post: "+j+" , "+"COMMENTS: "+userComments[n]+"</li>";
        });
        list+="</ul>"+"</td>";

        // console.log(userComments);
        str+=(userName + email + companyName + address + list); // concat ALL to be put in 1 row for each user
        text+=str; // to put tr with the table
        // let tablee = document.getElementById("table").innerHTML = text;
    }
    text+="</table>"; // closes the table tag
    document.getElementById("table").innerHTML = text; // adds the table in the HTML

  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData()