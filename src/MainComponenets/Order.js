import React,{useState} from 'react';

const Store = () =>{
   const [user, setUser] = useState({
        name: null,
        email: null,
        number: null,
        address: null
    });

    const handleChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;

    setUser({...user,[name]:[value]});
    
   }
    const handleSubmit = (event) =>{
        event.preventDefault();
       console.log(user.number.length);
    }


    
        return<>
        <center>
        <div>


        <div className="forms">
            <form>

        <input id="name" name="name" className="name_input" type="text" placeholder="NAME"/>
        <br/>
        <span id="name_err"></span>
        <br/>
            <input id="email" 
            onChange={handleChange}
            name='email' 
            type="text" 
            placeholder="EMAIL" />

            <br/>
            <span id="email_err"></span>
            <br/>
                <input id="number" 
                onChange={handleChange}
                name="number" 
                type="text" 
                placeholder="MOBILE NUMBER"/>

                <br/>
                <span id="number_err"></span>
                <br/>

            <input id="address" 
            onChange={handleChange}
            name="address" 
            type="text" 
            placeholder="ADDRESS"/>

            <br/>

            <span id="address_err"></span>
            <br/>
            <input id="btn" type="submit" value="Register" onClick={handleSubmit}/>
        </form>
    </div>
     </div>
     </center>
     </>
}

export default Store;