
// import ClickableButton from "./ClickableButton";
// import myFunc, { msg } from "./myFunc";   

// function App() {
//   return (
//     <div>
//       <h1>Lab 6: My First React/Vite App</h1>

      {/* <ClickableButton /> */}

      {/* Affichage pour vérifier myFunc et msg */}
      {/* <p>{myFunc()}</p>
      <p>{msg}</p> */}
//     </div>
//   );
// }

// export default App;


import ProfileCard from "./components/ProfileCard.jsx";

function App() {
return (
<div>
<h1>My Team</h1>
{}
<ProfileCard
name="Djeghader Meriem Anfel"
role="Backend Engineer"
email="meriem.djeghader@univ-constantine2.dz"
/>
<ProfileCard
name="Djeghader Afnane"
role="Frontend Engineer"
email="afnanedr@gmail.com"
/>
</div>
);
}
export default App;