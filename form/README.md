<h3>simple registration form</h3>

<p>Contains login, password and password confirmation.
When a user types, errors appear in real-time.</p>
<p>Rules for email validation (order doesn't matter):
<ul>
  <li> not empty </li>
  <li> contains '@' </li>
  <li> contains '.' </li>
</ul>
</p>
<p> Rules for password validation: 
<ul>
  <li> not empty </li> 
  <li> contains 8 characters </li> 
  <li> contains one capital letter </l>
  <li> contains one digit </li>
</ul>
</p>
The error message is specific for each rule, for example,  "email must not be empty". For each value appears only one error message in one period of time. If the password is not confirmed specific error occurs.
Send button is locked if any value is not valid.
