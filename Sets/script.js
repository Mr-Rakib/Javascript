/* 
    set stores unique values
    ignore the duplicate items 
*/
const set = new Set();

let values =
{
    access_token: "NAUPsc_CXdPKCzh1w7TMd7V0a2ZopsvlQyeehFc220vh9e5E-TC56s0529Toek2DhCZjjE_v5C3YAe_jsdev_mildWDDO6ZZ81R90CR2pFqVlF47290kg8v1eV0Hmd8qeDViE0b7pLTV4TVnzZSyCu73q_sgchBIYKAbKDwbrGT5dy1naa8vRFzp4-65l5yKxniw9y-j3Cf9npGtVcdnlcTWQXpLK7QmmggdkIcy_tBvI5Jo9fk0doU0ZBcUzmhEU4LVzc_Yw2P9ApyO6VoZR34Ar9vHc-QyGEaZGBXZJoikI-RJbnXX8rcfSX0E0_Mlj56blAaSxvNpnVnXWbGvJ7szX_u4RhGCE_UVecsMQB7rkv6sT56-oOdMe3aWpK-RCPJZA0jeCbTKv5T1gwk_tjOqfxOZZ3qPXugY1bgi4FM",
    token_type: "bearer",
    expires_in: 43199,
    user_type: "Employer",
    last_login_date: "1611390443",
    email: "corporate@gmail.com"
}


set.add(100);
set.add('100');
set.add(100); // duplicate with [0]
set.add('100'); // duplicate with [1]
set.add(true);
set.add(false);
set.add({ a: 2, b: 5, c: true });
set.add(values);

console.log(set);
console.log(set.size);
console.log(set.has(100));

set.delete(true)
console.log(set);
console.log("-------------For of -----------")
for(let item of set){
    console.log(item)
}

console.log("-------------For each -----------")
set.forEach(item=>{
    console.log(item)
})

console.log(Array.from(set))