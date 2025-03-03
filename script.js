// let books=[];

// document.getElementById("submit").addEventListener('click', function(){
// 	let title=document.getElementById('title').value;
// 	let author=document.getElementById('author').value;
// 	let isbn=document.getElementById('isbn').value;

// 	books.push({title,author,isbn});

// 	showTable();

// 	// Clear input fields
//     document.getElementById('title').value = "";
//     document.getElementById('author').value = "";
//     document.getElementById('isbn').value = "";
// });

// function showTable() {
// 	let tableBody = document.getElementById('book-list');
// 	tableBody.innerHTML = "";
// 	for(let book of books){
// 		tableBody.innerHTML += `
//         <tr>
//             <td>${book.title}</td>
//             <td>${book.author}</td>
//             <td>${book.isbn}</td>
// 			<td><button class="delete" onclick="handleDelete('${book.title}')">Delete</button></td>
//         </tr>
//     `;
// 	}
// }

// function  handleDelete(title) {
// 	books=books.filter(book=>book.title!=title);
// 	showTable();
// }

let books = [];

document.getElementById("submit").addEventListener('click', function(){
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let isbn = document.getElementById("isbn").value;

	books.push({title, author, isbn});

	displayTable(books);

	document.getElementById("title").value="";
	document.getElementById("author").value="";
	document.getElementById("isbn").value="";
});

function displayTable(books){
	document.getElementById("book-list").innerHTML="";
	books.map((book, index)=>{
		document.getElementById("book-list").innerHTML+=`
		<tr>
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><button class="delete" onclick=handleDelete('${book.title}')>Delete</button></td>
		</tr>
		`
	})	
}

function handleDelete(title){
	books = books.filter((book) => {return book.title!=title});
	displayTable(books);
}