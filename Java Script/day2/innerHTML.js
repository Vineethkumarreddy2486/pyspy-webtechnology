// In innerHTML if we give any tags those will be consider as tags not statements
document.getElementById('a').innerHTML="this <hr> is <hr> H1 tag"
document.getElementById('div').innerHTML="<div style='width: 500px;height: 100px;background-color: red;'></div>"
document.getElementById('table').innerHTML="<table style='border: solid 2px black;'><tr>box<th>TABLE</th></tr></table><br><hr>"

// In "innerText" if we write any tags those will be considered as texts/statements not tags

document.getElementById('spa').innerText="<div style='width: 500px;height: 100px;background-color: red;'></div>"