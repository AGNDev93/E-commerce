// PRIMER EJERCICIO PRUEBA TÉCNICA: CUANDO LE DE CLICK AL BOTÓN DEBE MOSTRAR LA CAJITA
//  Y CUANDO LE VUELVA A DAR CLICK DEBE ESCONDERLA

// import React, { useState } from "react";

// const Pruebas = () => {
//   const [show, setShow] = useState(false);

//   const magia = () => {
//     setShow((prevShow) => !prevShow);
//   };

//   return (
//     <div>
//       <button onClick={magia}>Tócame y verás la magia</button>
//       {show && (
//         <div className="bg-primary d-flex justify-content-center" style={{marginLeft: "500px", marginRight: "500px"}}>
//           Qué Caja jajaj
//         </div>
//       )}
//     </div>
//   );
// };

// export default Pruebas;

//SEGUNDA PRUEBA TÉCNICA: DESHABILITAR EL BOTÓN DE ENVIAR CUANDO EL EMAIL TENGA MENOS DE 2 CARACTERES

// import React, { useState } from "react";

// const Pruebas = () => {
//   const[email, setEmail]=useState("");
//   return (
//     <div className="d-flex flex-column">
//       <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//       <input className="p-2" type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
//       <div>
//       <button disabled={email.length<2}>SEND</button>
//       </div>
//     </div>
//   )
// }
// export default Pruebas;

//Monstrar imágen del personaje con api externa dada por la empresa, consumiendo la api desde el flux

// import React, { useEffect, useContext, useState } from "react";
// import { Context } from "../store/appContext";

// const Pruebas = () => {
//   const { actions, store } = useContext(Context);

//   useEffect(() => {
//     actions.getCharacters();
//   }, []);

//   return (
//     <div>
//       <h1>EJERCICIO PRUEBA TÉCNICA</h1>
//       <div>
//         {store.characters.map((item, index) => (
//           <div key={index}>
//             <h2>{item.login}</h2>
//             <img style={{ width: "90px" }} src={item.avatar_url}></img>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Pruebas;
