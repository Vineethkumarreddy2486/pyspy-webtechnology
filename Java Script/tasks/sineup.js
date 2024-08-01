document.getElementById('container').innerHTML=`
<div id="leftcontainer">
            <h1 id="leftheading">Sineup</h1>
            <p id="leftpara">If you already have an account.</p>
            <input type="text" value="login">
</div>
<div id="rightcontainer">
    <table>
        <tr>
            <th>
                <sup>*</sup><input type="text" placeholder="First Name" required>
            </th>
            <th>
                <sup>*</sup><input type="text" placeholder="Surname" required>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                <sup>*</sup><input type="text" placeholder="Mobile Number Or E-mail Adress" required> 
            </th>
        </tr>
        <tr>
            <th>
                <sup>*</sup><input type="password" placeholder="New password" required>
            </th>
        </tr>
        <tr>
            <th>
                <sup>*</sup><input type="text" placeholder="Confirm Password" required>
            </th>
        </tr>
        <tr>
            <td>Choose Your DOB</td>
        </tr>
        <tr>
            <th colspan="2">
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
                <select>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                </select>
                <select>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                </select>
            </th>
        </tr>
        <tr>
            <td colspan="2">Gender</td>
        </tr>
        <tr>
            <th colspan="2">
                <input type="radio" name="gen">Male
                <input type="radio" name="gen">Female
                <input type="radio" name="gen">Others
            </th>
        </tr>
        <tr>
            <td colspan="2" id="terms">
                people who use our service may have uploaded your correct information to facebook.Learn more
                by clicking Sine Up.You agree to our Terms,Privacy policy and Cookies policy.You may receive 
                SMS notification from our team at anytime.
            </td>
        </tr>
        <tr>
            <th colspan="2">
                <input type="submit" value="Sineup">
            </th>
        </tr>
    </table>
</div>`
document.querySelector('body').style.backgroundImage='linear-gradient(75deg,orange,orangered)'
// targeting parent div
var container=document.getElementById('container');
container.style.width='100vw'
container.style.height='100vh'
container.style.display='flex'
container.style.flexDirection='column'
container.style.justifyContent='space-evenly'
container.style.alignItems='center'

// targeting leftcontainer
var leftcontainer=document.getElementById('leftcontainer')
leftcontainer.style.display='flex'
leftcontainer.style.flexDirection='column'
leftcontainer.style.backgroundColor='white'
leftcontainer.style.width='50vw'
leftcontainer.style.height='100vh'